import ServicesUnidades from "../services/serviceunidades.js";
import ServicesValidation from "../services/servicesValidation.js";
const servicesUnidades = new ServicesUnidades
const validation = new ServicesValidation

class Unidades {
    static insertUnit = async(req, res)=>{
        const { unidade, endereco, marca} = req.body;
        try {
            const servicesValidation = await validation.ValidationUnidades(
                {unidade, endereco, marca}
            )
            const unidadeCriada = await servicesUnidades.InsertUnit(
                {unidade, endereco, marca}
            );
            res.status(201).json({message: `Unidade cliada com sucesso`,unidadeCriada})
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar unidade`});
        }
    }
    static getUnit = async(req, res)=>{
        try {
            const unidades = await servicesUnidades.getUnit()
            res.status(200).json(unidades)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static putUnit = async(req, res)=>{
        const { unidade, endereco, marca } = req.body;
        const { id } = req.params;
        try {
            const servicesValidation = await validation.ValidationUnidades(
                {unidade, endereco, marca}
            )
            const unidadeCriada = await servicesUnidades.updateUnit(
                {unidade, endereco, marca, id}
            );
            res.status(201).json({message: `Unidade atualizada com sucesso`,unidadeCriada})
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao atualizar unidade unidade`});
        }
    }
    static deleteUnit = async(req, res)=>{
        try {
            const id = req.params
            const respostaDelete = await servicesUnidades.DeleteUnit(id)
            res.status(200).json({message: `Unidade Deletada com sucesso`, respostaDelete})
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

export default Unidades;