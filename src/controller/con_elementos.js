import { Elementos } from "../Models/Elementos.js";

export const listarEle = async (req, resp) => {
    try {
        const elem = await Elementos.findAll();
        return resp.json(elem);
    } catch (error) {
        return resp.json({ mensaje: "Error al consultar" + error });
    }
};

export const crearEle = async (req, resp) => {
    try {
        const { ID_Elemento, Tipo_Elemento, Imagen, Nombre_Elemento, Autor, Descripcion, Archivo_Aporte } = req.body;
        const newFicha = await Elementos.create({
            ID_Elemento,
            Tipo_Elemento,
            Imagen,
            Nombre_Elemento,
            Autor,
            Descripcion,
            Archivo_Aporte,
        });
        return resp.json(newFicha);
    } catch (error) {
        return resp.json({ message: "Error al insertar la ficha" + error });
    }
};

export const borrarEle = async (req, resp) => {
    try {
        const id_el = req.params.id;
        await Elementos.destroy({
            where: { ID_Elemento: id_el },
        });
        return resp.json({ message: "Elemento eliminada con exito" });
    } catch (error) {
        return resp.json({ message: "Error al borrar" + error });
    }
};

export const actualizarEle = async (req, resp) => {
    try {
        const id_fi = req.params.id;
        const { Tipo_Elemento, Imagen, Nombre_Elemento, Autor, Descripcion, Archivo_Aporte} = req.body;

        await Elementos.update(
            {
                Tipo_Elemento,
                Imagen,
                Nombre_Elemento,
                Autor,
                Descripcion,
                Archivo_Aporte,
            },
            {
                where: { ID_Elemento: id_fi },
            }
        );
        resp.json({ msj: "Los datos se actualizaron" });
    } catch (error) {
        return resp.json({ message: "Error al actualizar en la DB" + error });
    }
};
