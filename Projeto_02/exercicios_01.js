// Ecercícios
// 1.Criar uma função que exibe "Olá, mundo!" no console.
const imprime = () => {
 console.log('Olá mundo!');
}
imprime()

// 2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibe(nome) {
 console.log(`Olá ${nome}, bem vinde.`);
} 
exibe('Blubs')

// 3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobra(num) {
return num *2
}
console.log(`O valor é ${dobra(5)}`);

// 4.Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(n1, n2, n3) {
 let media = (n1 + n2 + n3) / 3
 return media
}
console.log(media(20, 20, 20))

// 5.Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function retornaMaior(n1, n2) {
 return Math.max(n1, n2)
}
console.log(retornaMaior( 30, 20));

// 6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicação(n) { 
 return n * n
}
ex(multiplicação(27));

function ex(parametro) {
 console.log(parametro)
}