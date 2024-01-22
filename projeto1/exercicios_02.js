// Exercícios
// 1.Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo",
// mostre "Bom fim de semana!".Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt('Que dia da semana é hoje')

if (diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') { 
 alert('Bom fim de semana amigue!')
} else {
 alert('Boa semana!')
}

// 2.Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let npv = prompt('Digite um número e direi se é negativo ou positivo: ')

if (npv < 0) {
 alert('Seu número é negativo')
} else if(npv >= 0) {
 alert('Seu número é positivo')
} else {
 alert('Insira um número')
}

// 3.Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns,
// você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt('Insira um número para ganhar, o que seu coração sentir: ')

if (pontuacao >= 100) {
 alert('Parabéns, você venceu!')
} else {
 alert('Tente novamente para ganhar.')
}

// 4.Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 1.200

alert(`O valor do seu saldo é R$${saldo}`)

// 5.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
const nome = prompt('Inisira seu nome: ')
alert(`Bem vinde ${nome}!`)