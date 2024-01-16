let cat = {
  kind: "고양이",
  age: 5,
};
let dog = {
  kind: "개",
  age: 4,
};
let rabbit = {
  kind: "토끼",
  age: 0.5,
};
let hamster = {
  kind: "햄스터",
  age: 1,
  eat: function () {
    console.log("해바라기씨를 먹는다.");
  },
};

function test() {}

let pets = [cat, dog, rabbit, hamster, cat];

pets.forEach((obj) => console.log(obj));

//1. 동물의 kind 가 개 인것을 찾아라
let result = pets.filter((kind) => kind.kind === "개");
console.log(result);
//2. 동물의 kind 가 고양이 인것만 빼서 배열로 만들어라
result = pets.filter((kind) => kind.kind !== "고양이");
console.log(result);
//3. 총 동물의 평균나이 구해라
result = pets.reduce((p, n) => p + n.age, 0);
console.log(result / pets.length);
//4. 동물 나이순으로 내림차순 정렬
result = [...pets]; // 깊은복사 => 구조분해를 해서 가져온다.
result.sort((a, b) => (a.age < b.age ? 1 : -1));
console.log(result);

//1. 동물의 kind 가 개 인것을 찾아라
let res = pets.filter((pet) => pet.kind === "개");
console.log(res);

//2. 동물의 kind 가 고양이 인것만 빼서 배열로 만들어라
res = pets.filter((pet) => pet.kind !== "고양이");
console.log(res);
//3. 총 동물의 평균나이 구해라
res = pets.reduce((p, n) => p + n.age, 0) / pets.length;
console.log(res);
//4. 동물 나이순으로 내림차순 정렬
res = pets.sort((a, b) => (a.age < b.age ? -1 : 1));
console.log(res);
