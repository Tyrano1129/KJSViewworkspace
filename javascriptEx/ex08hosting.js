// 호이스팅이 먼저 실행된다

// 모든 변수 선언문이 코드 최상단으로 이동한것처럼 느껴지게 js 동작을 한다.
// var kim;
// function sayHi() {
//   console.log('hello');
// }

console.log(kim);
var kim;
console.log(kim);

sayHi();

function sayHi() {
  console.log('hello');
}
// let 과 const 도 똑같이 호이스팅이 되지만 선언 전에 출력하면 undefiend 가 뜨는게 아니라 에러를 띄우점, var 은 그냥 실행
// console.log(dog);
// const dog = '바둑이';

// var -> 함수 스코프 영역 가지고 , 호이스팅을 할떄 변수 선언전에 출력하면 undefined 발생
// let, const -> 블록스코프 영역, 변수 선언전에 출력 불가능 -> 에러발생

var i = 99;
for (var i = 1; i < 10; i += 1) {}
console.log(i);

// global 스코프 영역
let x = 10; {
  // local 
  let x = 30;
  console.log(x);
}

let i = 99;
for (let i = 1; i < 10; i += 1) {}
console.log(i);