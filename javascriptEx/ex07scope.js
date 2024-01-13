// 스코프

let num = 100; {
  let num = 10;
  console.log(num);
}

function test() {
  let z = 100;
  console.log(num);
  console.log(z);
}

console.log('test', num);
test();


// let, const => 블록스코프 : java 랑 동일하다.
// var => 함수 스코프 가지고 있다. : java 17 버전부터 var 자료형 타입 쓸수있다 : 자료형 타입 무관하게 사용가능

function printTest() {
  var test1 = 100;
}
console.log(test1);