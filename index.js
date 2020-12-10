import minimist from 'minimist';
import fs from 'fs';



const args = minimist(process.argv);
console.log(args)

// console.log('Hello ' + args.u)
//     // console.log(process.argv);
//     // console.log(process.argv.slice(2));

//npm init -y
//package.json kiegészítése type:module
//npm install minimist


//TODO



// $ todo

// Parancssori Todo applikáció
//     === === === === === === === === ==

//     Parancssori argumentumok:
//     -l Kilistázza a feladatokat -
//     a Új feladatot ad hozzá -
//     r Eltávolít egy feladatot -
//     c Teljesít egy feladatot


console.log('Parancssori Todo applikáció \n === === === === === === === === === == \n \n Parancssori argumentumok: \n -l: Kilistázza a feladatokat \n -a: Új felafatokat ad hozzá \n -r: Eltávolít egy feladatot \n -c: Teljesít egy feladatot');



// let text = fs.readFileSync('./todo.txt');
// fs.readFile('/todo.txt', (data) => {
//     console.log(data);
// });
// console.log(text);