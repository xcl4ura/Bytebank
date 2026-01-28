//Tipos primitivos
let num = 300;
let sname = "Hello World";
let torf = false;
let anyway = "";
anyway = 2000;
//Arrays
const isAList = []; //lista do tipo NUMERIC
isAList.push(13, 22.5, 22, 89, 1.58); //colocando numeros dentro da lista
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao,
    data: new Date(),
    valor: 0
};
