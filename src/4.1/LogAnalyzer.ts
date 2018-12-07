export class LogAnalyzer {
  constructor(
    private service: WebService
  ) {
  }

  analyze(fileName: string) {
    this.service.logError('Filename too short: ' + fileName);
  }
}

export interface WebService {
  logError(errorMessage: string): void;
}
