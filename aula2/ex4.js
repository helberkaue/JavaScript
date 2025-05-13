let estoque = Number(prompt("Estoque: "));
let remover = Number(prompt("Remover: "))
let total = estoque-remover;

console.log(total<0? "Operação inválida: Quantidade insuficiente no estoque" : "Estoque atualizado")
