# API Cookenu

Back-end para projetos do front. Utiliza express e mysql.

## Documentação

https://documenter.getpostman.com/view/21151478/2s8YzMZRju#intro

## Deploy

Atualmente está deployado no render.

## Scripts para iniciar
- npm install && npm run build
- node build/index.js

## Migration MySQL
- npm run migrations

## Environment

```
PORT = 3003
DB_HOST = 
DB_USER = 
DB_PASSWORD = 
DB_DATABASE = 

JWT_KEY = 
JWT_EXPIRES_IN = "24h"

BCRYPT_SALT_ROUNDS = 12
```
