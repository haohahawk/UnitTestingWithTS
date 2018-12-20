export class Presenter {

  constructor(
    private view: View
  ) {
    this.view.loaded(this.onLoaded.bind(this));
  }

  private onLoaded() {
    this.view.render('Hello World');
  }
}

export class View {

  private observer: (event?: Event) => void;

  loaded(observer: (event?: Event) => void): void {
    this.observer = observer;
  }

  render(text: string): void {
  }

  dispatch(event?: Event) {
    this.observer(event);
  }
}
