interface ComplicatedInterface {
  method1(a: string, b: string, c: boolean, x: number, o: Object): void;
  method2(b: string, c: boolean, x: number, o: Object): void;
  method3(c: boolean, x: number, o: Object): void;
}

class MyTestableComplicatedInterface implements ComplicatedInterface {
  meth1_a: string;  // line 8 ~ 19 手工撰寫笨拙的語句
  meth1_b: string;
  meth2_b: string;
  meth1_c: boolean;
  meth2_c: boolean;
  meth3_c: boolean;
  meth1_x: number;
  meth2_x: number;
  meth3_x: number;
  meth1_o: Object;
  meth2_o: Object;
  meth3_o: Object;

  method1(a: string, b: string, c: boolean, x: number, o: Object): void {
    this.meth1_a = a;
    this.meth1_b = b;
    this.meth1_c = c;
    this.meth1_x = x;
    this.meth1_o = o;
  }

  method2(b: string, c: boolean, x: number, o: Object): void {
    this.meth2_b = b;
    this.meth2_c = c;
    this.meth2_x = x;
    this.meth2_o = o;
  }

  method3(c: boolean, x: number, o: Object): void {
    this.meth2_c = c;
    this.meth2_x = x;
    this.meth2_o = o;
  }
}
