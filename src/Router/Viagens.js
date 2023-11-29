import express from 'express';
import ControllerViagem from '../Controllers/Viagens.js';

const Viagens = express.Router()


Viagens
    .post("/getViagem", ControllerViagem.insertViagem)

export default Viagens;
