import { ApiModelProperty } from "@nestjs/swagger";
import {IsEmail, IsDefined} from "class-validator";


export class ProdutoDTO{
    
    @ApiModelProperty({ required: false, description: 'Nome do Produto' })
    @IsDefined()
    readonly nome: string;
    
    @ApiModelProperty({ required: false, description: 'Valor do Produto' })
    @IsEmail()
    @IsDefined()
    readonly valor: number;
    
    @ApiModelProperty({ required: false, description: 'Quantidade de produtos disponiveis' })
    @IsDefined()
    readonly qtdDisponivel: number;

    @ApiModelProperty({ required: false, description: 'Id da Cervejaria dona do produto' })
    @IsDefined()
    readonly cervejariaId: number;

}