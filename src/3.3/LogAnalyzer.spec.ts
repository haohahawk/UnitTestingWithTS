import { LogAnalyzer, IExtensionManager } from './LogAnalyzer';

describe('LogAnalyzer', () => {
  describe('use isValidLogFileName()', () => {
    test('return true, when supported extension.', () => {
      const log = new LogAnalyzer();
      const isValid = log.isValidLogFileName('short.ext');
      expect(isValid).toBeTruthy(); // 會報錯，因尚未實裝 AlwayVaildFakeFileExtensionManager
    });
  });
});

// 實作 IExtensionManager 介面，準備一個總是回傳 true 的簡單虛設常式程式碼
class AlwayVaildFakeFileExtensionManager implements IExtensionManager {
  isValid() {
    return true;
  }
}
