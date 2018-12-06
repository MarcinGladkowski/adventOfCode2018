const SandboxCreator = require('./sandboxCreator.js');
const fs = require('fs');
// https://adventofcode.com/2018/day/3/input
let input = fs.readFileSync('input.txt', 'utf8').split("\n");

// const newArea = new SandboxCreator(input).makeArea();
// fs.writeFile("sandbox.txt", newArea); 

const example = '#123 @ 3,2: 5x4';

let parsedData = example.split(" ");

let id = parsedData[0];
let vector = parsedData[2].split(",");
// x to wiersz
let x = vector[0];
// y to index w wierszu
let y = vector[1];

let area = fs.readFileSync('sandbox2.txt', 'utf8').split("\n");

for(let i = 0; i < area.length; i++) {

    if(i === 2) {
         let newRow = '';
         for(let j = 0; j < area[i].length; j++) {
            if(j in [3, 4, 5, 6]) {
                newRow+='x';
            } else {
                newRow+='.';
            }
         }
         area[i] = newRow;
    }
}

console.log(area);

