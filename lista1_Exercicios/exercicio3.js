/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

const prompt = require("prompt-sync")();

let nota = Number(prompt('Digite uma nota de 0 a 10: '))

if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log('Insira uma nota válida!')
} else if (nota < 5) {
    console.log('O aluno está Reprovado')
} else if (nota === 5) {
    console.log('O aluno está de Recuperação')
} else {
    console.log('O aluno está Aprovado')
}
