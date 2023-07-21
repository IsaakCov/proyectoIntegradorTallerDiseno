const {Sequelize} = require('sequelize');


// Crea la conexion con la base de datos nombre base de datos// usuario que lo manipula// contrasena
const conn = new Sequelize("registrousuarios", "root", "", //crea una nueva instancia para conectar a la base de datos con sequelize
{
    host: "localhost",
    dialect: "mysql"
});
module.exports = conn;