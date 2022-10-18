import { DataTypes } from "sequelize";
import { sequelize } from '../Database/conexion.js';

export const Movimiento = sequelize.define( 'Movimiento', {
    
                ID_movimiento: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    null: true
                },
                Estado: {
                    type: DataTypes.ENUM('Disponible','Reservdo', 'Prestado')
                },
                Estdo_permiso: {
                    type: DataTypes.ENUM('ConSolicitud','SinSolicitud')
                },
                Validacion_permiso:{
                    type: DataTypes.ENUM('Aprobado','Rechazado'),
                    null: true
                },
                Jornada_Reserva: {
                    type: DataTypes.ENUM('Mañana','Tarde'),
                    null: true
                },
                Cantidad:{
                    type: DataTypes.INTEGER
                },
                Sitio_permiso:{
                    type: DataTypes.STRING(60),
                    null: true
                },
                Fecha_Reserva_Ambiente:{
                    type: DataTypes.TIME,
                    null: true
                },
                Fecha_Inicio:{
                    type: DataTypes.DATE
                },
                Fecha_Entrega:{
                    type: DataTypes.DATE
                },
                Observacion:{
                    type: DataTypes.TEXT
                },
                ID_Intructor:{
                    type: DataTypes.BIGINT,
                    null: true
                }
            },

        {timestamps: false}
 
    );
