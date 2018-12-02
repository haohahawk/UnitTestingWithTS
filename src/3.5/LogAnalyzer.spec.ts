import { LogAnalyzer, IExtensionManager } from './LogAnalyzer';

describe('LogAnalyzer', () => {
  describe('use isValidLogFileName()', () => {
    test('return true, when supported extension.', () => {
      // 準備一個回傳 true 的虛設常式物件
      const myFakeManager = new FakeExtensionManager();
      myFakeManager.willBeValid = true;

      // 注入虛設常式物件
      const log = new LogAnalyzer();
      log.extensionManager = myFakeManager;

      const isValid = log.isValidLogFileName('badname.foo');
      expect(isValid).toBeTruthy();
    });
  });
});

// 定義一個最簡單的虛設常式內容
class FakeExtensionManager implements IExtensionManager {
  willBeValid = false;
  isValid() {
    return this.willBeValid;
  }
}
