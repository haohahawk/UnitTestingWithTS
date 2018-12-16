import { LogAnalyzer, Logger } from './LogAnalyzer';

class FakeLogger implements Logger {
  lastError: string;
  logError(message: string) {
    this.lastError = message;
  }
}

describe('LogAnlyzer', () => {
  describe('analyze()', () => {
    test('call logger, too short filename.', () => {
      const logger = new FakeLogger();  // 建立假物件
      const analyzer = new LogAnalyzer(logger);
      analyzer.minNameLength = 6;
      analyzer.analyze('a.txt');

      // 把假物件當模擬物件來使用並驗證
      const expectContains = /too short/.test(logger.lastError);
      expect(expectContains).toBeTruthy();
    });
  });
});
