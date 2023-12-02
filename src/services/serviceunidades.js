import { unidade } from '../models/Unidades.js';
class ServicesUnidades {
    async InsertUnit(dto){
       try {
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
    async DeleteUnit(dto){
        try {
            if(dto.id === undefined || !dto.id) {
                throw new Error("informe um id")
            }
            const idExixtente = await unidade.findById(dto.id)
            if(idExixtente !== null){
                const idExcludo = await unidade.findByIdAndDelete(dto.id)
                return idExcludo
            }else {
                throw new Error(`Esta unidade não existe! `)
            }
        } catch (error) {
            throw new Error(error)
        }
    }
    async getUnit(){
        try {
            const unidades = await unidade.find()
            if(unidades.length === 0){
                const vazio = "Não existe unidades cadastradas"
                return vazio
            }else{
                return unidades;
            }
        } catch (error) {
            throw new Error(error)
        }
    }
    async updateUnit(dto){
        try {
            const ExisteUnidade = await unidade.findById(dto.id);
            if( ExisteUnidade !== null ) {
                const NovaUnidade = {
                    unidade: dto.unidade,
                    endereco: dto.endereco,
                    marca: dto.marca
                }
                const UnidadeInserida = await unidade.findByIdAndUpdate(dto.id, NovaUnidade)
                 const update= await unidade.findById(dto.id)
                return update
            }else{
                throw new Error("Unidade não existe")
            }
           } catch (error) {
            throw new Error(error)
           } 
    }
}
export default ServicesUnidades;