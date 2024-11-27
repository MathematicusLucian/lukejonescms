# Luke Jones Portfolio

## PayloadCMS

In the `luke-jones-portfolio` directory.

### Installed from CLI

`npx create-payload-app@latest -t website`

### Deploy to Cloudflare

`pnpx wrangler login`
`pnpx wrangler pages deploy dist --project-name mathematicusluciancom`

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
postgres-# postgres-# CREATE DATABASE lukejonescms
```

Reset database password:
`ALTER USER postgres WITH PASSWORD 'new_password';`

To quit:

```sh
\q
```

\d+ projects_rels

ALTER TABLE projects_rels RENAME CONSTRAINT projects_id_post_id to projects_id_project_id

Server path:
`postgresql://lukejonescms_postgres:PASSWORD@localhost:5432/postgres`

Logs for troubleshooting:

```sh
docker logs -f lukejonescms_postgres
```

### Deploying Local Postgres to Neon

Neon faster than Google Cloud SQL.

Options:

- pg_dump and pg_restore — using these command-line tools allows you to dump a PostgreSQL database into a text file, which can then be transferred to another server and restored.
- pg_dumpall — same principle as pg_dump and pg_restore, but the tool includes the schema definition and data of all databases, along with other cluster-wide objects such as roles and tablespaces.
- pgBaseBackup and WAL shipping — these are used to take a base backup of a PostgreSQL instance, and to set up Write-Ahead Logging (WAL) shipping to continuously stream incoming data to the target server. This method allows for zero-downtime of a database service.
- Third-Party Migration Tools (AWS Database Migration Service, pglogical, and EDB Postgres Migration Toolkit.)

We’re migrating with no need for continuous operation of the service, and there’s only a single database to migrate. Therefore, let’s go with option 1 — pg_dump and pg_restore.
