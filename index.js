import minimist from 'minimist';
import fs, { readFileSync } from 'fs';




const args = minimist(process.argv);
console.log(args)

// console.log('Hello ' + args.u)
//     // console.log(process.argv);
//     // console.log(process.argv.slice(2));

//npm init -y
//package.json kiegészítése type:module
//npm install minimist


//TODO

if (Object.keys(args).length === 1) {
    printUserManual();
} else if (args._.length > 2 || !Object.keys(args).every(arg => ['', 'l', 'a', 'r', 'c'].includes(arg))) {
    printUserManual();
}

function printUserManual() {
    let userManual = 'Parancssori Todo applikáció \n === === === === === === === === === == \n \n Parancssori argumentumok: \n -l: Kilistázza a feladatokat \n -a: Új feladatokat ad hozzá \n -r: Eltávolít egy feladatot \n -c: Teljesít egy feladatot'
    console.log(userManual);
}


function getTodoItem() {
    let myTodo = fs.readFileSync('./todos.json', 'utf-8');
    // let myTodoObject = JSON.parse(myTodo);
    return myTodo;
}

if (args.l === true) {
    listItems();
}

function listItems() {
    for (console.log(getTodoItem())
    }


    class Todo {
        item;
        status = false;
        constructor(item) {
            this.item = item;
        }
    }

    class List {
        list = [];
    }

    let myTodoItems = new Todo("Kutyasétáltatás");
    console.log(typeof myTodoItems)

    let myList = new List();
    myList = [
        new Todo("Kutyasétáltalás"),
        new Todo("Macskasímogatás"),
        new Todo("Bevásárlás")
    ]

    console.log(typeof myList)
        // console.log(myNewTodo)

    // let stringTodo = JSON.stringify(myList)
    // fs.writeFile('todo.json', stringTodo, (err) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log("JSON data is saved.");
    // });

    // console.log(stringTodo);