// let callAge;

// 함수의 표현식 : 무명 함수랑 셋트로 온다
let callName = function printName(name) {
  console.log('이름은', name);
}
// printName('박연미'); : 안됨
callName('김진수');

// 주의! 함수의 표현식은 변수의 값으로 함수가 존재하기 때문에 함수 호이스팅이 안된다.

let callAge = function (age) {
  console.log('나이는', age);
}
callAge(10);
// new Function()
function addNumber(x, y = 10) {
  console.log(arguments); // 인자값들을 배열로 넣어주는애 -> 배열은 아님
  console.log((arguments instanceof Array)); // false

  console.log(arguments.length);
  console.log(arguments[0]);
  arguments[0] = 100;
  return x + y;
}
console.log(addNumber(10, 20));
// console.log(addNumber(1));
// console.log(addNumber(1, 2, 3, 4, 5));

// console.log([1234] instanceof Array); // 배열임

// console.log(this.isNaN()); // window(최상위 객체) 자바스크립트 엔진, node.js 최상위 객체(global)

// 화살표 함수는 function() 키워드가 생략 -> 생성자함수로 사용을 못한다. : 가볍다
// 화살표 함수도 무명함수();
let minus = (a, b) => {
  // console.log(arguments); -> 생성자 함수에서만 있다.
  return a - b;
};
let multifly = (a, b) => a * b;

minus(10, 20);

// 자바스크립트에서 함수는 값으로 사용 할 수 있다.
let addAll = x => y => z => `x:${x} y: ${y} z: ${z} `
console.log(addAll(1)(2)(3));

function addTest() {
  return function (y) {
    return function (z) {
      return `x${x} y: ${y} z: ${z}`;
    }
  }
}
console.log(minus instanceof Object);
// 즉시 실행 함수

(function (x, y) {
  console.log(x + y);
})(10, 20);