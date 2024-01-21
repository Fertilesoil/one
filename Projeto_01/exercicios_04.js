﻿// Exercícios
// 1.Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Boas Vindas");

// 2.Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o
// console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = 'Fernando'
console.log(`Olá, meu nome é ${nome}`);

// 3.Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize
// o alert para exibir a mensagem "Olá, [seu nome]!".
alert(`Olá, meu nome é ${nome}`);

// 4.Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que
// você mais gosta?.Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagem = prompt('Qual a linguagem de programação que mais te agrada?')
console.log(linguagem);

// 5.Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de
// sua escolha.Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável 
// chamada "resultado".Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 27
let valor2 = 59
let res = valor1 + valor2
console.log(`A soma de ${valor1} e ${valor2} é: ${res}`);

// 6.Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize
// a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".Utilize o console.log para mostrar
// a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor3 = 27
let valor4 = 59
let res1 = valor1 - valor2
console.log(`A subtração de ${valor3} e ${valor4} é: ${res1}`);

// 7.Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor 
// de idade, exibindo uma mensagem apropriada no console.
let idade = prompt('Qual sua idade?')
let maioridade = idade >= 18 ? 'Maior de idade' : 'Menor de idade'
console.log(maioridade);

// 8.Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt('Insira um número para verificação!')

let verificacao = numero >= 0 ? 'Seu número é positivo' : 'Seu número é negativo'
alert(`${verificacao}`)

// 9.Use um loop while para imprimir os números de 1 a 10 no console.
let contador = 1

while (contador <= 10) {
 console.log(`O número está na posição: [${contador}].`);
 contador++
}

// 10.Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 10
let resul = nota >= 7 ? 'Aprovado hein' : 'Estude um pouco mais'
console.log(resul)

// 11.Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio = parseInt(Math.random() * 500 + 1)
console.log(numeroAleatorio);

// 12.Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numero10 = parseInt(Math.random() * 10 + 1)
console.log(numero10);

// 13.Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numero1000 = parseInt(Math.random() * 1000 + 1)
console.log(numero1000);