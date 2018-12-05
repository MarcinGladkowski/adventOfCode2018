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
        this.sumResults = [this.sum];
        this.twice = 0;
    }

    countSum(findTwice = false) {

        let isRepeat = true;

        for (var value of this.input) {
            const number = parseInt(value[1]);
            switch(value[0]) {
                case '+':
                    this.sum += number;
                    this.sumResults.push(this.sum);
                    break;
                case '-':
                    this.sum -= number;
                    this.sumResults.push(this.sum);
                    break;
            }
            
            if((this.sumResults.filter(item => item == this.sum).length == 2) && (findTwice === true)) {
                findTwice = false;
                return this.sum;                
            }
        }

        if(findTwice) {
            this.countSum(true);
        }

        return this.sum;
    }
}
// result I part
const sum = new CounterCalc(result).countSum();
console.log(sum);

// result II part
const sum = new CounterCalc(result).countSum(true);
console.log(sum);
