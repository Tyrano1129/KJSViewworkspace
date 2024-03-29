// let cat = {
//   kind: '고양이',
//   name: '나비',
//   age: 2,
//   info: function(){
//     console.log(`------${this.kind}------`);
//     console.log(`이름 : ${this.name}`);
//     console.log(`나이 : ${this.age}`);
//   }
// }
// let dog = {
//   kind: '강아지',
//   name: '바둑이',
//   age: 12,
//   info: function(){
//     console.log(`------${this.kind}------`);
//     console.log(`이름 : ${this.name}`);
//     console.log(`나이 : ${this.age}`);
//   }
// }
// let hamster = {
//   kind: '햄스터',
//   name: '햄토리',
//   age: 1,
//   info: function(){
//     console.log(`------${this.kind}------`);
//     console.log(`이름 : ${this.name}`);
//     console.log(`나이 : ${this.age}`);
//   }
// }

// 자바 모든게 클래스다, 자바스크립트 모든게 함수다
// 객체를 생성하는 함수 => 생성자 함수 무조건 첫글자 대문자로 한다
function Pet(kind, name, age) {
  this.kind = kind;
  this.name = name;
  this.age = age;
  this.info = () => {
    console.log(`------${this.kind}------`);
    console.log(`이름 : ${this.name}`);
    console.log(`나이 : ${this.age}`);
  }
  // return this;
}

function test(name) {
  this.name1 = name;
}
let arrFnc = (name, age) => {
  this.name = name;
  this.age = age;
}
// 화살표 함수랑 일반함수의 차이점
// 일반 함수를 통해서 객체생성 => 생성자 함수 내포
// 화살표함수는 생성자 함수를 포함하지 않는다 => 객체생성이 안된다 : 가볍다, 순수 함수기능만 함.
const nabi = new Pet('고양이', '다주', 10);
console.log(nabi);
const tObj = new test('테스트');
console.log(tObj);
// const arrObj = new arrFnc('이름', 100);
// console.log(arrObj);


// 클래스 : 속성(인스턴스 변수) : 행동(메서드 : 함수)
class Pet {
  // Pet(){} 자바는 기본생성자가 있다.
  // kind;
  // name;
  // age;
  constructor(kind, name, age) {
    this.kind = kind;
    this.name = name;
    this.age = age;
  }

  info = () => {
    console.log(`------${this.kind}------`);
    console.log(`이름 : ${this.name}`);
    console.log(`나이 : ${this.age}`);
  }
}

const cat = new Pet('고양이', '다주', 10);
const dog = new Pet('강아지', '다롱', 12);
console.log(cat);
console.log(dog);
cat.info();