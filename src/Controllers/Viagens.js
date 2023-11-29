import viagem from "../models/Viagens.js";
import { unidade } from "../models/Unidades.js";

class Viagens {
    static insertViagem = async(req, res)=>{
        const newViagem = req.body;
        try {
            const Unidade = await unidade.findOne({unidade: new RegExp(newViagem.unidade)})
            console.log(Unidade)
        } catch (error) {
            
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