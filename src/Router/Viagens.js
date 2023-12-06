import express from 'express';
import ControllerViagem from '../Controllers/Viagens.js';

const Viagens = express.Router()


Viagens
    .post("/newViagem", ControllerViagem.insertViagem)
    .get("/newViagem", ControllerViagem.getViagens)

export default Viagens;
