// Descrição: Descrição: Crie um programa que solicite ao usuário dois números e um operador matemático (+, -, *, /, %), e passe esses valores para uma função chamada 
// calcular, responsável por executar a operação correspondente e retornar o resultado. 
// Caso algum parâmetro não seja informado, utilize valores padrão. O programa deve verificar se é possível realizar as 
// operações de divisão e módulo, garantindo que o segundo número não seja zero. Após exibir o resultado, pergunte ao usuário se deseja fazer outro cálculo (sim ou não). 
// Se a resposta for sim, repita o processo; caso contrário, finalize o programa com uma mensagem de encerramento. 
// Certifique-se de validar as entradas e tratar erros para garantir o bom funcionamento do programa.

function calcular (n1= 1,n2=1, op){
    
    switch (op){
        case "+":
            return n1 + n2;
        case "-":
            return n1-n2;
        case "/":
            if (n2 === 0) {
                return -1;
            }else {
                return n1/n2;
            }
        case "*":
            return n1*n2;
        case "%":
            return n1%n2;
        default:
            return "Valores indefinidos!"
    }   
}


let continuar = "sim";

while (continuar === "sim") {
    let n1 = Number(prompt("Digite o primeiro número: "));
    let n2 = Number(prompt("Digite o segundo número: "));
    let op = prompt("Qual a operação ?");


    if ((op === "/" || op === "%")&& resultado === -1) {
        console.log("Divisão incorreta!");
    }

    let resultado = calcular(n1,n2,op);
    alert(`O resultado é: ${resultado}`)
    continuar = prompt("Você deseja continuar? (sim/nao)");
}


