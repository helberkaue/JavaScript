let anoNasc = prompt("Digite o ano de nascimento: ");
let anoAtual = prompt("Digite o ano atual: ")

let idade = anoAtual - anoNasc;

if(idade>=18){
    console.log("Você completa " + idade + "em" + anoAtual + "e poderá tirar a habilitação");
}else if(idade<18 && idade>=0){
    console.log("Você completa " + idade + "em" + anoAtual + "e não poderá tirar a habilitação")
}else{
    console.log("Valor inválido")
}
