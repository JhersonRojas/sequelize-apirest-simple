import { DataTypes } from "sequelize"; 
import { sequelize } from "../Database/conexion.js";
import { Movimiento } from "./Movimiento.js";

export const Elementos = sequelize.define( 'Elemento', {
    
                ID_Elemento: {
                    type: DataTypes.STRING(15),
                    primaryKey: true
                },
                Tipo_Elemento: {
                    type: DataTypes.ENUM('Ambiente', 'Aporte', 'Libro', 'Computador', 'Proyector')
                },
                Imagen:{
                    type: DataTypes.STRING(200),
                    null: true
                },
                Nombre_Elemento:{
                    type: DataTypes.STRING(60)
                },
                Autor:{
                    type: DataTypes.STRING(50),
                    null: true
                },
                Descripcion:{
                    type: DataTypes.TEXT,
                    null: true
                },
                Stock:{
                    type: DataTypes.INTEGER
                },
                Archivo_Aporte:{
                    type: DataTypes.STRING(200),
                    null: true
                }
            },

            {timestamps: false}
        );

       Elementos.hasMany( Movimiento, {
        foreignKey:'Fk_id_elemento',          // Npmbre de la FK  
        sourceKey: 'ID_Elemento'       // Tabla a relacionar con la PK
        });
    
        Movimiento.belongsTo( Elementos, {
        sourceKey: 'ID_Elemento',
        foreignKey: 'Fk_id_elemento'
        }); 