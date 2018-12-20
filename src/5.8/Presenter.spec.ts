import { Presenter, View } from './Presenter';

describe('Presenter', () => {
  describe('created', () => {
    test('call View.render(), when View is loaded', () => {
      const fakeView: View = new View();
      const MockView: jest.Mock<View> = jest.fn<View>(() => ({
        loaded: jest.fn(fakeView.loaded),
        render: jest.fn(fakeView.render),
        dispatch: jest.fn(fakeView.dispatch)
      }));
      const mockView = new MockView();

      const presenter = new Presenter(mockView);
      mockView.dispatch(null);  // 觸發事件
      expect(mockView.render as jest.Mock<{}>).toHaveBeenCalledWith('Hello World'); // 驗證在測試中物件的 render 方法是否被呼叫
    });
  });
});
