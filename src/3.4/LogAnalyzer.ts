export class LogAnalyzer {

  constructor(
    private manager: IExtensionManager,  // 定義可被測試程式使用的建構函式
  ) {
  }

  isValidLogFileName(fileName: string): boolean {
    const isValid = this.manager.isValid(fileName);
    return isValid;
  }
}

export class FileExtensionManager {
  isValid(fileName: string): boolean {
    if (fileName === null || fileName === '') {
      throw new Error('filname has to be provided');
    }

    const isValid = /\.SLF$/i.test(fileName);
    return isValid;
  }
}

export interface IExtensionManager {
  isValid(fileName: string): boolean;
}
