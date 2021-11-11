const config = require("config");
const { Pool } = require("pg");
const pool = new Pool({
  user: config.db.username,
  host: config.db.host,
  database: config.db.name,
  password: process.env.DB_PASSWORD,
  port: 5432,
});
module.exports = pool;
