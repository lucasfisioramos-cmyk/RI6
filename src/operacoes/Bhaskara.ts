export interface ResultadoBhaskara {
  delta: number;
  x1: number;
  x2: number;
}

export default class Bhaskara {
  public calcular(a: number, b: number, c: number): ResultadoBhaskara {
    if (a === 0) {
      throw new Error("O coeficiente a não pode ser zero.");
    }

    const delta = b * b - 4 * a * c;
    if (delta < 0) {
      throw new Error("A equação não possui raízes reais.");
    }

    const raizDelta = Math.sqrt(delta);

    return {
      delta,
      x1: (-b + raizDelta) / (2 * a),
      x2: (-b - raizDelta) / (2 * a)
    };
  }
}
