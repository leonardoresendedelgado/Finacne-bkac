import viagem from "../models/Viagens.js";
import { unidade } from "../models/Unidades.js";
import { bilhete } from "../models/BilheteOutros.js";
class Viagens {
    static insertViagem = async(req, res)=>{
        const Viagem = req.body;
        try {
            const Unidade = await unidade.findOne({unidade: new RegExp(Viagem.unidade)})
            const Bilhete = await bilhete.findOne({apelido: new RegExp(Viagem.cartao)})
            const newViagem = { ...Viagem, unidade: {...Unidade._doc}, cartao: {...Bilhete._doc}}
            const ViagemCreat = await viagem.create(newViagem)
            res.status(201).json({ message: "Viagem inserida com sucesso", viagem: ViagemCreat});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao inserir viagem`});
        }
    }
    static getUnit = async(req, res)=>{
        
    }
    static putUnit = async(req, res)=>{

    }
    static deleteUnit = async(req, res)=>{

    }
}

export default Viagens;