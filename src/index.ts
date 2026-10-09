/// <reference types="node" />
import * as readline from "node:readline";
import Calculo from "./operacoes/Calculo.js";
import Soma from "./operacoes/Soma.js";
import Subtracao from "./operacoes/Subtracao.js";
import Multiplicacao from "./operacoes/Multiplicacao.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Mapeamento polimórfico contendo apenas as 3 operações
const operacoes: { [key: string]: { nome: string; objeto: Calculo } } = {
  "1": { nome: "Soma", objeto: new Soma() },
  "2": { nome: "Subtração", objeto: new Subtracao() },
  "3": { nome: "Multiplicação", objeto: new Multiplicacao() }
};

function perguntar(pergunta: string): Promise<string> {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

function exibirMenu(): void {
  console.log("\n====== CALCULADORA CLI (POO) ======");
  console.log("1. Somar (+)");
  console.log("2. Subtrair (-)");
  console.log("3. Multiplicar (*)");
  console.log("4. Sair");
  console.log("====================================");
}

async function loopCalculadora(): Promise<void> {
  let executando = true;

  while (executando) {
    exibirMenu();
    const opcao = await perguntar("Escolha uma opção: ");

    if (opcao === "4") {
      console.log("\nEncerrando a calculadora...");
      executando = false;
      rl.close();
      break;
    }

    const operacaoSelecionada = operacoes[opcao];

    if (!operacaoSelecionada) {
      console.log("\nOpção inválida! Tente novamente.");
      continue;
    }

    const entrada1 = await perguntar("Digite o primeiro número: ");
    const entrada2 = await perguntar("Digite o segundo número: ");

    const num1 = parseFloat(entrada1);
    const num2 = parseFloat(entrada2);

    if (isNaN(num1) || isNaN(num2)) {
      console.log("\nErro: Por favor, informe números válidos.");
      continue;
    }

    // Execução polimórfica: o método calcular() pertence ao objeto da subclasse selecionada
    const resultado = operacaoSelecionada.objeto.calcular(num1, num2);
    console.log(`\nResultado da ${operacaoSelecionada.nome}: ${resultado}`);
  }
}

loopCalculadora();