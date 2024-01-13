// 접근제어자 - 캡슐화 => private getter setter

// class student(){pricate int id; private String name;}

// 프라이빗은 -> 직접접근이 불가능
class Student {
  static count = 0;
  #id;
  #name;
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
    Student.count += 1;
  }
  static formObject(object){
    if(!!object?.id && !!object?.name){
      return new Student(object.id,object.name);
    }
  }
  static fromList(list){
    if(!Array.isArray(list)){
      return null;
    }
    return new Student(list[0],list[1]);
  }
  get id() {
    return this.#id;
  }
  set id(id) {
    this.#id = id;
  }
  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
}
const stu1 = new Student(2019122104, 'Park');
const stu2 = new Student(2019206028, 'Kim');
const stu3 = new Student(2019153237, 'Lee');

stu1.name = '김진수';
console.log(stu1);