var fs = require('fs');
// https://adventofcode.com/2018/day/1/input
let result = fs.readFileSync('input.txt', 'utf8');

class CounterCalc {

    constructor(result) {
        this.sum = 0;
        this.input = result.split("\n").map(input => {
            let inputParsed = /[0-9]+/g.exec(input);
            return [input[0], inputParsed[0]]
        });
    }

    countSum() {
        for (var value of this.input) {
            const number = parseInt(value[1]);
            switch(value[0]) {
                case '+':
                    this.sum += number;
                    break;
                case '-':
                    this.sum -= number;
                    break;
            }
        }
        return this.sum;
    }
}
// result
const sum = new CounterCalc(result).countSum();
