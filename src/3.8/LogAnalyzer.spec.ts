import { LogAnalyzerUsingFactoryMethod, IExtensionManager } from './LogAnalyzer';

describe('LogAnalyzerUsingFactoryMethod', () => {
  describe('use isValidLogFileName()', () => {
    test('return true, when supported extension.', () => {
      const log = new TestableLogAnalyzer();
      log.isSupported = true; // 設定假的結果值

      const isValid = log.isValidLogFileName('goodname.slf');
      expect(isValid).toBeTruthy();
    });
  });
});

class TestableLogAnalyzer extends LogAnalyzerUsingFactoryMethod {

  isSupported: boolean = false;

  constructor() {
    super();
  }

  // 回傳測試程式中所設定的假值
  isValidExtension() {
    return this.isSupported;
  }
}
