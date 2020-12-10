import minimist from 'minimist';
import fs from 'fs';
const args = minimist(process.argv);


function printUserManual() {
    let userManual = 'Parancssori Todo applikáció \n === === === === === === === === === == \n \n Parancssori argumentumok: \n -l: Kilistázza a feladatokat \n -a: Új feladatokat ad hozzá \n -r: Eltávolít egy feladatot \n -c: Teljesít egy feladatot'
    console.log(userManual);
}
if (Object.keys(args).length === 1) {
    printUserManual();
} else if (args._.length > 2 || !Object.keys(args).every(arg => ['_', 'l', 'a', 'r', 'c'].includes(arg))) {
    console.log('Nem támogatott argumentum');
    printUserManual();
}

let myTodo = fs.readFileSync('./todos.json', 'utf-8');
let myTodoObject = JSON.parse(myTodo);

function listItems() {
    if (myTodoObject.length === 0) {
        console.log('Nincs mára tennivalód :)')
    } else {
        for (let i = 0; i < myTodoObject.length; i++) {
            if (myTodoObject[i].status === true) {
                console.log(i + 1 + ' - ' + myTodoObject[i].item + ' ✓')
            } else {
                console.log(i + 1 + ' - ' + myTodoObject[i].item + ' X')
            }
        }
    }
}

if (args.l === true) {
    listItems();
}

class Todo {
    item;
    status = false;
    constructor(item) {
        this.item = item;
    }
}

if (typeof args.a === "string") {
    addItem();
} else if (args.a == true) {
    console.log('Nem lehetséges új feladat hozzzáadása, nincs megadva feladat.')
}

function addItem() {
    myTodoObject.push(new Todo(args.a));
    let toSync = JSON.stringify(myTodoObject);
    fs.writeFileSync('./todos.json', toSync, 'utf-8');
}

function removeItem() {
    myTodoObject.splice(args.r - 1, 1);
    let toSync = JSON.stringify(myTodoObject);
    fs.writeFileSync('./todos.json', toSync, 'utf-8');
}

if (typeof args.r === "number" && args.r <= myTodoObject.length) {
    removeItem();
} else if (args.r > myTodoObject.length) {
    console.log('Nem lehetséges az eltávolítás. Túlindexelési probléma adódott');
} else if (args.r === true) {
    console.log('Nem lehetséges az eltávolítás, nem adott meg indexet');
} else if (typeof args.r === "string") {
    console.log('Nem  lehetséges az eltávolítás, a megadott index nem szám.')
}