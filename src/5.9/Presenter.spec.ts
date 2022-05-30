import { Presenter, Logger, View } from './Presenter';

describe('Presenter', () => {
  describe('created', () => {
    test('call View.render(), when View is loaded', () => {
      const fakeView: View = new View();
      const MockView: jest.Mock<View> = jest.fn<View, []>(() => ({
        errorOccured: jest.fn(fakeView.errorOccured),
        dispatchErrorOccured: jest.fn(fakeView.dispatchErrorOccured)
      } as unknown as View));
      const mockView = new MockView();
      const MockLogger: jest.Mock<Logger> = jest.fn<Logger, []>(() => ({
        logError: jest.fn()
      }));
      const mockLogger = new MockLogger();

      const presenter = new Presenter(mockView, mockLogger);
      mockView.dispatchErrorOccured('fake error');  // 觸發錯誤發生
      expect(mockLogger.logError as jest.Mock<{}>).toHaveBeenCalledWith('fake error'); // 使用模擬物件驗證 log 有被正確呼叫
    });
  });
});
