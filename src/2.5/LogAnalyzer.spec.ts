import { LogAnalyzer } from './LogAnalyzer';

describe('LogAnalyzer', () => {
  describe('use isValidLogFileName()', () => {
    test('should change wasLasrFileNameValid.', () => {
      const la = new LogAnalyzer();
      la.isValidLogFileName('badname.foo');
      expect(la.wasLastFileNameValid).toBeFalsy();
    });

    test.each([
      ['badname.foo', false],
      ['badname.SLF', true],
    ])('with parameter %s should change wasLasrFileNameValid to %s.', (param, expected) => {
      const la = new LogAnalyzer();
      la.isValidLogFileName(param);
      expect(la.wasLastFileNameValid).toBe(expected);
    });
  });
});
