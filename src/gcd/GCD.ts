export default class GCD {
  getGCDGeneral(a: number, b: number): number {
    let j: number;

    if (a < b) j = a;
    else j = b;

    for (let i = j; i > 0; i--) {
      if (a % i === 0 && b % i === 0) return i;
    }
    return 1;
  }
}
