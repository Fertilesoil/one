const botaoChute = document.querySelector('.container__botao')
const botaoReiniciar = document.querySelector('#reiniciar')
let listaSorteados = []
let limite = 10
let numeroSecreto = gerarNumero()
let tentativas = 1


function selecionaMudaTexto(tag, texto) {
  tag = document.querySelector(tag)
  tag.innerHTML = texto
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function mensagemInicial() {
  selecionaMudaTexto('h1', 'Jogo do Número Secreto')
  selecionaMudaTexto('p', 'Escolha um número entre 1 e 10')
}
mensagemInicial()

function editaEstilo(elemento, estilo) {
  elemento = document.querySelector(elemento)

  if (elemento) {
    for (const style in estilo)
      elemento.style[style] = estilo[style]
  } else {
    console.log('Elemento não encontrado');
  }
}

function verificarChute() {
  let chute = document.querySelector('input').value
  let palavraTent = tentativas > 1 ? 'tentativas' : 'tentativa'
  if (chute == numeroSecreto) {
    selecionaMudaTexto('h1', 'Acertou!!')
    selecionaMudaTexto('p', `Parabéns!! Você descobriu o valor secreto com ${tentativas} ${palavraTent}.`)
    ativarBotao()
  } else if (chute > numeroSecreto) {
    selecionaMudaTexto('p', `O número secreto é menor.`)
  } else {
    selecionaMudaTexto('p', `O número secreto é maior.`)
  }

  tentativas++
  limparCampo()
}

function gerarNumero() {
  let numeroEscolhido = parseInt(Math.random() * limite + 1)
  let quantidadeElementos = listaSorteados.length

  if (quantidadeElementos == limite) {
    listaSorteados = []
  }

  if (listaSorteados.includes(numeroEscolhido)) {
    return gerarNumero()
  } else {
    listaSorteados.push(numeroEscolhido)
    console.log(listaSorteados)
    return numeroEscolhido
  }
}

editaEstilo('h1', {
  padding: '5px',
})

function limparCampo() {
  let chute = document.querySelector('input')

  chute.value = ''
}

function ativarBotao() {
  botaoReiniciar.removeAttribute('disabled')
}

function reiniciarJogo() {
  numeroSecreto = gerarNumero()
  limparCampo()
  tentativas = 1
  mensagemInicial()
  document.querySelector('#reiniciar').setAttribute('disabled', true)
}



