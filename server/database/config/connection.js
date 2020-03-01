const { Pool } = require('pg');
require('env2')('./config.env');

let dbUrl;

if (process.env.NODE_ENV === 'production') {
  dbUrl = process.env.DATABASE_URL;
} else if (process.env.NODE_ENV === 'development') {
  dbUrl = process.env.DB_URL;
}
//if (!process.env.DB_URL) throw new Error('No Database URL!!!');


const options = {
  connectionString : dbUrl,
  ssl: true
};

module.exports = new Pool(options);