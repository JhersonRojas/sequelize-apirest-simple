import Sequelize from "sequelize"; /* Se debe iniciar en mayuscula ya que es un modulo*/

/*Esta constante almacena la info acerca de la conexión con la abse de datos */
export const sequelize = new Sequelize(
        "orbil_orm" /* Nombre de la abase de datos*/,
        "root" /* Nombre del usuario de la base de datos */,
        "" /* Contraeña de usuario */,
        {
                host: process.env.DB_HOST /* Nombre del usuario de la base de datos */,
                dialect: "mysql",
        }
);
