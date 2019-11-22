
import * as dotenv from 'dotenv';
dotenv.config();

const pag_email = process.env.PAG_EMAIL
const pag_token = process.env.PAG_TOKEN

export class PagSeguroConfig {
    constructor(
        readonly url: string = `https://ws.pagseguro.uol.com.br/recurring-payment/boletos?email=${pag_email}&token=${pag_token}`
    ) { }
}