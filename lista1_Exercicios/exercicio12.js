/* 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
    10) utilizando um loop for. */

    const prompt = require("prompt-sync")();

    let num = Number(prompt('A tabuada de qual número você deseja? '))

    for(let cont = 1; cont < 11; cont++) {
        console.log(`${num} X ${cont} = ${num * cont}`)
    }