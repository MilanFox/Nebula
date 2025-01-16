function* generatePseudoRandomNumber(seed: number) {
  let currentSeed = seed;
  while (true) {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    yield currentSeed;
  }
}

export class PseudoRandomNumberGenerator {
  private generator: Generator<number, void, unknown>;

  constructor(seed: number) {
    this.generator = generatePseudoRandomNumber(seed);
  }

  nextNumber() {
    const { value, done } = this.generator.next();
    if (done || typeof value !== 'number') throw new Error('Generator has finished unexpectedly or produced undefined.');
    return value;
  }
}
