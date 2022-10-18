//Zadanie 3

interface IDisplay {
    Display(): void;
}
class HTMLDisplayTable : IDisplay {
    


}
class HTMLDisplayList {
    private display: IDisplay;

    constructor(display: IDisplay) {
        this.display = display;
    }
}
class HTMLDisplayJSON {
    private display: IDisplay;

    constructor(display: IDisplay) {
        this.display = display;
    }
}

//Zadanie 4

let body: HTMLBodyElement = document.querySelector("body")!;

let input: HTMLInputElement = document.createElement("input");
input.value = "0"
input.id = 'changeValue';

let plusButton: HTMLButtonElement = document.createElement("button");
let minusButton: HTMLButtonElement = document.createElement("button");

plusButton.innerHTML = "+"
minusButton.innerHTML = "-"

body.appendChild(input);
body.appendChild(plusButton);
body.appendChild(minusButton);

plusButton.onclick = incrementValue
minusButton.onclick = decrementValue


function incrementValue() {
    var value = Number.parseInt((document.getElementById('changeValue') as HTMLInputElement)!.value);
    value += 1;
    
    (document.getElementById('changeValue') as HTMLInputElement)!.value = value.toString();
}

function decrementValue() {
    var value = Number.parseInt((document.getElementById('changeValue') as HTMLInputElement)!.value);
    value -= 1;
    
    (document.getElementById('changeValue') as HTMLInputElement)!.value = value.toString();
}

