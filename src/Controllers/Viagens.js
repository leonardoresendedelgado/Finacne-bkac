import ServicesViagens from "../services/servicesViagens.js";
import ServicesValidation from "../services/servicesValidation.js";
const servicesViagens =  new ServicesViagens;
const servicesValidation = new ServicesValidation;

class Viagens {
    static insertViagem = async(req, res)=>{
        const { data, unidade, numeroDaConducao, tipoDeConducao, valor,
        percurso, cartao } = req.body;
        try {
            const validation = await servicesValidation.ValidationViagens({ 
                data, unidade, numeroDaConducao, tipoDeConducao, valor,
                percurso, cartao });
            const newViagem = await servicesViagens.insertViagens({ 
                data, unidade, numeroDaConducao, tipoDeConducao, valor,
                percurso, cartao });
            res.status(201).json({ message: "Viagem inserida com sucesso", viagem: newViagem});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao inserir viagem`});
        }
    }
    static getViagens = async(req, res)=>{
        try {
            const viagens  = await servicesViagens.getViagens()
            if(viagens.length > 0 ){
                res.status(200).json({viagem: {...viagens}})
            }else{
                res.status(200).json({message: "Não existe viagens cadastradas"})
            }
        } catch (error) {
            res.status(500).json({message: `Erro ao buscar viagens - ${error.message}`})
        }
    }
   
}

export default Viagens;