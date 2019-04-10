# Tickets Server

Dev server for events tickets management App. Reading events, managing event tickets, availability real-time updates.

Main tech stack: NodeJs, Express, Sequelize, Mysql, PusherJS.

## Required

- Install `yarn` package
- Run `yarn` command to install necessary dependencies
- Mysql. Check `migrations/tickets.sql` for SQL script, `config/config.json` for configuration options

## Run dev server

Command `yarn start` runs the app in the development mode.<br>
Open/call [http://localhost:8000/api/health](http://localhost:8000/api/health) to check that server is up.

## Code styling

Command `yarn lint` checks styling issues and fixes where it's possible.
