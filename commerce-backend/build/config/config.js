"use strict";

require("dotenv/config");

module.exports = {
  development: {
    username: "apac",
    password: "specsoid1209",
    database: "database-1",
    host: "database-1.cldioj2t2wzr.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    define: {
      timestamps: false
    }
  },
  test: {
    username: "apac",
    password: "specsoid1209",
    database: "database-1",
    host: "database-1.cldioj2t2wzr.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    define: {
      timestamps: false
    }
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    define: {
      timestamps: false
    }
  }
};