import { DataTypes } from "sequelize";
import { sequelize } from '../Database/conexion.js';
import { Movimiento } from './Movimiento.js';

export const Usuario = sequelize.define( 'Usuarios', {

    Pk_Identificacion: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    Nombre: {
        type: DataTypes.STRING(50)
    },                      
    Correo: {
        type: DataTypes.STRING(50),
        null: true
    },
    Clave: {
        type: DataTypes.STRING(50)
    },
    Telefono: {
        type: DataTypes.STRING(15),
        null: true
    },
    Tipo_Usuario: {
        type: DataTypes.ENUM('Aprendiz','Instructor', 'Visitante', 'Administrador')
    }
}, 

    {timestamps: false}

);

 Usuario.hasMany( Movimiento, {
    foreignKey:'fk_Usuario',            
    sourceKey: 'Pk_Identificacion'       
 });

 Movimiento.belongsTo( Usuario, {
    sourceKey: 'Pk_Identificacion',
    foreignKey: 'fk_Usuario'
 }); 