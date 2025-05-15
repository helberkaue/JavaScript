// EXERCICIO 1

// let nome = prompt("Digite seu nome:")

// function saudacao(nome){
//     if(nome){
//         console.log(`Olá ${nome}`)
//     }else{
//         console.log("Olá visitante!");
//     }
// }
// saudacao(nome);

// EXERCICIO 1 EXTRA

// function verificarIdade(nome="visitante",idade = 1){
//     let opcao = "s";
//     while (opcao == "s"){
//         if(idade>=18 && idade<120){
//             alert(`Olá ${nome} Você é maior de idade `)
//         }else if(idade<18 && idade>0){
//             alert(`Olá ${nome} Você é menor de idade `)
//         }else{
//             alert("Valores invállidos")
//         }
//         opcao = prompt("Você deseja continuar? (s/n)")
//     }
// }
// nome = prompt("Digite seu nome: ")
// idade = prompt("Digite sua idade: ")

// verificarIdade(nome,idade)

// EXERCICIO 2

// function calcular (n1= 1,n2=1, op){
    
//     switch (op){
//         case "+":
//             return n1 + n2;
//         case "-":
//             return n1-n2;
//         case "/":
//             if (n2 === 0) {
//                 return -1;
//             }else {
//                 return n1/n2;
//             }
//         case "*":
//             return n1*n2;
//         case "%":
//             return n1%n2;
//         default:
//             return "Valores indefinidos!"
//     }   
// }


// let continuar = "sim";

// while (continuar === "sim") {
//     let n1 = Number(prompt("Digite o primeiro número: "));
//     let n2 = Number(prompt("Digite o segundo número: "));
//     let op = prompt("Qual a operação ?");


//     if ((op === "/" || op === "%")&& resultado === -1) {
//         console.log("Divisão incorreta!");
//     }

//     let resultado = calcular(n1,n2,op);
//     alert(`O resultado é: ${resultado}`)
//     continuar = prompt("Você deseja continuar? (sim/nao)");
// }
