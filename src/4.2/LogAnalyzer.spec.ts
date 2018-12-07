import { WebService, LogAnalyzer, EmailService } from './LogAnalyzer';

describe('LogAnalyzer', () => {
  describe('analyzer', () => {
    test('call WebService, too short filename.', () => {
      const mockService = new FakeWebService();
      mockService.toThrow = new Error('fake error');
      const mockEmail = new FakeEmailService();
      const log = new LogAnalyzer(mockService, mockEmail);
      const tooShortFileName = 'abc.ext';

      log.analyze(tooShortFileName);

      // 驗證模擬物件的互動行為 mockEmail.sendEmail 有沒有被呼叫
      expect(mockEmail.to).toEqual('someone@somewhere.com');
      expect(mockEmail.subject).toEqual('can not log');
      expect(mockEmail.body).toEqual('fake error');
    });
  });
});

class FakeWebService implements WebService {
  toThrow: Error = null;

  constructor() {
  }

  logError(errorMessage: string) {
    if (this.toThrow) {
      throw this.toThrow;
    }
  }
}

class FakeEmailService implements EmailService {
  to: string;
  subject: string;
  body: string;

  sendEmail(to: string, subject: string, body: string) {
    this.to = to;
    this.subject = subject;
    this.body = body;
  }
}
