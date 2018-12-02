export class LogAnalyzerUsingFactoryMethod {

  constructor() {}

  getManager(): IExtensionManager {
    return new FileExtensionManager();
  }

  isValidLogFileName(fileName: string) {
    const isValidExtension = this.isValidExtension(fileName);
    const isValidLenth = this.isValidLenth(fileName);
    return isValidExtension && isValidLenth;
  }

  isValidExtension(fileName: string): boolean {
    const manager = this.getManager();
    return manager.isValid(fileName);  // 回傳真實相依物件的結果
  }

  isValidLenth(fileName: string): boolean {
    const fileNameWithoutExtension = Path.getFileNameWithoutExtension(fileName);
    return fileNameWithoutExtension.length > 5;
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
