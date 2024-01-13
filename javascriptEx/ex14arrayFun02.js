// 고차함수 => 콜백함수를 사용한다.

// 콜백함수는 보통 화살표 함수를 많이 쓴다.
let array = [3, 5, 8, 6, 7, 11, 15, 14, 22];

// 데이터를 처음부터 끝까지 한개씩 차례대로 꺼내온다.
// array.forEach(function (n) {
//   console.log(n)
// });

// array.forEach(n =>
//   console.log(n)
// );

array.forEach(n => n = n % 2 == 0 ? console.log(n) : null);

// map() 데이터 셋을 가공해서 변환 시켜준다.
let reult = array.map(x => x * 100);
console.log(reult);

console.log(array);
const cat = {
  name: '나비',
  age: 10
}

function printcat(cat) {
  cat.name = '뚱냥이';
  return cat;
}
console.log(cat);
console.log(printcat(cat));

// filter : 조건식이 있고 true 되는 값만 반환

reult = array.filter(value => value % 2 == 0);
console.log(reult);

reult = array.find(value => value > 10);
console.log(reult);

reult = array.findIndex(value => value > 10);
console.log(reult);

// -- reduce() : 총합

reult = array.reduce((p, n) => p + n, 0); // 두번째 인자값 안주면 디폴트 0
console.log(reult);

// reduce 인자값을 2개를 받는다 (콜백함수(p, n), 시작값)

// n = 3 p = 0; return 3 + 0 => p = 3;
// n = 5, p = 3, return 3 + 5 => p = 8;