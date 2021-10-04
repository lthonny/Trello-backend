const path = require('path');
require('dotenv').config({
  path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`),
});

module.exports = {
  development: {
    username: 'postgres',
    password: 'secret',
    database: 'trello',
    host: '127.0.0.1',
    port: 5431,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
};