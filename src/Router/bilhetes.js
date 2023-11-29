import express from 'express';
import ControllerBilhetes from '../Controllers/Bilhetes.js';

const bilhete = express.Router()


bilhete
    .get("/bilhetes", ControllerBilhetes.getBilhete)
    .post("/bilhetes", ControllerBilhetes.insertBilhete)

export default bilhete;