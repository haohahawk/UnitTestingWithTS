import { Logger, LogAnalyzer } from './LogAnalyzer';

describe('LogAnlyzer', () => {
  const MockLogger = jest.fn<Logger>(() => ({
    logError: jest.fn()
  }));

  describe('analyze()', () => {
    test('call logger, too short filename.', () => {
      const mockLogger: Logger = new MockLogger();  // 建立模擬物件，在測試最後進行驗證
      const analyzer = new LogAnalyzer(mockLogger);
      analyzer.minNameLength = 6;
      analyzer.analyze('a.txt');
      expect(mockLogger.logError).toHaveBeenCalledWith('Filename too short: a.txt');  // 使用 Jest API 來設定期望結果
    });
  });
});
