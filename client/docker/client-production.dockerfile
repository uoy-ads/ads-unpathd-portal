

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
RUN npm run build

#
# Setup NGINX server
#
FROM nginx:1.19.0-alpine AS ariadne-client

# Copy app to server default web root
COPY --from=ariadne-build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY --from=ariadne-build /app/docker/nginx-production.conf /etc/nginx/nginx.conf

# Restart and reload new configuration
# RUN nginx -s reload

CMD ["nginx","-g","daemon off;"]

EXPOSE 80

