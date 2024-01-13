// 코드를 DRY 하게 짜라
// D : don't R : reat : y : yourself ==> 반복되는 코드는 함수로 만들어서 재사용해라


function printArray(start, end) {
  if (isNaN(start) || isNaN(end)) {
    return '숫자를 입력하세요';
  }
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  let result = "";
  for (let i = start; i <= end; i += 1) {
    result += i + " ";
  }
  return result;
}

console.log(printArray(1, 5));
console.log(printArray(6, 15));
console.log(printArray(15, 4));
console.log(printArray(15, 'test'));