import { Programa } from "../Models/Programas.js";

export const listarPro = async (req, resp) => {
    try {
        const programas = await Programa.findAll();
        return resp.json(programas);
    } catch (error) {
        return resp.json({ mensaje: "Error al consultar" + error });
    }
};

export const crearPro = async (req, resp) => {
    try {
        const { id_programas, Nombre_Programa } = req.body;
        const newPrograma = await Programa.create({
            id_programas,
            Nombre_Programa,
        });
        return resp.json(newPrograma);
    } catch (error) {
        return resp.json({ message: "Error al insertar el programa" + error });
    }
};

export const borrarPro = async (req, resp) => {
    try {
        const id_pro = req.params.id;
        await Programa.destroy({
            where: { id_programas: id_pro },
        });
        return resp.json({ message: "Programa eliminada con exito" });
    } catch (error) {
        return resp.json({ message: "Error al borrar" + error });
    }
};

export const actualizarPro = async (req, resp) => {
    try {
        const id_fi = req.params.id;
        const { id_programas, Nombre_Programa } = req.body;
        await Programa.update(
            {
                id_programas,
                Nombre_Programa,
            },
            {
                where: { id_programas: id_fi },
            }
        );
        resp.send({ msj: "Los datos se actualizaron" });
    } catch (error) {
        return resp.json({ message: "Error al actualizar en la DB" + error });
    }
};
