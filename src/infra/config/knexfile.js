require('./bootstrap');
const path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, '../orm/knex/db.sqlite')
    },
    migrations: {
      directory: '../orm/knex/migrations'
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10,
    },
  }
};
