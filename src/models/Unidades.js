import mongoose  from 'mongoose';

const unidadeSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    unidade: { type: String, required: true},
    endereco: { type: String, required: true },
    marca: { type: String, required: true }
},{versionKey: false});

const unidade = mongoose.model("unidades", unidadeSchema);

export { unidade, unidadeSchema};