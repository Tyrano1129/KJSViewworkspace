//  비교연산자
// == != > < <= >=

let num = 10;

// 자바랑 동일한 부분
console.log(num == 10);
console.log(num != 10);
console.log(num > 10);
console.log(num < 10);
console.log(num >= 10);
console.log(num <= 10);

// 자바스크립트에만 있는것
console.log('----------------');
console.log(num == '10'); //true
console.log(num === '10') //값과 type을 비교한다.
console.log(true == 'true'); // boolean 값은 안된다.

let number = 10;
let result = 1;
console.log(result);

result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);

// 형변환

// + : 1) 산술연산자로써 더하기  , 2) 연결연산자 3) 부호로써 + 사용된다.

number = '10';
console.log(number + 10);
console.log(+number + 10);
console.log(typeof + number);
console.log(typeof number);

let test = 10;
console.log(test + '' + 10);
console.log(typeof (test + ''));

let test1 = test + "";
console.log(typeof test1);

test = (1000).toString();
console.log(typeof test);
console.log(test + 1000);
let test2 = (true).toString();
console.log('10' !== 10);
console.log(test2 == true);

// 숫자를 문자로 바꾸는것
let num1 = num + ''; // 묵시적(암묵적) 형변환
num1 = num1.toString(); // 명시적 형변환

//문자를 숫자로 바꿔주는것

let num2 = '10';
num2 = +num2; // 문자 앞에다가 부호 붙이근ㄴ거
num2 = num2 * 1;
num2 = parseInt(num2);

// 단축 평가 : || 모든 비교연산자 중에 하나로도 참이면 참 => 한개가 참이면 나머지 비교 X 건너뛰기
//          : && 모든 비교연산자가 중에 하나로도 거짓 이면 거짓 => 한개가 거짓이면 나머지 기죠 X 건너뛰기

// 멈춘 시점에 있는 값만 출력함

console.log(true && '김진수');
console.log(false && '김진수');

console.log(true || '김진수');
console.log(false || '김진수');