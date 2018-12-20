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
        this.webService.write(new ErrorInfo(1000, error.message));
      }
    }
  }
}

export interface Logger {
  logError(errorMessage: string): void;
}

export interface WebService {
  write(message: any): void;
}

export class ErrorInfo extends Error {
  constructor(
    public number: number,
    public message: string
  ) {
    super(message);
  }
}
