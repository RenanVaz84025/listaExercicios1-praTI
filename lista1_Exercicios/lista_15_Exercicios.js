/* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if. */

const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um numero: "));

if (numero % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");
}

/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
    adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
    controle if-else. */

const prompt = require("prompt-sync")();

let idade = Number(prompt("Quantos anos você tem: "));

if (isNaN(idade)) {
  console.log("Insira uma idade válida");
} else if (idade >= 0 && idade <= 12) {
  console.log("Faixa Etaria: Infantil");
} else if (idade >= 13 && idade <= 17) {
  console.log("Faixa Etaria: Adolescente");
} else if (idade >= 18 && idade <= 59) {
  console.log("Faixa Etaria: Adulto");
} else {
  console.log("Faixa Etaria: Idoso");
}

/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

const prompt = require("prompt-sync")();

let nota = Number(prompt("Digite uma nota de 0 a 10: "));

if (isNaN(nota) || nota < 0 || nota > 10) {
  console.log("Insira uma nota válida!");
} else if (nota < 5) {
  console.log("O aluno está Reprovado");
} else if (nota === 5) {
  console.log("O aluno está de Recuperação");
} else {
  console.log("O aluno está Aprovado");
}

/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */

const prompt = require("prompt-sync")();

console.log(
  "Escolha uma das 3 opções a seguir, para ganhar um premio incrivel:"
);
console.log();
console.log("Opção 1 <-");
console.log("Opção 2 <-");
console.log("Opção 3 <-");
console.log();

let opcaoUsuario = Number(prompt("Escolha a opção 1, 2 ou 3: "));

switch (opcaoUsuario) {
  case 1:
    console.log("Você ganhou uma viagem só de ida para Lua");
    break;
  case 2:
    console.log("Você ganhou um jantar romantico no DOG do seu Zé");
    break;
  case 3:
    console.log("Você ganhou 1 milhão de pesos Argentinos.");
    break;
  default:
    console.log(
      "Opção inválida, perdeu a chance de ganhar um premio incrivel!"
    );
}

/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */

const prompt = require("prompt-sync")();

let peso = Number(prompt("Digite seu peso: "));
let altura = Number(prompt("Digite sua altura: "));

let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log(`Seu IMC é: ${imc.toFixed(2)}, está abaixo do peso`);
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log(`Seu IMC é: ${imc.toFixed(2)}, está com peso normal`);
} else if (imc >= 25.0 && imc <= 29.9) {
  console.log(`Seu IMC é: ${imc.toFixed(2)}, está com sobrepeso`);
} else if (imc >= 30.0 && imc <= 34.9) {
  console.log(`Seu IMC é: ${imc.toFixed(2)}, está com Obesidade grau 1`);
} else if (imc >= 35.0 && imc <= 39.9) {
  console.log(`Seu IMC é: ${imc.toFixed(2)}, está com Obesidade grau 2`);
} else {
  console.log(
    `Seu IMC é: ${imc.toFixed(2)}, está com Obesidade grau 3 (Mórbida)`
  );
}

/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> */

const prompt = require("prompt-sync")();

let a = Number(prompt("Digite o lado A: "));
let b = Number(prompt("Digite o lado B: "));
let c = Number(prompt("Digite o lado C: "));

if (a < b + c && b < a + c && c < a + b) {
  // Para verificar se os lados fornecidos formam triângulo:
  if (a === b && b === c) {
    console.log("Triângulo Equilátero"); // Todos os lados Iguais
  } else if (a === b || a === c || b === c) {
    console.log("Triângulo Isósceles"); // Dois lados iguais
  } else if (a !== b && b !== c) console.log("Triângulo Escaleno"); // Todos os lados Diferentes
} else {
  console.log("Os valores fornecidos não formam um triângulo");
}

/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

const prompt = require("prompt-sync")();

let qtdeCompra = Number(prompt("Qual a quantidade de maçãs compradas: "));

let valorCompra;

if (qtdeCompra < 12) {
  valorCompra = qtdeCompra * 0.3;
  console.log(
    `${qtdeCompra} mãças compradas, valor da compra R$${valorCompra.toFixed(2)}`
  );
} else {
  valorCompra = qtdeCompra * 0.25;
  console.log(
    `${qtdeCompra} mãças compradas, valor da compra R$${valorCompra.toFixed(2)}`
  );
}

/* 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro numero: "));
let num2 = Number(prompt("Digite o segundo numero: "));

if (num1 === num2) {
  console.log("Numeros iguais, digite novamente! ");
} else if (num1 > num2) {
  console.log(num1, num2);
} else {
  console.log(num2, num1);
}

/* 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
utilizando um loop for. */

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

/* 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. */

const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número: "));

for (let cont = 1; cont < 11; cont++) {
  console.log(`${cont} -> ${num}`);
}

/* 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for. */

const prompt = require("prompt-sync")();

let soma = 0;

for (let cont = 0; cont < 5; cont++) {
  let num = Number(prompt("Digite o número: "));
  soma += num;
}

console.log(`A soma dos números digitados é ${soma}`);

/* 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
    10) utilizando um loop for. */

const prompt = require("prompt-sync")();

let num = Number(prompt("A tabuada de qual número você deseja? "));

for (let cont = 1; cont < 11; cont++) {
  console.log(`${num} X ${cont} = ${num * cont}`);
}

/* 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */

const prompt = require("prompt-sync")();

let soma = 0;
let contador = 0;
let numero;

do {
  numero = Number(prompt("Digite um número decimal (0 para sair):"));
  if (numero !== 0) {
    soma += numero;
    contador++;
  }
} while (numero !== 0);

if (contador > 0) {
  let media = soma / contador;
  console.log("A média dos números digitados é: " + media);
} else {
  console.log("Nenhum número válido foi digitado.");
}


/* 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while. */

const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número para calcular o fatorial: "));

let fatorial = 1;

for (let cont = num; cont > 1; cont--) {
  fatorial *= cont;
}

console.log(`O fatorial do número ${num} é : ${fatorial}`);

/* 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for. */

let a = 1;
let b = 1;

for (let cont = 1; cont < 11; cont++) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
}
