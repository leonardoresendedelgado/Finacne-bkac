import { unidade } from "../models/Unidades.js";
import { bilhete } from "../models/BilheteOutros.js";
import viagem from "../models/Viagens.js";
import { ObjectId } from "mongodb";

class ServicesViagens{
    async insertViagens(dto){
    try {
        const unidadeEncontrada = await unidade.findOne({unidade: new RegExp(dto.unidade)})
        const bilheteEncontrada = await bilhete.findOne({apelido: new RegExp(dto.cartao)})
        if(dto.valor <= bilheteEncontrada.valor){
            const newValor = bilheteEncontrada.valor - dto.valor
            const filtro = { _id: new ObjectId(bilheteEncontrada._id) };
            const valoresAtualizados = {
                $set: {
                    valor: newValor
                }
              };
              const dadosViagens = {  
              data: dto.data,
              unidade: {...unidadeEncontrada._doc},
              numeroDaConducao: dto.numeroDaConducao,
              tipoDeConducao: dto.tipoDeConducao,
              valor: dto.valor,
              percurso: dto.percurso,
              cartao: {...bilheteEncontrada._doc}}
              const ViagemCreat = await viagem.create(dadosViagens)
              const resultado = await bilhete.findByIdAndUpdate(filtro, valoresAtualizados);
              return ViagemCreat;
        }else{
            throw new Error("Viagem não permitida, valor do bilhete menor que o valor da viagem")
        }

    } catch (error) {
        throw new Error(error)
    }        
    }
    async getViagens(){
        try {
            const viagens = await viagem.find()
            return viagens
        } catch (error) {
            throw new Error(error)
        }
    }
}
export default ServicesViagens;