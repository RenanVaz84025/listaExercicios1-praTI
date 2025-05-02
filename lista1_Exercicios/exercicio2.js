/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
    adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
    controle if-else. */

const prompt = require("prompt-sync")();

let idade = Number(prompt("Quantos anos você tem: "));

if (isNaN(idade)) {
    console.log("Insira uma idade válida")
} else if (idade >= 0 && idade <= 12) {
    console.log("Faixa Etaria: Infantil")
} else if (idade >= 13 && idade <= 17) {
    console.log("Faixa Etaria: Adolescente")
} else if (idade >= 18 && idade <= 59) {
    console.log("Faixa Etaria: Adulto")
} else {
    console.log("Faixa Etaria: Idoso")
}

    

  

