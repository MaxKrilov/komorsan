#!/usr/bin/env bash

cd /home/artem
docker-compose stop komorsan_vue_frontend
yes | docker system prune
docker-compose up -d komorsan_vue_frontend