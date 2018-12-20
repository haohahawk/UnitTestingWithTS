import { Logger, WebService, LogAnalyzer } from './LogAnalyzer';

describe('LogAnalyze', () => {
  let FakeWebService: jest.Mock<WebService>;
  let FakeLogger: jest.Mock<Logger>;
  describe('analyze()', () => {
    test('calls WebService, looger throws', () => {
      FakeLogger = jest.fn<Logger>(() => ({
        logError() {  // 不論輸入任何參數，模擬拋出例外的行為
          throw new Error('fake exception');
        }
      }));
      const stubLogger = new FakeLogger();
      FakeWebService = jest.fn<WebService>(() => ({
        write: jest.fn()
      }));
      const mockWebService = new FakeWebService();

      const logAnalyzer = new LogAnalyzer(stubLogger, mockWebService);
      logAnalyzer.minNameLength = 8;
      const tooShortFileName = 'abc.txt';

      logAnalyzer.analyze(tooShortFileName);

      // 確認 web 服務的模擬物件有被正確呼叫，
      // 而且傳入的字串參數包含了 fake exception 的內容
      expect((mockWebService.write as jest.Mock<{}>).mock.calls[0][0])
        .toMatch(/fake expection/);
    });
  });
});
