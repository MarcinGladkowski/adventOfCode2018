var fs = require('fs');
// https://adventofcode.com/2018/day/3/input
let input = fs.readFileSync('input.txt', 'utf8').split("\n");


let maxX = 0;
let maxY = 0;

for(let area of input) {
    let areaArr = area.split(" ");
    let vector = areaArr[2].split(",");
    let x = parseInt(vector[0]);
    let y = parseInt(vector[1]);

    if(x > maxX) { maxX = x }; 
    if(y > maxY) { maxY = y }; 
}

maxX += 50;
maxY += 50;
let line = '';
for(let i = 0; i < maxX; i++) {
  line+='.';
}

let sandboxToWrite = '';
for(let j = 0; j < maxY; j++) {
    sandboxToWrite += line + '\n';
}

fs.writeFile("sandbox.txt", sandboxToWrite); 

