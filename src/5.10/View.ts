export class View {

  private delegateFn: () => void;

  load(delegateFn: () => void): void {
    this.delegateFn = delegateFn;
  }

  doSomethingThatEventuallyFiresThisEvent() {
    this.delegateFn();
  }
}
