import { ApiModelProperty } from '@nestjs/swagger';
import { IsDefined } from 'class-validator';
import { ProdutoDTO } from './produto.dto';

export class CervejaDTO extends ProdutoDTO {

    @ApiModelProperty({ required: false, description: 'Temperatura da cerveja' })
    @IsDefined()
    readonly temperatura: number;

    @ApiModelProperty({ required: false, description: 'Cor da Cerveja' })
    @IsDefined()
    readonly cor: string;

    @ApiModelProperty({ required: false, description: 'Teor Alcolico' })
    @IsDefined()
    readonly teorAlcolico: number;

    @ApiModelProperty({ required: false, description: 'Harmonizacao' })
    @IsDefined()
    readonly harmonizacao: string;

    @ApiModelProperty({ required: false, description: 'ID da cervejaria' })
    @IsDefined()
    readonly idCervejaria: number;
}
