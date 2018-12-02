import { LogAnalyzerUsingFactoryMethod, IExtensionManager } from './LogAnalyzer';

describe('LogAnalyzerUsingFactoryMethod', () => {
  describe('use isValidLogFileName()', () => {
    test('return true, when supported extension.', () => {
      const stubExtensionManager = new FakeExtensionManager();
      stubExtensionManager.willBeValid = true;

      // 初始化繼承自被測試類別的衍生類別物件
      const log = new TestableLogAnalyzer(stubExtensionManager);

      const isValid = log.isValidLogFileName('goodname.slf');
      expect(isValid).toBeTruthy();
    });
  });
});

class TestableLogAnalyzer extends LogAnalyzerUsingFactoryMethod {

  manager: IExtensionManager;

  constructor(mgr: IExtensionManager) {
    super();

    this.manager = mgr;
  }

  // 複寫父類別的方法，回傳指定的值
  getManager(): IExtensionManager {
    return this.manager;
  }
}

// 定義一個最簡單的虛設常式內容
class FakeExtensionManager implements IExtensionManager {
  willBeValid = false;
  isValid() {
    return this.willBeValid;
  }
}
