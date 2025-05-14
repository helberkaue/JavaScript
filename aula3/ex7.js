let numero = 1;
let contadorN = 0;
let contadorP = 0;
while(numero!=0){
    numero = prompt();
    if(numero>0){
        contadorP++;
    }else if(numero<0){
        contadorN++;
    }else{
        console.log("Deu Erro!")
    }
}
console.log("Quantidade de números positivos: " + contadorP)
console.log("Quantidade de números negativos: " + contadorN)