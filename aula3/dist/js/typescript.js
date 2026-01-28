/*


//Tipos primitivos
let num: number = 300;
let sname: string = "Hello World";
let torf: boolean = false;

let anyway: any = "";
anyway = 2000;

//Arrays
const isAList: number [] = []; //lista do tipo NUMERIC
isAList.push(13,22.5,22,89,1.58); //colocando numeros dentro da lista


//Type Alias -> tipo personalizado

type Transacao = {
    tipoTransacao: string;
      data: Date;
      valor: number;
 }

 enum TipoTransacao {
    DEPOSITO = "Depósito",
        TRANSFERENCIA = "Transferência",
        PAGAMENTO_BOLETO = "Pagamento de Boleto"

}

const novaTransacao = {
    tipoTransacao: TipoTransacao,
        data: new Date(),
        valor: 0
}

console.log(novaTransacao);

*/ 
