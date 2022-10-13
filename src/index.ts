type money = number;

type Person = {
    firstName: string;
    lastName: string;
    age?: number;
}
    
type PersonalInfo = {
    dateOfBirth: Date,
    occupation: string;
}
    
type PersonWithPersonalInfo = Person & PersonalInfo;

type AllPersonData = Person|PersonWithPersonalInfo;


function hello() {
    console.log("Witaj w swiecie Typescript.")
}

hello();
let obj:any = 12;
obj = 'Ala ma kota'

console.log(obj)

let person = {
    firstName : "Ala",
    lastName : "Kot"
}
    
let person2: PersonWithPersonalInfo;

function print(obj: Person) {
    if (obj.age) {
        console.log(`${obj.firstName} ${obj.lastName} ${obj.age}`)
    }
    else {
        console.log(`${obj.firstName} ${obj.lastName}`)
    }
}
    
print(person)
print({ lastName: "Kot2", firstName:"Ala2", age: 21});
//
