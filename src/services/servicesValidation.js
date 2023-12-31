class ServicesValidation {
    async ValidationUnidades(dto) {
        if (dto.unidade === undefined || !dto.unidade ) {
            throw new Error("Nome da unidade não pode ser vazio")
        } else
        if ( dto.endereco === undefined || !dto.endereco
            ) {
            throw new Error("Endereço não pode ser vazio")
        } else
        if (dto.marca === undefined || !dto.marca) {
            throw new Error("Marca não pode ser vazio")
        }
    }
    async ValidationBilhetes(dto){
        if (dto.Bilhete === undefined || !dto.Bilhete ) {
            throw new Error("Bilhete não pode ser vazio")
        } else
        if ( dto.apelido === undefined || !dto.apelido
            ) {
            throw new Error("Apelido não pode ser vazio")
        } else
        if (dto.ativo === undefined || dto.ativo === null) {
            throw new Error("Estatus não pode ser vazio")
        }
        if (dto.valor === undefined || !dto.valor) {
            throw new Error("Valor não pode ser vazio")
        }
    }
    async ValidationViagens(dto){
        if (dto.data === undefined || !dto.data ) {
            throw new Error("Data não pode ser vazio")
        } else
        if ( dto.unidade === undefined || !dto.unidade
            ) {
            throw new Error("Unidade não pode ser vazio")
        } else
        if (dto.numeroDaConducao === undefined || dto.nemeroDaConducao === null) {
            throw new Error("Numero da condução não pode ser vazio")
        }
        if (dto.tipoDeConducao === undefined || !dto.tipoDeConducao) {
            throw new Error("Tipo de condução não pode ser vazio")
        }
        if (dto.valor === undefined || !dto.valor) {
            throw new Error("Valor da condução não pode ser vazio")
        }
        if (dto.percurso === undefined || !dto.percurso) {
            throw new Error("Percurso não pode ser vazio")
        }
        if (dto.cartao === undefined || !dto.cartao) {
            throw new Error("Cartão não pode ser vazio")
        }
    }
}
export default ServicesValidation;