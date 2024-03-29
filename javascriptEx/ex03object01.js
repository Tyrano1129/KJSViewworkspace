// const 하는 것은 상수이지만
// 참조변수가 상수면 새로운 주소갑스로 변경은 불가능하지만 안에 있는 값은 변경가능하다.
// 리터럴 객체
const dog = {
  name: "바둑이",
  age: 3
}

// 주속값이 고정되어있음.
// dog = {
//   name: "흰둥이"
// }

console.log(dog);

const otherDog = dog;
otherDog.owenr = {
  name: "제임스",
  age: 34
};
console.log(dog);
console.log(otherDog);

console.log('---------------');
// 깊은 복사
const anotherDog = {
  ...dog
};
otherDog.name = "흰둥이";
anotherDog.owenr.name = "존";
console.log(dog);
console.log(otherDog);
console.log(anotherDog);