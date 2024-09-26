alert('Ola seja bem vindo ao jogo de adivinhação de numero secreto!')
let numeroSecreto = 4
let chute

console.log (numeroSecreto);

while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero de 1 a 30.');
    
    if (chute == numeroSecreto) {
        alert('Parabéns você acertou o numero');
    }else {
        if (chute > numeroSecreto) {
        alert(`O numero é menor que ${chute}`);
    }else {
        alert (`O numero é maior que ${chute}`);
    }
}
}



