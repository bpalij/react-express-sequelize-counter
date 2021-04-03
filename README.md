Worked with node 12.18.1 and posgre 12 (but maybe will work with other dbs supported by sequelize)

1. go to `server/`
2. `npm i`
3. change `server/config/config.json` to work correctly with your db
4. `npx sequelize-cli db:migrate`
5. `npm start`
6. go to `client` and do inside instruction