import { unidade } from "../models/Unidades.js"

class Unidades {
    static insertUnit = async(req, res)=>{
        try {
            const newUnidade = req.body;
            const createUnidade = await unidade.create(newUnidade);
            res.status(201).send(createUnidade)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar unidade`});
        }
    }
    static getUnit = async(req, res)=>{
        
    }
    static putUnit = async(req, res)=>{

    }
    static deleteUnit = async(req, res)=>{

    }
}

export default Unidades;