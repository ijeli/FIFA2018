var Sequelize = require('sequelize'), connection;

if (process.env.JAWSDB_URL) {
  connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  connection = new Sequelize('fifa2018_db', 'root', 'Jjb117jjB', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
  })
};

module.exports = connection;