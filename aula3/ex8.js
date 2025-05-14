let senhaCorreta = Number(1234);
let senha = 0;

while (senha != senhaCorreta) {
    senha = Number(prompt("Digite a senha: "))
    if (senha == senhaCorreta) {
        console.log("Acesso Liberado.")
    } else {
        console.log("Senha incorreta. Tente novamente.")
    }
}