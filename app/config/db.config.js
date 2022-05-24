module.exports = {
    HOST: process.env.DB_HOST || "127.0.0.1",
    USER: process.env.DB_USER || "root",
    PASSWORD: process.env.DB_PASSWORD || "",
    Database: process.env.DATABASE || "testdb",
    dialect: "mysql",
    port: 3306
    // pool: {
    //   max: 5,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000
    // }
  };