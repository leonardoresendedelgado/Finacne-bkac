import mongoose  from 'mongoose';
import { unidadeSchema } from './Unidades.js';

const viagensSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    data: {type: Date, required: true },
    unidade: unidadeSchema,
    tipoDeTransporte: { type: String, required: true},
    valor: { type: Number, required: true },
    percurso: { type: String, required: true },
    cartao: { type: Number, required: true }
},{versionKey: false});

const viagem = mongoose.model("viagens", viagensSchema);

export default viagem;