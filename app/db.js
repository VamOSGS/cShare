const mongoose = require('mongoose');
require('dotenv').config();
const { DB_USER, DB_PASS, DB_PORT, DB_HOST, DB_NAME } = process.env;

module.exports = () =>
  mongoose.connect(
    `mongoDB://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
  );
