const {DataTypes} = require('sequelize');
const dataBase = require('../utils/db')

const Users = dataBase.define(
    //definir la tabla
    "Users",
    {
        // aqui van las columnas de la base de datos
        idUser: // Primera columna de la tabla
        {
            //Especificamos las propiedades de los datos de la table
            
            type:DataTypes.UUID, //UUID es una secuencia de 32 caracteres aleatoria, se usa actualmente, por ejemplo, en Mongo
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        email:
        {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, //valida que no exista otro igual en la tabla
            validate:
            {
                isEmail: true, //valida que el string ingresado tenga el formato email@email.com
                notNull: 
                {
                    msg: "El correo es requerido"
                }
            }

        },
        password: //revisar documentacion de sequelize para validar los campos
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate: 
            {
                notNull:
                {
                    msg: "La contrasena es obligatoria"
                }
            }
        },
        name:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate: 
            {
                notNull:
                {
                    msg: "La contrasena es obligatoria"
                }
            }
        },
        lastName:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate: 
            {
                notNull:
                {
                    msg: "La contrasena es obligatoria"
                }
            }
        },
        status: //El estado del usuario
        {
            type: DataTypes.ENUM("ACTIVE", "BLOCK", "DELETE", "PENDING"), //enum solo puede recibir 3 parametros
            allowNull: false,
            defaultValue: "ACTIVE"
        }
    },
    {
        timeStamps: true, //graba la fecha de creacion y actualizacion del registro
        createdAT: true,
        updatedAt: true
    }
)
module.exports = Users;