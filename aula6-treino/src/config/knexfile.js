import 'dotenv/config';
import knex from 'knex';

const {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD
} = process.env;

const config = {
  development: {
    client: 'pg',
    connection: {
      DB_HOST,
      DB_PORT,
      DB_NAME,
      DB_USER,
      DB_PASSWORD
    }
  }
}

const { NODE_ENV = 'development' } = process.env;

export const database = knex(config[NODE_ENV]);
