export class MemCalculator {
  private _sum = 0;

  add(number: number)  {
    this._sum += number;
  }

  sum() {
    const temp = this._sum;
    this._sum = 0;
    return temp;
  }
}
