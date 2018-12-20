import { View } from './View';

describe('View', () => {
  describe('doSomethingThatEventuallyFiresThisEvent()', () => {
    test('Event firing manual', () => {
      let loadFired = false;
      const view = new View();
      const delegateFn = () => {
        loadFired = true;
      };
      view.load(delegateFn);

      view.doSomethingThatEventuallyFiresThisEvent();
      expect(loadFired).toBeTruthy();
    });
  });
});
