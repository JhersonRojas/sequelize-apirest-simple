import { DataTypes } from "sequelize";
import { sequelize } from "../Database/conexion.js";
import { Fichas } from "./Fichas.js";

export const Programa = sequelize.define("Programa",
    {
        id_programas: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nombre_Programa: {
            type: DataTypes.STRING(50),
        },
    },

    { timestamps: false }
);

Programa.hasMany(Fichas, {
    foreignKey: "fk_ID_programa",
    sourceKey: "id_programas",
});

Fichas.belongsTo(Programa, {
    sourceKey: "id_programas",
    foreignKey: "fk_ID_programa",
});
