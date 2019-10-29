import { ApiModelProperty } from '@nestjs/swagger';
import { IsDefined } from 'class-validator';

export class PromocaoDTO {
    @ApiModelProperty({ required: true, description: 'Id Referente ao Produto no qual sera aplicado o cupom de desconto' })
    @IsDefined()
    readonly idProduto: number;

    @ApiModelProperty({ required: false, description: 'Data e hora do inicio da validade do cupom de desconto' })
    @IsDefined()
    readonly dtInicio: string;

    @ApiModelProperty({ required: false, description: 'Data e hora do temrmino da validade do cupom de desconto' })
    @IsDefined()
    readonly dtTermino: string;

    @ApiModelProperty({ required: true, description: 'Valor do desconto no produto' })
    @IsDefined()
    readonly valor: number;
}
