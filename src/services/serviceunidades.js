import { unidade } from '../models/Unidades.js';
class ServicesUnidades {
    async InsertUnit(dto){
       try {
        if(dto.unidade === undefined || !dto.unidade || dto.endereco === undefined || !dto.endereco
             || dto.marca === undefined || !dto.marca ){
            throw new Error("Nome da unidade, endereço ou marca não pode ser vazio")
        }
        const ExisteUnidade = await unidade.findOne({unidade: dto.unidade});
        if( ExisteUnidade === null ) {
            const NovaUnidade = {
                unidade: dto.unidade,
                endereco: dto.endereco,
                marca: dto.marca
            }
            const UnidadeInserida = await unidade.create(NovaUnidade)
            return UnidadeInserida
        }else{
            throw new Error("Unidade já cadastrada")
        }
       } catch (error) {
        throw new Error(error)
       } 

    }
}
export default ServicesUnidades;