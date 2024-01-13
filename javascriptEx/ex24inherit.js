class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log("타베루");
  }
  sleep() {
    console.log("네루");
  }
}

class Teacher extends Person {
  constructor(name, age, techerNo) {
    super(name, age); // new Person(name,age);
    this.teacherNo = techerNo;
  }

  teach() {
    console.log("가르친다");
  }
}

class Student extends Person {
  constructor(name, age, stuNo, grade) {
    super(name, age);
    this.stuNo = stuNo;
    this.grade = grade;
  }

  study() {
    console.log("벤쿄우스루");
  }

  eat() {
    console.log("카쇼우쿠오타베루");
  }
}

const kim = new Person("김씨", 20);
console.log(kim);
const park = new Teacher("박씨", 30, 12341234);
console.log(park);
const lee = new Student("이씨", 15, 20241234, 5);
console.log(lee);

kim.eat();
park.teach();
lee.eat();

console.log(globalThis);
