import Calculo from "./Calculo.js";

export default class Potencia extends Calculo {
  public calcular(base: number, expoente: number): number {
    return Math.pow(base, expoente);
  }
}