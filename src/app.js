import express from 'express';
import body from 'body-parser';
import nodemon from 'nodemon';
import morgan from 'morgan';
import { config } from 'dotenv';
import jsonwebtoken from 'jsonwebtoken';

import rutas from  '../src/router/routes.js';

const app = express();

config({path:'./src/env/.env'})
app.use(body.json())
app.use(morgan('dev'));
app.use(body.urlencoded({extended: false}))

app.use(rutas);


export default app;

