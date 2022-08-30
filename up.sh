#! /bin/bash
sudo docker compose -f docker-compose.demo.yml up --build -d
sudo docker exec -it unpathd-api cd /var/www/ && composer install