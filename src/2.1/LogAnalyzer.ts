export class LogAnalyzer {
  isValidLogFileName(fileName: string): boolean {
    if (!/\.SLF$/i.test(fileName)) {
      return false;
    }
    return true;
  }
}
