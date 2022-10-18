import Sequelize from "sequelize";  // Se debe iniciar en mayuscula yq que es un modulo

export const sequelize = new Sequelize (
        
        'orbil_orm',
        'root',
        '',
        {                                                                                // En new Sequelize debe ser igual a como 
                host: process.env.DB_HOST,                                               // se importo
                dialect: 'mysql'
                
        }
);
