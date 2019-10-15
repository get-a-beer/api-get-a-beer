import { ApiModelProperty } from "@nestjs/swagger";
import { UsuarioDTO } from "./usuario.dto";
import {IsEmail, IsDefined} from "class-validator";


export class PessoaDTO extends UsuarioDTO{
    
    @ApiModelProperty({ required: false, description: 'Nome Completo' })
    @IsDefined()
    readonly nome: string;
    
    @ApiModelProperty({ required: false, description: 'E-mail' })
    @IsEmail()
    @IsDefined()
    readonly email: string;
    
    @ApiModelProperty({ required: false, description: 'Telefone' })
    @IsDefined()
    readonly telefone: string;

}