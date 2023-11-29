import express from 'express';
import ControllerUnidades from '../Controllers/Unidades.js';

const Unidades = express.Router()


Unidades
    .post("/", ControllerUnidades.insertUnit)
    .get("/", ControllerUnidades.getUnit)
    .put("/", ControllerUnidades.putUnit)
    .delete("/", ControllerUnidades.deleteUnit)

export default Unidades;
