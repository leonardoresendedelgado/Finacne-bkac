import express from 'express';
import ControllerUnidades from '../Controllers/Unidades.js';

const Unidades = express.Router()


Unidades
    .post("/newUnidade", ControllerUnidades.insertUnit)
    .delete("/delUnidade/:id", ControllerUnidades.deleteUnit)
    .get("/unidades", ControllerUnidades.getUnit)
    .put("/upUnite/:id", ControllerUnidades.putUnit)

export default Unidades;
