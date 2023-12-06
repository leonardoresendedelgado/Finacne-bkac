import { bilhete } from "../models/BilheteOutros.js";

class ServicesBilhestes {
    async InsertBillhestes(dto){
        try {
            const bilheteExistente = await bilhete.findOne({Bilhete: dto.Bilhete})
            if(bilheteExistente === null){
                const newBilhete = {
                    Bilhete: dto.Bilhete,
                    apelido: dto.apelido,
                    valor: dto.valor,
                    ativo: dto.ativo
                }
                const bilheteCadastrado = await bilhete.create(newBilhete)
                return bilheteCadastrado
            }else{
                throw new Error("Bilhete já cadastrada")
            }
        } catch (error) {
            throw new Error(error)
        }
    }
    async getBilhetes(){
        try {
            const bilhetes = await bilhete.find()
            if(bilhetes.length === 0){
                const vazio = "Não existe bilhetes cadastradas"
                return vazio
            }else{
                return bilhetes;
            }
        } catch (error) {
            throw new Error(error)
        }
    }
    async upBilhetes(dto){
        console.log(dto)
        try {
            const bilheteExistente = await bilhete.findById(dto.id)
            if(bilheteExistente !== null){
                const newBilhete = {
                    Bilhete: dto.Bilhete,
                    apelido: dto.apelido,
                    valor: dto.valor,
                    ativo: dto.ativo
                }
                const bilheteCadastrado = await bilhete.findByIdAndUpdate(dto.id, newBilhete);
                const update = await bilhete.findById(dto.id);
                return update
            }else{
                throw new Error("Bilhete não cadastrado")
            }
        } catch (error) {
            throw new Error(error)
        }
    }
    async delBilhetes(dto){
        try {
            if(dto.id === undefined || !dto.id) {
                throw new Error("informe um id")
            }
            const idExixtente = await bilhete.findById(dto.id)
            if(idExixtente !== null){
                const idExcludo = await bilhete.findByIdAndDelete(dto.id)
                return idExcludo
            }else {
                throw new Error(`Este bilhete não existe!`)
            }
        } catch (error) {
            throw new Error(error)
        }
    }
}
export default ServicesBilhestes;