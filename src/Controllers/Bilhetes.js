import { bilhete } from "../models/BilheteOutros.js";

class Bilhete {
    static insertBilhete = async(req, res)=>{
        try {
            const bilhet = req.body;
            const createBilhete = await bilhete.create(bilhet);
            res.status(201).send(createBilhete)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar unidade`});
        }
    }
    static getBilhete = async(req, res)=>{
        
    }
    static putUnit = async(req, res)=>{

    }
    static deleteUnit = async(req, res)=>{

    }
}

export default Bilhete;