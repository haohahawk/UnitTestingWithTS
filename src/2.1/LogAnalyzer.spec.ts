import { LogAnalyzer } from './LogAnalyzer';

describe('LogAnalyzer', () => {

  describe('use isValidLogFileName()', () => {
    test('should return true, if good extendion lowercase.', () => {
      const analyzer = new LogAnalyzer();
      const result = analyzer.isValidLogFileName('filewithbadextension.slf');
      expect(result).toBeTruthy();
    });

    test('should return true, if good extendion uppercase.', () => {
      const analyzer = new LogAnalyzer();
      const result = analyzer.isValidLogFileName('filewithbadextension.SLF');
      expect(result).toBeTruthy();
    });

    // parameterized tests
    test.each([
      ['filewithbadextension.SLF', true],
      ['filewithbadextension.slf', true],
      ['filewithbadextension.foo', false]
    ])('with parameter %s should return %s.', (fileName, expected) => {
      const analyzer = new LogAnalyzer();
      const result = analyzer.isValidLogFileName(fileName);
      expect(result).toBe(expected);
    });
  });
});
