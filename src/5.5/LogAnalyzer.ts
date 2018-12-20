export class LogAnalyzer {
  constructor(
    private logger: Logger,
    private webService: WebService,
  ) { }

  minNameLength: number;
  analyze(filename: string) {
    if (filename.length < this.minNameLength) {
      try {
        this.logger.logError(`Filename too short: ${filename}`);
      } catch (error) {
        this.webService.write('Error From Logger: ' + error);
      }
    }
  }
}

export interface Logger {
  logError(errorMessage: string): void;
}

export interface WebService {
  write(message: string): void;
}
