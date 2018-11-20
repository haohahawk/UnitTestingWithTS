import { LogAnalyzer } from './LogAnalyzer';

describe('LogAnalyzer', () => {
  test('use isValidLogFileName() should return false, if bad extendion.', () => {
    // Arrange
    const analyzer = new LogAnalyzer();

    // Act
    const result = analyzer.isValidLogFileName('filewithbadextension.foo');

    // Assert
    expect(result).toBeFalsy();
  });
});
