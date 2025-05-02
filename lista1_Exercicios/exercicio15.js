/* Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for. */

let a = 1;
let b = 1;

for (let cont = 1; cont < 11; cont++) {
  console.log(a)
  let next = a + b
  a = b
  b = next
}