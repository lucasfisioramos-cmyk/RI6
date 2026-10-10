// index.ts
import * as readline from "readline";
import Mensagens from "./Mensagens.js";
import Calculo from "./operacoes/Calculo.js";
import Soma from "./operacoes/Soma.js";
import Subtracao from "./operacoes/Subtracao.js";
import Multiplicacao from "./operacoes/Multiplicacao.js";
import Divisao from "./operacoes/Divisao.js";
import Potencia from "./operacoes/Potenciacao.js";
import Radiciacao from "./operacoes/Radiciacao.js";
import Bhaskara from "./operacoes/Bhaskara.js";

declare const process: {
  stdin: any;
  stdout: any;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const mensagens = new Mensagens();

// Mapeamento polimórfico das operações de 2 números
const operacoesSimples: { [key: string]: Calculo } = {
  "1": new Soma(),
  "2": new Subtracao(),
  "3": new Multiplicacao(),
  "4": new Divisao(),
  "5": new Potencia(),
  "6": new Radiciacao()
};

function perguntar(query: string): Promise<string> {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function loopCalculadora(): Promise<void> {
  let ativo = true;

  while (ativo) {
    mensagens.exibirMenu();
    const opcao = await perguntar("Escolha uma opção: ");

    if (opcao === "8") {
      console.log("\nEncerrando a calculadora...");
      ativo = false;
      rl.close();
      break;
    }

    if (opcao === "7") {
      // Parte 2: Bhaskara (3 números)
      console.log("\n--- Cálculo de Bhaskara (ax² + bx + c = 0) ---");
      try {
        const a = parseFloat(await perguntar("Digite o coeficiente a: "));
        const b = parseFloat(await perguntar("Digite o coeficiente b: "));
        const c = parseFloat(await perguntar("Digite o coeficiente c: "));

        const bhaskara = new Bhaskara();
        const resultado = bhaskara.calcular(a, b, c);

        console.log(`\nDelta (Δ): ${resultado.delta}`);
        console.log(`x'  = ${resultado.x1}`);
        console.log(`x'' = ${resultado.x2}`);
      } catch (error: any) {
        console.log(`\nErro: ${error.message}`);
      }
    } else if (operacoesSimples[opcao]) {
      // Parte 1: Operações Básicas de 2 números (Polimorfismo)
      const operacao = operacoesSimples[opcao];
      try {
        const n1 = parseFloat(await perguntar("Digite o primeiro número: "));
        const n2 = parseFloat(await perguntar("Digite o segundo número: "));

        if (isNaN(n1) || isNaN(n2)) {
          console.log("\nErro: Por favor, insira valores numéricos válidos.");
          continue;
        }

        // Chamada Polimórfica:
        const resultado = operacao.calcular(n1, n2);
        console.log(`\nResultado: ${resultado}`);
      } catch (error: any) {
        console.log(`\nErro ao calcular: ${error.message}`);
      }
    } else {
      console.log("\nOpção inválida! Tente novamente.");
    }
  }
}

loopCalculadora();