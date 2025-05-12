let estoque = Number(prompt("Estoque: "));
let remover = Number(prompt("Remover: "))
let total = estoque-remover;

if(total<0){
    console.log("Operação inválida: quantidade insuficiente no estoque");
}else{
    console.log("Estoque Atualizado: ", total)
}