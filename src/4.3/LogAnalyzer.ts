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
        this.email.sendEmail({  // 3.最後再回來修改產品碼到綠燈
          to: 'someone@somewhere.com',
          subject: 'can not log',
          body: e.errorMessage
        });
      }
    }
  }
}

export interface WebService {
  logError(errorMessage: string): void;
}

export interface EmailService {
  sendEmail(emailInfo: EmailInfo): void;
}

export interface EmailInfo {  // 1.重構抽離為新的概念(介面 or 類別) EmailInfo
  to: string;
  subject: string;
  body: string;
}
