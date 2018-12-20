export class LogAnalyzer {

  minNameLength: number;

  constructor(
    public service: Logger,
  ) {
  }

  analyze(fileName: string) {
    if (fileName.length < this.minNameLength) {
      this.service.logError('Filename too short: ' + fileName);
    }
  }
}

export interface Logger {
  logError(errorMessage: string): void;
}
