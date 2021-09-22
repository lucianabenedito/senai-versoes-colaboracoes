var Listadepecas = ["Peca1", "peca 2", "peca 3", "peca 4", "peca 5", "peca 6", "peca 7", "peca 8", "peca 9", "peca 10", "peca 11"];
console.log("Quantidade de pecas");
//A linha de cima e uma informacao apenas.

if (Listadepecas.length > 10 ){
    console.log("capacidade insulficiente");
}else {
    console.log("As pecas podem ser cadastradas")
}


console.log("Quantidede de caracteres");

for (var contador = 0; contador < Listadepecas.length; contador++){
    var PecaAtual = Listadepecas[contador];
    
    if (PecaAtual.length < 3 ){
        console.log( PecaAtual + ": a peca possui nome inferior a 3 caracteres e nao pode ser cadastrada");
    }

else {
    console.log(PecaAtual +":a peca pode ser cadastrada")
}
}
console.log("Peso da peca");

var PesoDaPecaEmgramas = 300;

if (PesoDaPecaEmgramas < 100){
    console.log("peso insuficiente");
} else{
    console.log("peso suficiente")
}

