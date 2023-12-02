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
        if (dto.ativo === undefined || dto.ativo) {
            throw new Error("Estatus não pode ser vazio")
        }
    }
}
export default ServicesValidation;