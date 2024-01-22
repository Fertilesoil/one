alert('Bem vinde ao jogo do Acerta o Número')
let chute = 0
const numeroMaximo = 7000
const numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto);
let tentativas = 1

while (chute !== numeroSecreto) {
chute = prompt(`Escolha um numero entre 0 e ${numeroMaximo}`)

  if (chute == numeroSecreto) {
    break
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`)
    } else {
      alert(`O número secreto é maior que ${chute}`)
    }
    tentativas++
  }
}

let palavraTent = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Parabéns, você conseguiu, acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTent}!!`)




