/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */

const prompt = require("prompt-sync")();

console.log('Escolha uma das 3 opções a seguir, para ganhar um premio incrivel:')
console.log()
console.log('Opção 1 <-')
console.log('Opção 2 <-')
console.log('Opção 3 <-')
console.log()

let opcaoUsuario = Number(prompt('Escolha a opção 1, 2 ou 3: '))

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
      console.log("Opção inválida, perdeu a chance de ganhar um premio incrivel!");
  }