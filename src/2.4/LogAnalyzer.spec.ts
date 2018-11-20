import { LogAnalyzer } from './LogAnalyzer';

describe('LogAnalyzer', () => {
  let anlyzer: LogAnalyzer;

  beforeEach(() => {
    anlyzer = new LogAnalyzer();
  });

  describe('use isValidLogFileName()', () => {
    test('should throw Error, if filename is null.', () => {
      const resultFn = () => anlyzer.isValidLogFileName(null);
      expect(resultFn).toThrowError('filname has to be provided');
    });

    test('should throw Error, if filename is empty.', () => {
      const resultFn = () => anlyzer.isValidLogFileName(null);
      expect(resultFn).toThrowError(/^filname has to be provided$/);
    });

  });
});
