let valor = Number(prompt("Informe o valor da compra: "));
console.log("Valor original: R$ ", valor);

let desconto = valor > 100 ? valor * 0.10 : valor * 0.5;
let valorAtual = valor - desconto;

console.log("Desconto aplicado: R$ ", desconto);
console.log("Valor final: R$ ", valorAtual);
