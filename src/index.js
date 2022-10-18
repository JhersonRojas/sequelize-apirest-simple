import app from './app.js';
import { sequelize } from './Database/conexion.js';  // Importamos la BD
import './Models/Fichas.js';
import './Models/Programas.js';
import './Models/Usuarios.js';
import './Models/Movimiento.js';
import './Models/Elementos.js';
import './Models/Categoria.js';


 // Importamos la tabla para crearla
const port = process.env.PORT || 3200;

async function Main () {
    try{
        await sequelize.sync({ force: false }); // Crear la tabla de manera forzosa 

        app.listen(port);
        console.log (`En el puerto  http://localhost:${port}`);
    } catch (error) {
        console.log (`No se pudo conectara a la base de datos ${error}`);
    }
}

Main();
