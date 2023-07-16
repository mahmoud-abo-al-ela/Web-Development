// const mysql = require("mysql2");
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node",
//   password: "Mahmoud@123",
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");
const sequelize = new Sequelize("node", "root", "Mahmoud", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
