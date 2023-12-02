import { bilhete } from "../models/BilheteOutros.js";

class ServicesBilhestes {
    async InsertBillhestes(dto){
        try {
            const bilheteExistente = await bilhete.findOne({Bilhete: dto.Bilhete})
            if(bilheteExistente === null){
                const newBilhete = {
                    Bilhete: dto.Bilhete,
                    apelido: dto.apelido,
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
}
export default ServicesBilhestes;