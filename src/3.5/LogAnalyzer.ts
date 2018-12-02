export class LogAnalyzer {
  // 允許透過屬性來注入相依物件
  private manager: IExtensionManager = null;
  get extensionManager(): IExtensionManager {
    return this.manager;
  }
  set extensionManager(value: IExtensionManager) {
    this.manager = value;
  }

  isValidLogFileName(fileName: string): boolean {
    const isValid = this.manager.isValid(fileName);
    return isValid;
  }
}

export interface IExtensionManager {
  isValid(fileName: string): boolean;
}

export class FileExtensionManager implements IExtensionManager {
  isValid(fileName: string): boolean {
    if (fileName === null || fileName === '') {
      throw new Error('filname has to be provided');
    }

    const isValid = /\.SLF$/i.test(fileName);
    return isValid;
  }
}
