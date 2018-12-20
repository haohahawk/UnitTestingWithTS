export class Presenter {

  constructor(
    private view: View,
    private logger: Logger,
  ) {
    this.view.errorOccured(this.errorObserver.bind(this));
  }

  private errorObserver(message: string) {
    this.logger.logError(message);
  }
}

export interface Logger {
  logError(errorMessage: string): void;
}

export class View {

  private errorObserver: (message: string) => void;

  errorOccured(observer: (message: string) => void): void {
    this.errorObserver = observer;
  }

  dispatchErrorOccured(message: string) {
    this.errorObserver(message);
  }
}
