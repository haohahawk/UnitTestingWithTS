export class LogAnalyzer {
  isValidLogFileName(fileName: string): boolean {
    if (/\.SLF$/.test(fileName)) {  // error logic
      return false;
    }
    return true;
  }
}
