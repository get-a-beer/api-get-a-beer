import { ApiModelProperty } from "@nestjs/swagger";
import {IsEmail, IsAlpha, IsDefined} from "class-validator";

export class UsuarioDTO{
    @ApiModelProperty({ required: false, description: 'Nome de Usuario' })
    @IsDefined()
    readonly usuario: string
    
    @ApiModelProperty({ required: false, description: 'Senha' })
    @IsDefined()
    readonly senha: string
}
