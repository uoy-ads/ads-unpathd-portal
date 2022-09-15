# Build Aridne Portal VUE project for staging/production env.
#
# This docker settings are fired only when it's setup through ../docker.compose.yml
#
# IMPORTANT:
# If you build for production/staging make sure you have the correct API-URI set on webpack.config.js
#
# ariadneApiPath  = 'http://localhost:8080';
# Staging env: https://ariadne-portal-staging.d4science.org:8080
#


#
# Setup client environment.
#
FROM node:15-alpine AS ariadne-build
LABEL maintainer="SND <team-it@snd.gu.se>"
WORKDIR /app
COPY package*.json ./
#RUN npm install
# install from package-lock.json
RUN npm ci
COPY . .
ARG buildscript
RUN npm run $buildscript

#
# Setup NGINX server
#
FROM nginx:1.19.0-alpine AS ariadne-client

# Copy app to server default web root
#COPY --from=ariadne-build /app/dist /usr/share/nginx/html
RUN mkdir /usr/share/nginx/html/unpathd
COPY --from=ariadne-build /app/dist /usr/share/nginx/html/unpathd

# Copy nginx configuration to 
#COPY --from=ariadne-build /app/docker/default.conf /etc/nginx/conf.d/
COPY --from=ariadne-build /app/docker/nginx.conf /etc/nginx/nginx.conf

# Restart and reload new configuration
# RUN nginx -s reload

CMD ["nginx","-g","daemon off;"]

EXPOSE 80

