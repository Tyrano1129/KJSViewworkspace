// 옵셔널 체이닝 => ES11 (ECMA 2020) 나온 개념

// null, undefiend 차이

console.log(!!null);
console.log(!!undefined);

let item = {
  price: 1
};
console.log(typeof item);
console.log(item['price']);
console.log(item['name']);

// 객체를 동적으로 접근하기.
let cat = {
  name: '나비',
  age: 2
}
// 객체를 요소 동적으로 가져오기
function getValue(obj, key) {
  if (obj[key] === undefined) {
    console.log('키값이 없습니다.');
  }
  return obj[key];
}
// 객체를 요소 동적으로 추가하기
function addKey(obj, key, value) {

  obj[key] = value;
}

// 객체를 요소 동적으로 삭제하기
function removeKey(obj, key) {
  if (!!obj[key]) {
    return '키값이 없습니다.';
  }
  delete obj[key];
}
console.log(cat, 'test');
console.log(getValue(cat, 'name'));
addKey(cat, 'owner', {
  name: '김진수'
});
console.log(cat);
removeKey(cat, 'age');
console.log(cat);

// nullish coalescing operatoer ?? 널리쉬 콜리싱 오퍼레이터 - ES11 (ECMA 2020)
// null, undefined 만 false로 인식한다 0은 true 로 인식 나머지 falsy value는 다 true
// 0은 자동으로  false 값으로 인식하기 때문에 이러한 문제점 : false 아니라고 하고싶은데
// 0은 false 인식
let num = 0;
console.log(num || -1); // num false이기 때문에
console.log(num && -1); // num false이기 때문에
console.log('------------');
console.log(null || '1');