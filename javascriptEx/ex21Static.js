// 객체끼리 공유하는 자원 // 객체 생성하지 않고 바로 접근
// Student 클래스 만들어서 속성 id , name 만들어주세요 printInfo id와 name 출력되게

// function Student(id,name){static count = 0;}
class Student {
  static count = 0;
  constructor(id, name) {
    this.id = id;
    this.name = name;
    Student.count += 1;
  }
  info = () => {
    console.log(`ID : ${this.id}`);
    console.log(`NAME : ${this.name}`);
  }
  static printCount() {
    console.log(`총학생수 : ${Student.count}명`);
  }
}
const stu1 = new Student(2019122104, 'Park');
const stu2 = new Student(2019206028, 'Kim');
const stu3 = new Student(2019153237, 'Lee');

const stuList = [stu1, stu2, stu3];

for (idx in stuList) {
  stuList[idx].info();
}
Student.printCount();