// Первое решение
/* let calculator = (function (a, b) {
  return {
    read(x, y) {
      a = x;
      b = y;
    },
    sum() {
      return a + b;
    },
    mul() {
      return a * b;
    }
  };
})(); */

// второе решение
// const calculator = new (function () {
//   let a;
//   let b;
//   this.read = function (x, y) {
//     a = x;
//     b = y;
//   };
//   this.sum = function () {
//     return a + b;
//   };
//   this.mul = function () {
//     return a * b;
//   };
// })();

let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
