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
}
export default ServicesBilhestes;