/* 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. */

const prompt = require("prompt-sync")();

let num = Number(prompt('Digite um número: '))

for (let cont = 1; cont < 11; cont++) {
    console.log(`${cont} -> ${num}`)
}
