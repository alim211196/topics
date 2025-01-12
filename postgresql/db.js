const pgp = require("pg-promise")();
require("dotenv").config();

const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect()
  .then((obj) => {
    console.log("Connected to PostgreSQL");
    obj.done(); // release the connection
  })
  .catch((error) => {
    console.error("Error connecting to PostgreSQL:", error.message);
  });

module.exports = db;
