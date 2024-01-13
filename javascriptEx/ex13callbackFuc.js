// 콜백함수 callback() : 나중에 부른다. : 함수를 호출하는 주체를 남(다른 함수)에게 권한을 준다.

function sayHi(name) {
  console.log('hellow~~', name, 'nice meet you !');

}

// sayHi();

function intrdusce(lastName, firstName, callback) {
  let fullName = lastName + firstName;
  callback(fullName);
}

intrdusce('박', '연미', sayHi);

let array = [3, 5, 8, 6, 7, 11, 15, 14, 22];

let printAll = function (n) {
  console.log(n);
}

// array.forEach(printAll);