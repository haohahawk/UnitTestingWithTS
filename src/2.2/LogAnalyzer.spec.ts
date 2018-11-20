import { LogAnalyzer } from './LogAnalyzer';

describe('LogAnalyzer', () => {
  let m_anlyzer: LogAnalyzer = null;

  beforeEach(() => {
    m_anlyzer = new LogAnalyzer();
  });

  describe('use isValidLogFileName()', () => {
    test('should return true, if valid file lowercased.', () => {
      const result = m_anlyzer.isValidLogFileName('whatever.slf');
      expect(result).toBeTruthy();
    });

    test('should return true, if valid file uppercased.', () => {
      const result = m_anlyzer.isValidLogFileName('whatever.SLF');
      expect(result).toBeTruthy();
    });
  });

  afterEach(() => {
    m_anlyzer = null; // An anti-pattern, you don't have to do this.
  });
});
