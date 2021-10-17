require("dotenv/config");

module.exports = {
  development: {
    username: "apac",
    password: "specsoid1209",
    database: "apac_db",
    host: "database-1.cldioj2t2wzr.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    define: {
      timestamps: false,
    },
  },
  test: {
    username: "apac",
    password: "specsoid1209",
    database: "apac_db",
    host: "database-1.cldioj2t2wzr.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    define: {
      timestamps: false,
    },
  },
  production: {
    username: "apac",
    password: "specsoid1209",
    database: "apac_db",
    host: "database-1.cldioj2t2wzr.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    define: {
      timestamps: false,
    },
  },
};
