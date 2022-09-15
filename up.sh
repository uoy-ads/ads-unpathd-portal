#! /bin/bash
if [ "$HOSTNAME" = ads20unpathd0 ]; then
    DOCKER_FILE = 'docker-compose.production.yml';
else
    DOCKER_FILE = 'docker-compose.demo.yml'
fi

sudo docker compose -f $DOCKER_FILE up --build -d