//import {Autor} from "./autor"
//import {Zad4} from "./zadanie4"
function hello() {
  console.log("Witaj w swiecie Typescript.")
}
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (let key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
hello();

// let autor1 = new Autor("Sebastian","Gonera", "sebagonera@gmail.com");
// let autor2 = new Autor("Mariusz","Wojcik", "m@wojcik.com");
// let autor3 = new Autor("Szymon","Zielonka", "zielonka@szymi.com");
// let autor4 = new Autor("Kasia","Gonera", "goner@katarzyna.com");
// let autorzy = [autor1, autor2,autor3,autor4];

// let table = document.querySelector("table");
// let data = Object.keys(autorzy[0]);
// generateTableHead(table, data);
// generateTable(table, autorzy);


// let list = document.querySelector("ul");

// autorzy.forEach((item)=>{
//     let li = document.createElement("li");
//     li.innerText=item.imie+" "+item.nazwisko+" "+item.email;
//     list?.appendChild(li);
// });
// const obj = new Zad4(0);
// document.getElementById("btn")?.addEventListener("click", function () {
//   let el = (<HTMLInputElement>document.getElementById("inputLiczba")).value;
//   let inNum =  parseFloat(el);
//   obj.liczba= inNum;
//   document.getElementById("add")?.addEventListener("click", function () {
//     obj.liczba = obj.addOne();
//     console.log(obj);
//   });
// document.getElementById("minus")?.addEventListener("click", function () {
//   obj.liczba = obj.minusOne();
//   console.log(obj);
// });
// console.log(obj);
// });


//*Zadanie 5
interface IAutor {
  firstname: string;
  lastname: string;
  email: string;
}
let ul = document.getElementById("zadanie5");
fetch("data.json")
  .then(res => res.json())
  .then(data => data.map(d => <IAutor>d))
  .then(people => Object.keys(people).forEach(p => {
    let ob = people[p];
    let li = document.createElement("li");
    li.innerText = ob.firstname + " " + ob.lastname + " " + ob.email;
    ul?.appendChild(li);
    //console.log(ob.firstname);
  }));

//*zadanie 7
let selected = <HTMLSelectElement>document.getElementById("wybor");
let v = selected.value;
let created: HTMLElement | null;
let table: HTMLTableElement | null | undefined;
let data: string[];
switch (v) {
  case "ul":
    created = document.getElementById("ulZad7");
    break;
  case "ol":
    created = document.getElementById("olZad7");
    break;
  case "table":
    table = <HTMLTableElement>document.getElementById("tableZad7");
    let thead = table.createTHead();
    data = ["firstname", "lastname", "email"];
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
    break;
}
fetch("data.json")
  .then(res => res.json())
  .then(data => data.map(d => <IAutor>d))
  .then(people => Object.keys(people).forEach(p => {
    let ob = people[p];
    let li = document.createElement("li");
    li.innerText = ob.firstname + " " + ob.lastname + " " + ob.email;
    created?.appendChild(li);
    if (table != null || table != undefined) {
      let row = table.insertRow();
      for (let key in ob) {
        let cell = row.insertCell();
        let text = document.createTextNode(ob[key]);
        cell.appendChild(text);
      }
    }

    //console.log(ob.firstname);
  }));
//https://www.valentinog.com/blog/html-table/