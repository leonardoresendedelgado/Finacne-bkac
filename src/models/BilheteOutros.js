import mongoose  from 'mongoose';

const BilhetesSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    Bilhete: { type: String, required: true},
    apelido: { type: String, required: true },
    valor: {type: Number, required: true},
    ativo: {type: Boolean, required: true}
},{versionKey: false});

const bilhete = mongoose.model("bilhetes", BilhetesSchema);

export { bilhete, BilhetesSchema };