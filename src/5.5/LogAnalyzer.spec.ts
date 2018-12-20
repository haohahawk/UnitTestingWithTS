import { Logger, WebService, LogAnalyzer } from './LogAnalyzer';

describe('LogAnalyze', () => {
  describe('analyze()', () => {
    test('calls WebService, looger throws', () => {
      const mockWebService: FakeWebService = new FakeWebService();
      const stubLogger: FakeLogger = new FakeLogger();
      stubLogger.willThrow = new Error('fake exception');

      const logAnalyzer = new LogAnalyzer(stubLogger, mockWebService);
      logAnalyzer.minNameLength = 8;
      const tooShortFileName = 'abc.txt';

      logAnalyzer.analyze(tooShortFileName);
      expect(mockWebService.messageToWebService).toMatch(/fake exception/);
    });
  });
});

class FakeLogger implements Logger {  // 用虛擬常式物件來模擬 logger 拋出例外
  willThrow: Error;
  logggerGotMessage: string;

  logError(message: string) {
    this.logggerGotMessage = message;
    if (this.willThrow !== null) {
      throw this.willThrow;
    }
  }
}

class FakeWebService implements WebService {  // 用模擬物件來當作一個假的 web 服務
  messageToWebService: string;
  write(message: string) {
    this.messageToWebService = message;
  }
}

