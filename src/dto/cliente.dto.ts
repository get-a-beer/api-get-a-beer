import { PessoaDTO } from "./pessoa.dto";
import { ApiModelProperty } from "@nestjs/swagger";
import { IsDefined } from "class-validator";


export class ClienteDTO extends PessoaDTO{
    
    @ApiModelProperty({ required: false, description: 'CPF' })
    @IsDefined()
    readonly cpf: string;

    @ApiModelProperty({ required: false, description: 'Data de Nascimento' })
    @IsDefined()
    readonly dataNascimento: string;

}