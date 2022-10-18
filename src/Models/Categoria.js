import { DataTypes } from "sequelize";
import { sequelize } from '../Database/conexion.js'; 
import { Elementos } from './Elementos.js'                                                                                                    

export const Categoria = sequelize.define( 'Categoria', {                                                                                                                         
    
        ID_Categoria: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre_Categoria: {
            type: DataTypes.STRING(50)
        }
     },
     
    {timestamps: false} // Para que no crea columnas por defecto
);

// constraint
 Categoria.hasMany( Elementos, {
    foreignKey:'Fk_ID_Categoria',          // Name fk c
    sourceKey: 'ID_Categoria'       // Tabla a relacionar con la PK
 });

 Elementos.belongsTo( Categoria, {
    sourceKey: 'ID_Categoria',
    foreignKey: 'Fk_ID_Categoria'
 });
