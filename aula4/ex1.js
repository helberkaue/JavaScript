let nome = prompt("Digite seu nome:")

function saudacao(nome){
    if(nome){
        console.log(`Olá ${nome}`)
    }else{
        console.log("Olá visitante!");
    }
}
saudacao(nome);