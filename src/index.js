import app from "./app.js";
import { sequelize } from "./Database/conexion.js"; /* Importamos la BD */

/* Importacioón de cada uno de los modelos (tablas) que contendra la base de datos */
import "./Models/Fichas.js";
import "./Models/Programas.js";
import "./Models/Usuarios.js";
import "./Models/Movimiento.js";
import "./Models/Elementos.js";
import "./Models/Categoria.js";

/* Este es el puerto del servicio que tomara el Api Rest */
const port = process.env.PORT || 3200;

async function Main() {
    try {
        await sequelize.sync({ force: false }); // Crear la tabla de manera forzosa
        app.listen(port, () => {
            console.log(`En el puerto  http://localhost:${port}`);
        });
    } catch (error) {
        console.log(`No se pudo conectara a la base de datos ${error}`);
    }
}

Main();
