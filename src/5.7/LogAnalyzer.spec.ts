import { Logger, WebService, LogAnalyzer, ErrorInfo } from './LogAnalyzer';

describe('LogAnalyze', () => {
  let FakeWebService: jest.Mock<WebService>;
  let FakeLogger: jest.Mock<Logger>;
  describe('analyze()', () => {
    test('calls WebService, looger throws', () => {
      FakeLogger = jest.fn<Logger, []>(() => ({
        logError() {
          throw new Error('fake exception');
        }
      }));
      const stubLogger = new FakeLogger();
      FakeWebService = jest.fn<WebService, []>(() => ({
        write: jest.fn()
      }));
      const mockWebService = new FakeWebService();

      const logAnalyzer = new LogAnalyzer(stubLogger, mockWebService);
      logAnalyzer.minNameLength = 10;
      const tooShortFileName = 'abc.txt';

      logAnalyzer.analyze(tooShortFileName);

      const expectError = new ErrorInfo(1000, 'fake exception');  // 建立期望接收到的物件
      expect((mockWebService.write as jest.Mock<{}>).mock.calls[0][0])  // 驗證是否收到值相等的物件
        .toEqual(expectError);
    });
  });
});
