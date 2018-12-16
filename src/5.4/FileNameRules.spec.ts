import { FileNameRules } from './FileNameRules';

describe('FileNameRules.isValidLogFileName()', () => {
  test('returns by default works for hard coded argument.', () => {
    const fakeRules: FileNameRules = {
      isValidLogFileName: jest.fn().mockReturnValue(true)
    };
    const actual = fakeRules.isValidLogFileName('anything.txt');
    expect(actual).toBeTruthy();
  });
});
