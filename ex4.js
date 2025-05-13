let num1 = prompt("Digite o primeiro número: ")
let num2 = prompt("Digite o segundo número: ")
console.log(`--- Operações ---
1 - soma 
2 - subtração 
3 - multiplicação
4 - divisão
-----------------`)
let opcao = prompt("Escolha a opção:");


switch (opcao){
    case 1:
        let soma = num1 + num2;
        console.log("Resultado da soma ", soma);
        break;
    case 2:
        let subtr = num1 - num2;
        console.log("Resultado da subtração ", subtr);
        break;
    case 3:
        let multi = num1 * num2;
        console.log("Resultado da multiplicação ", multi);
        break;
    case 4:
        let div = num1 / num2;
        console.log("Resultado da divisão ", div);
        break;
}

