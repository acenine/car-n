
require('dotenv').config();
const knex = require('knex') ({
    client: 'pg',
    //connection: process.env.DATABASE_URL,
    connection: `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`,
    pool: { min: 0, max: 7 }
  });

module.exports = {
  pg: knex
}
