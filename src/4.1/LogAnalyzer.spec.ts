import { WebService, LogAnalyzer } from './LogAnalyzer';

describe('LogAnalyzer', () => {
  describe('analyzer', () => {
    test('call WebService, too short filename.', () => {
      const mockService = new FakeWebService();
      const log = new LogAnalyzer(mockService);
      const tooShortFileName = 'abc.ext';

      log.analyze(tooShortFileName);

      expect(mockService.lastError).toEqual('Filename too short: ' + tooShortFileName);
    });
  });
});

class FakeWebService implements WebService {
  lastError: string = null;

  constructor() {
  }

  logError(errorMessage: string) {
    this.lastError = errorMessage;
  }
}
