// 10. Default Export
// Vom crea un modul care exportă implicit o clasă MathUtils care
// are câteva metode statice pentru operații matematice.
// Într-un alt fișier, importăm clasa MathUtils și folosim metodele sale pentru a efectua câteva operații matematice.

export default class MathUtils {
  static adunare(a, b) {
    return a + b;
  }

  static scadere(a, b) {
    return a - b;
  }

  static inmultire(a, b) {
    return a * b;
  }
}
