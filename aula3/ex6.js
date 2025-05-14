let n = prompt("N: ")
let numeroPares =0;
for(let i = 0; i<=10;i++){
    if(i%2==0){
        numeroPares+=i;
    }else{
        continue
    }
}
console.log("A soma dos números pares de 1 até 10 é: "+numeroPares);