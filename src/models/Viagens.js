import mongoose  from 'mongoose';
import { unidadeSchema } from './Unidades.js';
import { BilhetesSchema } from './BilheteOutros.js';

const viagensSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    data: {type: String, required: true },
    unidade: unidadeSchema,
    numeroDaConducao:  { type: String, required: true},
    tipoDeConducao: { type: String, required: true},
    valor: { type: Number, required: true },
    percurso: { type: String, required: true },
    cartao: BilhetesSchema
},{versionKey: false});

const viagem = mongoose.model("viagens", viagensSchema);

export default viagem;