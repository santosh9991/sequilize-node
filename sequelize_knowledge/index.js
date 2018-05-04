const Sequelize = require('sequelize');//use the third part module


const Process = require('process');
// console.log(Process.env)
const sequelize = new Sequelize(Process.env.localdb);
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
