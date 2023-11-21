import jsonwebtoken from "jsonwebtoken";

export const validacion = async (req, resp, next) => {
    try {
        let tokenUsuario = req.headers["token"];
        if (!tokenUsuario) {
            return resp
                .status(402)
                .json({ autorizado: false, mensaje: "El token es requerido" });
        }

        const puretoken = tokenUsuario.replace("Bearer", "");

        jsonwebtoken.verify(
            puretoken,
            process.env.AUTH_SECRET,
            (error, decoded) => {
                if (error) {
                    return resp.status(402).json({ autorizado: false, mensaje: "El token no es correcto" });
                } else {
                    next();
                }
            }
        );
        
    } catch (error) {
        resp.send(error);
    }
};
