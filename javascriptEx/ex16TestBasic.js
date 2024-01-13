// // 자바스크립트에서 랜덤으로 값을 가져오기
// console.log(parseInt(Math.random())); // 무작위 1이하의 실수값
// console.log(parseInt(Math.random() * 10)); // 0 ~ 9
// console.log(parseInt(Math.random() * 100)); // 0 ~ 99

// console.log(parseInt(Math.random() * 10 + 1)); // 1 ~ 10

/*
  1. 1 ~ 100 사이의 숫자를 랜덤으로 저장하고 그수가 짝수인지
    홀수인지 출력하는 checkNum 함수를 만든후 호출
*/
function getRandNum(min, max) {
  if (min > max) {
    let temp = min;
    min = max;
    max = min;
  }
  return parseInt(Math.random() * (max - min + 1)) + min;
}

function checkNum(min, max) {
  let ran = parseInt(Math.random() * max + min);
  if (ran % 2 == 0) {
    return `${ran} 짝수`;
  } else {
    return `${ran} 홀수`;
  }
}
/*
  2. 배열에 랜덤으로 (-100 ~ 100 사이의 숫자를 4개를 저장후 전부 홀수인지 검사하는)
    isAllOddNum 함수를 만드시오. 전부 홀수 입니다. 아닙니다.
*/

function isAllOddNum() {
  let number = [0, 0, 0, 0];
  for (idx in number) {
    number[idx] = parseInt(Math.random() * (100 - -100 + 1)) + -100;
  }
  console.log(number, ' 배열');
  //함수 사용
  let cnt = number.reduce((cnt, value) => {
    // console.log(`value = ${value} cnt = ${cnt}`);
    return value % 2 != 0 ? cnt += 1 : cnt;
  }, 0);
  console.log(cnt, '갯수');

  return cnt == number.length ? '모두 홀수입니다.' : '아닙니다.';
}
console.log(checkNum(1, 100));
console.log(isAllOddNum());