#! /bin/bash
if [ "$HOSTNAME" = ads20unpathd0 ]; then
    sudo docker compose -f docker-compose.production.yml up --build -d
else
    sudo docker compose -f docker-compose.demo.yml up --build -d
fi