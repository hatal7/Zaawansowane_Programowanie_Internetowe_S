// // // // type money = number;
// // // // type Person = {
// // // //   firstName: string;
// // // //   lastName: string;
// // // //   age?: number;
// // // // };
// // // // type PersonalInfo = {
// // // //   dateOfBirth: Date;
// // // //   occupation: string;
// // // // };
// // // // type PersonWithPersonalInfo = Person & PersonalInfo;
// // // // type AllPersonData = Person | PersonWithPersonalInfo;
// // // // function hello() {
// // // //   console.log("Witaj w swiecie Typescript.");
// // // // }
// // // // hello();
// // // // let obj: any = 12;
// // // // obj = "Ala ma kota";
// // // // // console.log(obj)
// // // // let person = {
// // // //   firstName: "Ala",
// // // //   lastName: "Kot",
// // // // };
// // // // let person2: PersonWithPersonalInfo;
// // // // function print(obj: Person) {
// // // //   if (obj.age) {
// // // //     console.log(`${obj.firstName} ${obj.lastName} ${obj.age}`);
// // // //   } else {
// // // //     console.log(`${obj.firstName} ${obj.lastName}`);
// // // //   }
// // // // }
// // // // // print(person)
// // // // // print({ lastName: "Kot2", firstName:"Ala2", age: 21});
// // // // //
// // // // function printPerson(person: Person | PersonWithPersonalInfo) {
// // // //   console.log(`${person.firstName} ${person.lastName} ${person.age}`);
// // // // }
// // // // let personWithPersonalInfo = {
// // // //   firstName: "Ala",
// // // //   lastName: "Kot",
// // // //   dateOfBirth: Date.parse("12-12-2000"),
// // // //   occupation: "nauczyciel",
// // // // };
// // // // printPerson(person);
// // // // printPerson(personWithPersonalInfo);
// // // // function printId(id: number | string) {
// // // //   if (typeof id === "string") {
// // // //     // In this branch, id is of type ’string’
// // // //     console.log(id.toUpperCase());
// // // //   } else {
// // // //     // Here, id is of type ’number’
// // // //     console.log(id);
// // // //   }
// // // // }
// // // // printId(52);
// // // // printId("tes");
// // // // class Book {
// // // //   constructor(public title: string, public numberOfPages: number) {}
// // // // }
// // // // let book: Book = new Book("Pan Tadeusz", 120);
// // // // console.log(book instanceof Book);
// // // // class Article {
// // // //   constructor(public title: string, public volume: number) {}
// // // // }
// // // // type Source = Book | Article;
// // // // function printSource(source: Source) {
// // // //   if (source instanceof Book) {
// // // //     //tutaj source posiada wszystkie wlasciwosci typu Book
// // // //   } else {
// // // //     //tutaj source posiada wszystkie wlasciwosci typu Article
// // // //   }
// // // // }
// // // // function printPerson2(person: AllPersonData) {
// // // //   console.log(`${person.firstName} ${person.lastName} ${person.age}`);
// // // //   if ("occupation" in person) {
// // // //     //tutaj widoczne sa wszystkie wlasciwosci typu PersonWithPersonalInfo
// // // //   } else {
// // // //     //tutaj widoczne sa wszystkie wlasciwosci typu Person
// // // //   }
// // // // }
// // // // function isPersonWithPersonalInfo(person: AllPersonData): person is PersonWithPersonalInfo {
// // // //   return (person as PersonWithPersonalInfo) !== undefined;
// // // // }
// // // // function printPerson3(person: AllPersonData) {
// // // //   console.log(`${person.firstName} ${person.lastName} ${person.age}`);
// // // //   if (isPersonWithPersonalInfo(person)) {
// // // //   } else {
// // // //   }
// // // // }
// // // // printPerson3(personWithPersonalInfo);
// // // // let listOfNames = ["Ala", "Adam", "Ela", "Kamila", "Szymon"];
// // // // let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// // // // listOfNames.forEach(o => console.log(o));
// // // // numbers.forEach(o => console.log(o));
// // // // function log(value: string): void;
// // // // function log(value: number): void;
// // // // function log(value: string, option: any): void;
// // // // function log(value: Person): void;
// // // // function log(value: any, option?: any) {
// // // //   console.log(value);
// // // // }
// // // // log();
// // // class Person {
// // //   private _firstName: string;
// // //   private _lastName: string;
// // //   private _age: number;
// // //   constructor(firstName: string, lastName: string, age: number) {
// // //     this._firstName = firstName;
// // //     this._lastName = lastName;
// // //     this._age = age;
// // //   }
// // //   get age(): number {
// // //     return this._age;
// // //   }
// // //   set age(value: number) {
// // //     this._age = value;
// // //   }
// // //   get firstName(): string {
// // //     return this._firstName;
// // //   }
// // //   middleName() {
// // //     return this._firstName + " " + this._lastName;
// // //   }
// // // }
// // // let p1: Person = new Person("Adam", "Nowak", 22);
// // // class Person2 {
// // //   constructor(
// // //     private _firstName: string,
// // //     private _lastName: string,
// // //     private _age: number
// // //   ) {}
// // //   get age(): number {
// // //     return this._age;
// // //   }
// // //   set age(value: number) {
// // //     this._age = value;
// // //   }
// // //   get firstName(): string {
// // //     return this._firstName;
// // //   }
// // //   middleName() {
// // //     return this._firstName + " " + this._lastName;
// // //   }
// // // }
// // // let p2: Person2 = new Person2("Adam2", "Nowak2", 222);
// // // console.log(p2.firstName);
// // // console.log(p2.middleName());
// // // class Student extends Person2 {
// // //   private indexNo: number;
// // //   private yearOfStudy: number;
// // //   constructor(
// // //     firstName: string,
// // //     lastName: string,
// // //     age: number,
// // //     indexNo: number,
// // //     yearOfStudy: number
// // //   ) {
// // //     super(firstName, lastName, age);
// // //     this.indexNo = indexNo;
// // //     this.yearOfStudy = yearOfStudy;
// // //   }
// // // }
// // // interface IPerson {
// // //   firstName: string;
// // //   lastName: string;
// // //   age: number;
// // // }
// // // class Person3 implements IPerson {
// // //   firstName: string;
// // //   lastName: string;
// // //   age: number;
// // //   constructor(firstName: string, lastName: string, age: number) {
// // //     this.firstName = firstName;
// // //     this.lastName = lastName;
// // //     this.age = age;
// // //   }
// // //   toString(): string {
// // //     return `${this.firstName} ${this.lastName} ${this.age}`;
// // //   }
// // // }
// // // function logPerson(person: IPerson) {
// // //   console.log(person.firstName + " " + person.age);
// // // }
// // // let person: IPerson = new Person3("Ala", "Kot", 34);
// // // logPerson(person);
// // // logPerson({ firstName: "Ala", lastName: "Kowalska", age: 34 });
// // // logPerson({
// // //   firstName: "Ala",
// // //   lastName: "Kowalska",
// // //   age: 34,
// // //   // email: "kowalska@przyklad.pl",
// // // });
// // // class Person4 {
// // //   firstName: string;
// // //   lastName: string;
// // //   age: number;
// // //   constructor(firstName: string, lastName: string, age: number) {
// // //     this.firstName = firstName;
// // //     this.lastName = lastName;
// // //     this.age = age;
// // //   }
// // //   toString(): string {
// // //     return `${this.firstName} ${this.lastName} ${this.age}`;
// // //   }
// // // }
// // // function someFunction(param?: Person4 | null) {
// // //   console.log("Wyświetlam: " + param?.firstName);
// // // }
// // // someFunction({ firstName: "Test", lastName: "testowy", age: 44 });
// // // someFunction(null);
// // // someFunction(undefined);
// // const firstDecorator = (constructor: Function) => {
// //   console.log("jestem dekoratorem");
// // };
// // @firstDecorator
// // class Person {
// //   firstName: string;
// //   lastName: string;
// //   age: number = 23;
// //   constructor(firstName: string, lastName: string) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //   }
// // }
// // let debug = (constr: Function) => {
// //   Object.getOwnPropertyNames(constr.prototype)
// //     .filter((name) => typeof (constr.prototype as any)[name] == "function")
// //     .forEach((name) => {
// //       let fun = (constr.prototype as any)[name];
// //       (constr.prototype as any)[name] = function (...args: []) {
// //         console.log("CALL " + name);
// //         return fun.apply(this, args);
// //       };
// //     });
// // };
// // class Person {
// //   __firstName!: string;
// //   lastName: string;
// //   __age!: number;
// //   get firstName(): string {
// //     return this.__firstName;
// //   }
// //   set firstName(value: string) {
// //     if (value.length === 0) throw new Error("Imię nie może być puste");
// //     else this.__firstName = value;
// //   }
// //   get age(): number {
// //     return this.__age;
// //   }
// //   set age(value: number) {
// //     if (value <= 18) throw new Error("Tylko osoby pełnoletnie");
// //     else this.__age = value;
// //   }
// //   constructor(firstName: string, lastName: string, age: number) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.age = age;
// //   }
// // }
// // let person = new Person("Ewa", "Nowak", 23);
// // person.firstName = "";
// // person.age = 18;
// // function required(target: object, name: string) {
// //   Object.defineProperty(target, name, {
// //     get: function () {
// //       return this[`__${name}`];
// //     },
// //     set: function (value?: string) {
// //       if (value === null || value === undefined || value.length === 0)
// //         throw new Error(`${name} nie może być puste`);
// //       this[`__${name}`] = value;
// //     },
// //   });
// // }
// // function fullAge(target: object, name: string) {
// //   Object.defineProperty(target, name, {
// //     get: function () {
// //       return this[`__${name}`];
// //     },
// //     set: function (value: number) {
// //       if (value < 18) throw new Error("Tylko osoby pełnoletnie");
// //       this[`__${name}`] = value;
// //     },
// //   });
// // }
// // class PersonWithDecorators {
// //   @required
// //   firstName: string;
// //   lastName: string;
// //   @fullAge
// //   age: number;
// //   constructor(firstName: string, lastName: string, age: number) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.age = age;
// //   }
// // }
// // let person2 = new Person("Ewa", "Nowak", 23);
// // person.firstName = "";
// // person.age = 18;
// function validate<T>(
//   conditions: { validator: (param: T) => boolean; message: string }[]
// ): PropertyDecorator {
//   return function (target: object, name: string | symbol) {
//     Object.defineProperty(target, name, {
//       get: function () {
//         return this[`__${name.toString()}`];
//       },
//       set: function (value: T) {
//         for (let condition of conditions) {
//           if (!condition.validator(value)) throw new Error(condition.message);
//         }
//         this[`__${name.toString()}`] = value;
//       },
//     });
//   };
// }
// class PersonWithValidator {
//   @required("Pole imię nie może być puste") firstName: string;
//   lastName: string;
//   @validate([
//     {
//       validator: (age: number) => age > 18,
//       message: "Wiek musi być większy niż 18 lat",
//     },
//     {
//       validator: (age: number) => age < 60,
//       message: "Wiek musi być mniejszy niż 60 lat",
//     },
//   ])
//   age: number;
//   constructor(firstName: string, lastName: string, age: number) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
// }
