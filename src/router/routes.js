import { Router } from 'express'
import { validacion } from '../secure/secure.js'

import { crearUsu, borrarUsu, actualizarUsu, listarUsu, login, searchUsu } from '../controller/con_usuario.js'
import { listarFi, crearFi, actualizarFi, borrarFi } from '../controller/con_fichas.js'
import { listarPro, crearPro, actualizarPro, borrarPro } from '../controller/con_programas.js'
import { listarEle, crearEle, actualizarEle, borrarEle } from '../controller/con_elementos.js'
import { listarMov, crearMov, actualizarMov, borrarMov } from '../controller/con_movimientos.js'


const rutas = Router();

    // <------------ Usuarios------------------>
rutas.get('/usuarios', validacion, listarUsu )
rutas.get('/usuario/buscar/:id', searchUsu )
rutas.post('/usuario/crear', validacion, crearUsu )
rutas.put('/usuario/actualizar/:id', validacion, actualizarUsu )
rutas.delete('/usuario/delete/:id', validacion, borrarUsu)
rutas.post('/login', login)

    // <------------ Fichas------------------>
rutas.get('/fichas', listarFi )
rutas.post('/ficha/crear', crearFi )
rutas.put('/ficha/actualizar/:id',actualizarFi )
rutas.delete('/ficha/delete/:id',borrarFi)

    // <------------ Programas ------------------>
rutas.get('/programas', listarPro )
rutas.post('/programa/crear', crearPro )
rutas.put('/programa/actualizar/:id',actualizarPro )
rutas.delete('/programa/delete/:id',borrarPro)

    // <------------ Elementos ------------------>
rutas.get('/elementos', listarEle )
rutas.post('/elemento/crear', crearEle )
rutas.put('/elemento/actualizar/:id',actualizarEle )
rutas.delete('/elemento/delete/:id',borrarEle)

    // <------------ Movimientos ------------------>
rutas.get('/movimientos', listarMov )
rutas.post('/movimiento/crear', crearMov )
rutas.put('/movimiento/actualizar/:id',actualizarMov)
rutas.delete('/movimiento/delete/:id',borrarMov)

export default rutas; 