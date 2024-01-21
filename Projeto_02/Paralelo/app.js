const h1 = document.querySelector('h1')
h1.innerHTML = 'Hora do Desafio'

function botaoClicado() {
 console.log('O botão foi clicado!');
}

function alerta() {
 alert('Eu amo JS')
}

function pro() {
 const cidade = prompt('Uma cidade do Brasil: ')
 alert(`Estive em ${cidade} e lembrei de você!`)
}

function soma() {
 let n1 = parseInt(prompt('Me dê um primeiro número: '))
 let n2 = prompt('Agora um segundo: ')
 let soma = n1 + +n2

 alert(`O resultado da sua soma é: ${soma}`)
}