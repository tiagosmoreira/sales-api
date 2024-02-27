const pgp = require('pg-promise')(/* options */)
require('dotenv').config()

const dbUrl = process.env.DB_BASE_URL;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const db = pgp(`postgres://${dbUser}:${dbPassword}@${dbUrl}/${dbName}`)

module.exports = db;