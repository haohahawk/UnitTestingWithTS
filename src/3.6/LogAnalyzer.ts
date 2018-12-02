export class LogAnalyzer {

  private manager: IExtensionManager = null;

  constructor(
  ) {
    // 在產品碼中使用工廠類別
    this.manager = ExtensionManagerFactory.create();
  }

  isValidLogFileName(fileName: string): boolean {
    const isValidExtension = this.manager.isValid(fileName);
    const isValidLenth = Path.getFileNameWithoutExtension(fileName).length > 5;
    return isValidExtension && isValidLenth;
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

export class ExtensionManagerFactory {
  static customManager: IExtensionManager = null;

  static create(): IExtensionManager {
    if (this.customManager) {
      return this.customManager;
    } else {
      return new FileExtensionManager();
    }
  }

  static setManager(mgr: IExtensionManager) {
    this.customManager = mgr;
  }
}

export class Path {
  static getFileNameWithoutExtension(fileName: string): string {
    return fileName.replace(/\.[^.]+?$/, '');
  }
}
