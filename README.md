# Luke Jones Portfolio

## PayloadCMS

In the `luke-jones-portfolio` directory.

### Installed from CLI

`npx create-payload-app@latest -t website`

## Postgres

### Install PostgreSQL with a Single Docker Command Method

```sh
docker run --name lukejonescms_postgres -e POSTGRES_PASSWORD="PASSWORD" -d  -p 5432:5432 postgres:15-alpine
# docker run -d --name lukejonescms_postgres -v lukejonescms_dbdata:/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_PASSWORD="PASSWORD" postgres:15-alpine
```

### Accessing the PostgreSQL Docker Container

```sh
# docker exec -it lukejonescms_postgres bash
docker exec -it lukejonescms_postgres psql -U postgres
postgres-# postgres-# CREATE DATABASE lukejonescms;
```

Reset database password:
`ALTER USER postgres WITH PASSWORD 'new_password';`

To quit:

```sh
\q
```

Server path:
`postgresql://lukejonescms_postgres:PASSWORD@localhost:5432/postgres`

Logs for troubleshooting:

```sh
docker logs -f lukejonescms_postgres
```
