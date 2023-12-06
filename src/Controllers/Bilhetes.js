import ServicesBilhestes from "../services/servicesBilhestes.js";
import ServicesValidation from "../services/servicesValidation.js";

const servicesBilhestes = new ServicesBilhestes;
const servicesValidation = new ServicesValidation;

class Bilhete {
    static insertBilhete = async(req, res)=>{
        try {
            const { Bilhete, apelido, ativo, valor } = req.body;
            const validation = await servicesValidation.ValidationBilhetes(
                { Bilhete, apelido, ativo, valor });
            const insertNewBilhete = await servicesBilhestes.InsertBillhestes(
                { Bilhete, apelido, ativo, valor })
            res.status(201).json({message: `Bilhete cadastrado com sucesso`, insertNewBilhete})
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao cadastrar bilhete`})
        }
    }
    static getBilhete = async(req, res)=>{
        try {
            const bilhetes = await servicesBilhestes.getBilhetes()
            res.status(200).json(bilhetes)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static putBilhete = async(req, res)=>{
        const { Bilhete, apelido, ativo, valor } = req.body;
        const { id } = req.params;
        try {
            const validation = await servicesValidation.ValidationBilhetes({
                Bilhete, apelido, ativo, valor
            });
            const update = await servicesBilhestes.upBilhetes({
                Bilhete, apelido, ativo, valor, id 
            });
            res.status(200).json({message: `Bilhete atualizado com sucesso`, update})
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao atualizar bilhete`})
        }
    }
    static deleteBilhete = async(req, res)=>{
        try {
            const id = req.params
            const respostaDelete = await servicesBilhestes.delBilhetes(id)
            res.status(200).json({message: `Bilhete Deletado com sucesso`, respostaDelete})
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

export default Bilhete;