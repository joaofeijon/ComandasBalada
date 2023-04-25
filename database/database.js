const Sequelize = require("sequelize");

const sequelize = new Sequelize(
   'balada',
   'root',
   'senha',
    {
      host: 'localhost',
      dialect: 'mysql',
      port:1433
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

module.exports = sequelize