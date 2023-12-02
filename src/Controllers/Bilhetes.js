import ServicesBilhestes from "../services/servicesBilhestes.js";
import ServicesValidation from "../services/servicesValidation.js";

const servicesBilhestes = new ServicesBilhestes;
const servicesValidation = new ServicesValidation;

class Bilhete {
    static insertBilhete = async(req, res)=>{
        try {
            const { Bilhete, apelido, ativo } = req.body;
            const validation = await servicesValidation.ValidationBilhetes({ Bilhete, apelido, ativo });
            const insertNewBilhete = await servicesBilhestes.InsertBillhestes({ Bilhete, apelido, ativo })
            res.status(201).json(`Bilhete cadastrado com sucesso`, insertNewBilhete)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao cadastrar bilhete`})
        }
    }
    static getBilhete = async(req, res)=>{
        
    }
    static putBilhete = async(req, res)=>{

    }
    static deleteBilhete = async(req, res)=>{
        console.log("sdsd")
    }
}

export default Bilhete;