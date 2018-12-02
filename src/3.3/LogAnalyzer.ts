export class LogAnalyzer {
  isValidLogFileName(fileName: string): boolean {
    const mgr: FileExtensionManager = new FileExtensionManager();
    const isValid = mgr.isValid(fileName);
    return isValid;
  }
}

// 定義介面
export interface IExtensionManager {
  isValid(fileName: string): boolean;
}

// 實作介面
export class FileExtensionManager implements IExtensionManager {
  isValid(fileName: string): boolean {
    if (fileName === null || fileName === '') {
      throw new Error('filname has to be provided');
    }

    const isValid = /\.SLF$/i.test(fileName);
    return isValid;
  }
}
