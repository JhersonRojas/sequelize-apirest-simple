import { Movimiento } from "../Models/Movimiento.js";

export const listarMov = async (req, resp) => {
    try {
        const movi = await Movimiento.findAll();
        return resp.json(movi);
    } catch (error) {
        return resp.json({ mensaje: "Error al consultar" + error });
    }
};

export const crearMov = async (req, resp) => {
    try {
        const { ID_movimiento, Estado, Estdo_permiso, Validacion_permiso, Jornada_Reserva, Fecha_Inicio, Fecha_Entrega, Observacion, fk_Usuario, Fk_id_elemento } = req.body;

        const newMov = await Movimiento.create({
            ID_movimiento,
            Estado,
            Estdo_permiso,
            Validacion_permiso,
            Jornada_Reserva,
            Fecha_Inicio,
            Fecha_Entrega,
            Observacion,
            fk_Usuario,
            Fk_id_elemento,
        });
        return resp.json(newMov);
    } catch (error) {
        return resp.json({ message: "Error al insertar el movimiento" + error });
    }
};

export const borrarMov = async (req, resp) => {
    try {
        const id_mov = req.params.id;
        await Movimiento.destroy({
            where: { ID_movimiento: id_mov },
        });
        return resp.json({ message: "Movimiento eliminado con exito" });
    } catch (error) {
        return resp.json({ message: "Error al borrar" + error });
    }
};

export const actualizarMov = async (req, resp) => {
    try {
        const id_mov = req.params.id;
        const { Estado, Estdo_permiso, Validacion_permiso, Jornada_Reserva, Fecha_Inicio, Fecha_Entrega, Observacion, fk_Usuario, Fk_id_elemento } = req.body;
        await Movimiento.update(
            {
                Estado,
                Estdo_permiso,
                Validacion_permiso,
                Jornada_Reserva,
                Fecha_Inicio,
                Fecha_Entrega,
                Observacion,
                fk_Usuario,
                Fk_id_elemento,
            },
            {
                where: { ID_movimiento: id_mov },
            }
        );
        resp.send({ msj: "Los datos se actualizaron" });
    } catch (error) {
        return resp.json({ message: "Error al actualizar en la DB" + error });
    }
};
