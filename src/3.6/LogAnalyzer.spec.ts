import { LogAnalyzer, IExtensionManager, ExtensionManagerFactory } from './LogAnalyzer';

describe('LogAnalyzer', () => {
  describe('use isValidLogFileName()', () => {
    test('return true, when supported extension.', () => {
      // 為這個測試案例設定虛設常式物件，並注入工廠類別中
      const myFakeManager = new FakeExtensionManager();
      myFakeManager.willBeValid = true;
      ExtensionManagerFactory.setManager(myFakeManager);

      const log = new LogAnalyzer();

      const isValid = log.isValidLogFileName('goodname.slf');
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
