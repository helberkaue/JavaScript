let valor = Number(prompt("Informe o valor da compra: "))
console.log("Valor original: R$ ", valor);
if(valor>100){
    let desconto = valor * 0.10 
    valorAtual = valor - desconto;
    console.log("Desconto aplicado: R$ ",desconto);
    console.log("Valor final: R$ ", valorAtual);
}else{
    let desconto = valor * 0.5 
    valorAtual = valor - desconto; 
    console.log("Desconto aplicado: R$ ",desconto);
    console.log("Valor final: R$ ", valorAtual);
}