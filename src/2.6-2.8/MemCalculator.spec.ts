import { MemCalculator } from './MemCalculator';

describe('MemCalculator', () => {
  describe('use sum()', () => {
    // 2.7
    test('should return 0 by default', () => {
      const calc = new MemCalculator();
      const lastSum = calc.sum();
      expect(lastSum).toBe(0);
    });

    // 2.8
    test('should return 1, after add(1)', () => {
      const calc = new MemCalculator();
      calc.add(1);
      const lastSum = calc.sum();
      expect(lastSum).toBe(1);
    });
  });
});
