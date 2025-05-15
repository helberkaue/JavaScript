// Descrição: Crie uma função chamada verificarIdade que receba dois parâmetros: nome (com valor padrão "visitante") e idade. 
// A função não deve retornar nenhum valor, apenas exibir uma mensagem com alert informando:
// "Olá, [nome]! Você é menor de idade." se a idade for menor que 18.
// "Olá, [nome]! Você é maior de idade." se a idade for 18 ou mais.
// Antes de exibir a mensagem, verifique se a idade informada é válida: ela não pode ser negativa nem ultrapassar um valor máximo definido (por exemplo, 120).
//  O programa deve começar perguntando ao usuário, por meio de confirm, se ele deseja verificar uma idade. 
//  Enquanto a resposta for positiva, utilize prompt para solicitar o nome e a idade da pessoa, e chame a função verificarIdade. 
// O processo deve se repetir até que o usuário decida encerrar.


function verificarIdade(nome="visitante",idade = 1){
    let opcao = "s";
    while (opcao == "s"){
        if(idade>=18 && idade<120){
            alert(`Olá ${nome} Você é maior de idade `)
        }else if(idade<18 && idade>0){
            alert(`Olá ${nome} Você é menor de idade `)
        }else{
            alert("Valores invállidos")
        }
        opcao = prompt("Você deseja continuar? (s/n)")
    }
}
nome = prompt("Digite seu nome: ")
idade = prompt("Digite sua idade: ")

verificarIdade(nome,idade)


