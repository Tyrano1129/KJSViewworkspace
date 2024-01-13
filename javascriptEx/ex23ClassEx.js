// Counter 라는 클래스를 만들고 value 변수를 캡슐화 하기
// public increase() 메서드 통해서 value 값을 증가시키기
// 예외조건 set 통해서 value 수정할때 음수값은 들어가지 않게 설정
// 음수 들어오면 기본값 0으로 회귀

class Counter {
  #value;
  constructor(value) {
    if (value <= 0 || isNaN(value)) {
      console.log(`${value}는 0 이상이여야 합니다.`);
      return;
    }
    this.#value = value;
  }
  increase() {
    this.#value += 1;
  }
  get value() {
    return this.#value;
  }
  set value(num) {
    this.#value = num <= 0 ? 0 : num;
  }
}

const conter1 = new Counter(-100);
const conter = new Counter(5);
console.log(conter);
console.log(conter.value);
conter.increase();
conter.increase();
conter.increase();
console.log(conter.value);

conter.value = -100;
console.log(conter.value);
