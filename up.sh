#! /bin/bash
if [ "$HOSTNAME" = ads24unpathd0 ]; then
    docker compose -f docker-compose.production.yml up --build -d
else
    docker compose -f docker-compose.demo.yml up --build -d
fi
