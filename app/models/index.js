const dbconfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbconfig.Database, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: dbconfig.dialect,
  port: dbconfig.port
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.userInfo = require("./UserInfo.model.js")(sequelize, Sequelize);
db.inputClimateNumbers = require("./InputClimateNumbers.model.js")(sequelize, Sequelize);
db.helpQuestions = require("./HelpQuestions.model.js")(sequelize, Sequelize);




module.exports = db;