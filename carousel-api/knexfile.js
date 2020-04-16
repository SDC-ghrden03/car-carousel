require('dotenv').config()
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'ec2-54-215-239-234.us-west-1.compute.amazonaws.com',
      database: process.env.DB_DB,
      user:     process.env.DB_USER,
      password: process.env.DB_PW,
      connectTimeout: 30000
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
