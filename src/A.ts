import { B } from "./B";

export class A {
  b: B;
  constructor() {
    this.b = new B();
  }
}
