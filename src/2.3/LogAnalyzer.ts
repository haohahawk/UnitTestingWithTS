export class LogAnalyzer {
  isValidLogFileName(fileName: string): boolean {
    if (fileName === null || fileName === '') {
      throw new Error('filname has to be provided');
    }

    if (!/\.SLF$/i.test(fileName)) {
      return false;
    }
    return true;
  }
}
