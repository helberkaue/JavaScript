let idade = Number(prompt("Informe sua idade: "))
let permitido = idade >= 18;

if (permitido){
    console.log("Entrada permitida");
}else{
    console.log("Entrada negada")
}