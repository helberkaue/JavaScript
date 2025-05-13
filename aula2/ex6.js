let nome = prompt("Qual é o seu nome?");
let peso = Number(prompt("Qual é o seu peso?"));
let altura = Number(prompt("Qual é a sua altura?"));


const imc = peso / (altura * altura);

let confirmacao = confirm(`Seus Dados: 
    Nome: ${nome}
    Peso: ${peso} kg
    Altura: ${altura} m
    Deseja continuar?`);

alert(confirmacao? `${nome}, seu IMC é ${imc}`:"Você saiu do programa.");



