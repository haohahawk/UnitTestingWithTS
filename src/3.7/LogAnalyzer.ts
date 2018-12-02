export class LogAnalyzerUsingFactoryMethod {

  constructor() {}

  // 工廠方法，寫死回傳值
  getManager(): IExtensionManager {
    return new FileExtensionManager();
  }

  isValidLogFileName(fileName: string) {
    const isValidExtension = this.getManager().isValid(fileName);
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

export class Path {
  static getFileNameWithoutExtension(fileName: string): string {
    return fileName.replace(/\.[^.]+?$/, '');
  }
}
