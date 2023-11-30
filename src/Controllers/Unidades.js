import ServicesUnidades from "../services/serviceunidades.js";
const servicesUnidades = new ServicesUnidades

class Unidades {
    static insertUnit = async(req, res)=>{
        const { unidade, endereco, marca } = req.body;
        try {
            const unidadeCriada = await servicesUnidades.InsertUnit(
                {unidade, endereco, marca}
            );
            res.status(201).send({message: `Unidade cliada com sucesso`,unidadeCriada})
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar unidade`});
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