#!/bin/sh

# Instalar as dependências
yarn cache clean
yarn install --force

# Inicializar o banco de dados
docker compose -f ./apps/backend/docker-compose.yml up -d 

# Popular o banco de dados
yarn --cwd ./apps/backend prisma migrate dev
yarn --cwd ./apps/backend prisma db seed