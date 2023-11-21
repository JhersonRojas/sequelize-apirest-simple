import { Fichas } from "../Models/Fichas.js";

export const listarFi = async (req, resp) => {
    try {
        const fichas = await Fichas.findAll();
        return resp.json(fichas);
    } catch (error) {
        return resp.json({ mensaje: "Error al consultar" + error });
    }
};

export const crearFi = async (req, resp) => {
    try {
        const { id_ficha, Fecha_Inicio, Fecha_Fin, Estado } = req.body;
        const newFicha = await Fichas.create({
            id_ficha,
            Fecha_Inicio,
            Fecha_Fin,
            Estado,
        });
        return resp.json(newFicha);
    } catch (error) {
        return resp.json({ message: "Error al insertar la ficha" + error });
    }
};

export const borrarFi = async (req, resp) => {
    try {
        const id_fi = req.params.id;
        await Fichas.destroy({
            where: { id_ficha: id_fi },
        });
        return resp.json({ message: "ficha eliminada con exito" });
    } catch (error) {
        return resp.json({ message: "Error al borrar" + error });
    }
};

export const actualizarFi = async (req, resp) => {
    try {
        const id_fi = req.params.id;
        const { Fecha_Inicio, Fecha_Fin, Estado } = req.body;
        await Fichas.update(
            {
                Fecha_Inicio,
                Fecha_Fin,
                Estado,
            },
            {
                where: { id_ficha: id_fi },
            }
        );

        resp.json({ msj: "Los datos se actualizaron" });
    } catch (error) {
        return resp.json({ message: "Error al actualizar en la DB" + error });
    }
};
