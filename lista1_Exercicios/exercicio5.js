/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */

const prompt = require("prompt-sync")();

let peso = Number(prompt('Digite seu peso: '))
let altura = Number(prompt('Digite sua altura: '))

let imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log(`Seu IMC é: ${imc.toFixed(2)}, está abaixo do peso`)
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log(`Seu IMC é: ${imc.toFixed(2)}, está com peso normal`)
} else if (imc >= 25.0 && imc <= 29.9) {
    console.log(`Seu IMC é: ${imc.toFixed(2)}, está com sobrepeso`)
} else if (imc >= 30.0 && imc <= 34.9) {
    console.log(`Seu IMC é: ${imc.toFixed(2)}, está com Obesidade grau 1`)
} else if (imc >= 35.0 && imc <= 39.9) {
    console.log(`Seu IMC é: ${imc.toFixed(2)}, está com Obesidade grau 2`)
} else {
    console.log(`Seu IMC é: ${imc.toFixed(2)}, está com Obesidade grau 3 (Mórbida)`)
}