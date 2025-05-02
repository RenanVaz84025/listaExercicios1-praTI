/* 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

const prompt = require("prompt-sync")();

let num1 = Number(prompt('Digite o primeiro numero: '))
let num2 = Number(prompt('Digite o segundo numero: '))

if (num1 === num2) {
    console.log('Numeros iguais, digite novamente! ')
} else if (num1 > num2) {
    console.log(num1, num2)
} else {
    console.log(num2, num1)
}