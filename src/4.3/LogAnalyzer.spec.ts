import { WebService, LogAnalyzer, EmailService, EmailInfo } from './LogAnalyzer';

describe('LogAnalyzer', () => {
  describe('analyzer', () => {
    test('call WebService, too short filename.', () => {
      const mockService = new FakeWebService();
      mockService.toThrow = new Error('fake error');
      const mockEmail = new FakeEmailService();
      const log = new LogAnalyzer(mockService, mockEmail);
      const tooShortFileName = 'abc.ext';

      log.analyze(tooShortFileName);
      const expectEmail = { // 2.期望物件
        to: 'someone@somewhere.com',
        subject: 'can not log',
        body: 'fake error'
      };
      expect(mockEmail.email).toEqual(expectEmail); // 2.驗證實際物件上所有的屬性質是否與期望物件相同
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
  email: EmailInfo;

  sendEmail(emailInfo: EmailInfo) { // 2.調整模擬物件
    this.email = emailInfo;
  }
}
