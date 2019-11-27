export class BoletoReqDTO {
    firstDueDate: string;
    numberOfPayments: string;
    periodicity: string;
    amount: string;
    description: string;
    customer: {
        document: {
            type: string,
            value: string
        };
        phone: {
            areaCode: string,
            number: string,
        };
        name: string, 
        email: string
    }
}

export class BoletoResDTO {

    readonly boletos: [
        {
            code: string,
            paymentLink: string,
            barcode: string,
            dueDate: string
        }
    ]
}
