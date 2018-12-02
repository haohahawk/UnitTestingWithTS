export class LogAnalyzer {
  isValidLogFileName(fileName: string): boolean {
    const mgr: FileExtensionManager = new FileExtensionManager();

    // 使用被擷取出來的類別
    const isValid = mgr.isValid(fileName);
    return isValid;
  }
}

// 定義被擷取出來的類別
export class FileExtensionManager {
  isValid(fileName: string): boolean {
    if (fileName === null || fileName === '') {
      throw new Error('filname has to be provided');
    }

    const isValid = /\.SLF$/i.test(fileName);
    return isValid;
  }
}
