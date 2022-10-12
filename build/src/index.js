function hello() {
    console.log("Witaj w swiecie Typescript.");
}
hello();
let obj = 12;
obj = 'Ala ma kota';
console.log(obj);
let person = {
    firstName: "Ala",
    lastName: "Kot"
};
let person2;
function print(obj) {
    if (obj.age) {
        console.log(`${obj.firstName} ${obj.lastName} ${obj.age}`);
    }
    else {
        console.log(`${obj.firstName} ${obj.lastName}`);
    }
}
print(person);
print({ lastName: "Kot2", firstName: "Ala2", age: 21 });
