import { DataTypes } from "sequelize";
import { sequelize } from '../Database/conexion.js'; 
import { Usuario } from "./Usuarios.js";                                                                                                  

export const Fichas = sequelize.define( 'Fichas', {                                                                                                                         
    
        id_ficha: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Fecha_Inicio: {
            type: DataTypes.DATE
        },
        Fecha_Fin: {
            type: DataTypes.DATE
        },
        Estado: {
            type: DataTypes.ENUM('Vigente','Finalizado')
        }
     },
     
    {timestamps: false} // Para que no crea columnas por defecto
);

// Realcion entre tablas
 Fichas.hasMany( Usuario, {
    foreignKey:'fk_ID_Ficha',          // Npmbre de la FK  
    sourceKey: 'id_ficha'       // Tabla a relacionar
 });

 Usuario.belongsTo( Fichas, {
    sourceKey: 'id_ficha',
    foreignKey: 'fk_ID_Ficha'
 }); 

 