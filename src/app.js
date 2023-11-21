import body from "body-parser";
import { config } from "dotenv";
import express from "express";
import morgan from "morgan";

import rutas from "../src/router/routes.js";

const app = express();

app.use(body.json());
app.use(morgan("dev"));
app.use(body.urlencoded({ extended: false }));
config({ path: "./src/env/.env" });

app.use(rutas);

export default app;
