                                                                                           
import { Usuario } from '../Models/Usuarios.js';
import jsonwebtoken from 'jsonwebtoken';
import { Fichas } from '../Models/Fichas.js';


export const listarUsu = async (req, resp) => {
    try {
        const usuarios = await Usuario.findAll();
        return resp.json(usuarios)
    } catch (error){
        return resp.json({mensaje:"Error al consultar"+ error })
    }
}

export const searchUsu = async (req, resp) => {
    try {

        let id  = req.params.id; 
        const usuario = await Usuario.findAll(
            { attributes:['Nombre', 'Pk_Identificacion', 'Correo', 'Telefono'], 
            where: {Pk_Identificacion: id}, 
            include : [          
                {
                  model : await Fichas,  
                  attributes: ['id_ficha','Fecha_Inicio', 'Fecha_Fin' ],
                }
              ]
            
            }
        )

        return resp.json(usuario)
    } catch (error){
        return resp.json({mensaje:"Error al consultar"+ error })
    }
}




export const crearUsu = async (req, resp) => {
    try {
        let { Pk_Identificacion, Nombre, Correo, Clave, Telefono, Tipo_Usuario } = req.body
        const newUser = await Usuario.create ({

            Pk_Identificacion, 
            Nombre,
            Correo,
            Clave,
            Telefono,
            Tipo_Usuario

        })
        return resp.json (newUser)

    } catch (error) {
        return resp.json({message: "Error al insertar en la DB" + error})
    }
}

export const borrarUsu = async (req, resp) => {
    try { 
        var id_usuario = req.params.id;
        await Usuario.destroy(
            {
                where:{Pk_Identificacion: id_usuario}
            }
        )
        return resp.json({message:"Usuario eliminado con exito"})

    } catch (error) {
        return resp.json({message: "Error al borrar" + error})
    }

}

export const actualizarUsu = async (req, resp) => {
    try {
        const id_user = req.params.id
        const {Nombre, Correo, Clave, Telefono, Tipo_Usuario} = req.body;
        await Usuario.update ({
            Nombre: Nombre, 
            Correo, 
            Clave, 
            Telefono, 
            Tipo_Usuario
        }, {
            where: {Pk_Identificacion : id_user}

        }   
        )
        resp.send({msj: "Los datos se insertaron"})

    } catch(error) {
        return resp.json({message: "Error al actualizar en la DB" + error})
    }
}


export const login = async (req, resp) => {
    try {
        let {user, pass} = req.body; 
 
        let good = true;       let bad =false;  

        const datos = await Usuario.findAll ( { attributes:['Nombre', 'Pk_Identificacion', 'Correo', 'Telefono'], 
        where: {Pk_Identificacion: user}, where: {Clave: pass} })

         if ( datos.length > 0) {
            let token = jsonwebtoken.sign({user:datos}, process.env.AUTH_SECRET, {expiresIn: process.env.AUTH_EXPIRES });
            return resp.set('token', token).json({busqueda:good,user:datos, token:token}); 
         }else {
             resp.json({busqueda:bad})   
        }

    } catch (error){
        resp.json(error)
    }
}
