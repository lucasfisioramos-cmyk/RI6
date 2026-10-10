import Calculo from "./Calculo.js";

export default class Radiciacao extends Calculo {
  public calcular(radicando: number, indice: number): number {
    if (indice === 0) {
      throw new Error("O índice da raiz não pode ser zero.");
    }
    if (radicando < 0 && indice % 2 === 0) {
      throw new Error("Não existe raiz real de número negativo com índice par.");
    }
    return Math.pow(radicando, 1 / indice);
  }
}