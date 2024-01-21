// Exercícios
// 1.Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
// let contador = 1

// while (contador <= 10) {
//  console.log(`O contador está na volta: ${contador}`);
//  contador++
// }

// 2.Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
// let decremento = 10

// while (decremento != 0) {
//  console.log(`O contador está na volta: ${decremento}`);
//  decremento--
// }

// 3.Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
// let recebido = prompt('Insira um numero que é caro à você: ')
// console.log(recebido);

// while (recebido > 0) {
//  console.log(`Recebido na posição ${recebido}`);
//  recebido--
// }

// 4.Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contador = 1
let presente = prompt('Insira um numero que é caro à você: ')

while (contador <= presente) {
 console.log(`Até chegar lá: ${contador}`);
 contador++
}


