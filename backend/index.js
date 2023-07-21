const express = require('express');
// Obtener las funcionalidades de express.
const app = express();
// conexion a base de datos
const conn = require('./utils/db');
// Traemos el modelo
const userModel = require("./models/user");
//Importacion de funciones de control
const createUser = require("./controllers/create");



app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Definimos el puerto de nuestro localhost a utilizar
const port = 3001;

// Rutas para CRUD
app.post("/create", createUser);
//app.get("/allUsers"); // Obtener lista de usuarios
//app.get(); // Obtener detalle de un usuario
//app.put(); // Modificar los datos de algun registro (direccion, numero de telefono)
//app.delete(); // Borrar fisicamente al usuario
//app.put(); // Borrado logico de un usuario (cambiar una propiedad en la base de datos)


const database = async () =>
{
    try
    {
        await conn.authenticate(); //verifica la conexion
        console.log("Base de datos conectada");
        //await conn.sync({force:true})//metodo para crear las tablas que insertamos en la base de datos, reconoce los modelos en nuestros archivos y la base de datos para luego sincronizarlos.
        await userModel.sync({force: true})
    }
    catch(error)
    {
        console.log("Algo salio mal en la conexion con la DB", error);
    }
}



// Verifica que el servidor se ejecute
// Primera prueba con listen app.listen(port, console.log("servidor ejercutado correctamente"));
app.listen(port, () =>
{
    database();
    console.log("Servidor ejecutandose correctamente")
});