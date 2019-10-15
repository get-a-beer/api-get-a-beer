import { PessoaDTO } from "./pessoa.dto";
import { ApiModelProperty } from "@nestjs/swagger";
import { IsDefined } from "class-validator";


export class ClienteDTO extends PessoaDTO{
    
    @ApiModelProperty({ required: false, description: 'CNPJ' })
    @IsDefined()
    readonly   cnpj: string;

}

