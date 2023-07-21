// Importamos el modelo de usuario
const users = require("../models/user");

const createUser = async(req, res) =>
{
    //Parametros a recibir de la DB, estos son los nombres a utilizar para ingresar en formato JSON
    const {name, lastName, email, password} = req.body;

    try 
    {
        await users.create(
        {
            name: name,
            lastName: lastName,
            email: email,
            password: password
        })
        res.status(200).json({msg: "Usuario registrado"})
    } 
    catch (error) 
    {
        console.log("error", error)
    }
}
module.exports = createUser;