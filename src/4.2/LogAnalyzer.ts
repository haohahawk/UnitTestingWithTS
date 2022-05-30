export class LogAnalyzer {
  constructor(
    public service: WebService,
    public email: EmailService
  ) {
  }

  analyze(fileName: string) {
    if (fileName.length < 8) {
      try {
        this.service.logError('Filename too short: ' + fileName);
      } catch (e) {
        this.email.sendEmail('someone@somewhere.com', 'can not log', (e as Error).message);
      }
    }
  }
}

export interface WebService {
  logError(errorMessage: string): void;
}

export interface EmailService {
  sendEmail(to: string, subject: string, body: string): void;
}
