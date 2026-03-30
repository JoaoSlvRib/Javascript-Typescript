import 'dotenv/config'
import knex from 'knex';

const {
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD
} = process.env;

const config = {
  development: {
    client: 'pg',
    connection: {
      host: DB_HOST,
      port: DB_PORT,
      database: DB_DATABASE,
      user: DB_USER,
      password: DB_PASSWORD
    }
  }
}
const { NODE_ENV = 'development' } = process.env;

export const database = knex(config[NODE_ENV]);