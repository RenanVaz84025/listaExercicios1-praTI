/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

const prompt = require("prompt-sync")();

let qtdeCompra = Number(prompt('Qual a quantidade de maçãs compradas: '))

let valorCompra 

if (qtdeCompra < 12) {
    valorCompra = qtdeCompra * 0.30
    console.log(`${qtdeCompra} mãças compradas, valor da compra R$${valorCompra.toFixed(2)}`)
} else {
    valorCompra = qtdeCompra * 0.25
    console.log(`${qtdeCompra} mãças compradas, valor da compra R$${valorCompra.toFixed(2)}`)
}