var fs = require('fs');
// https://adventofcode.com/2018/day/2/input
let input = fs.readFileSync('input.txt', 'utf8').split("\n");

class StringCouner {
    constructor(word) {
        this.word = word;
        this.wordContains = {};
        this.letterCountTwo = false;
        this.letterCountThree = false;
    }

    countLetters() {
        for(let letter of this.word) {
            if(letter in this.wordContains) {
                this.wordContains[letter]++
            } else {
                this.wordContains[letter] = 1;
            }
        }
        return this;
    }

    lettersWithCount(twoCount, threeCount) {
        for(let count of Object.keys(this.wordContains)) {
            let letterCount = this.wordContains[count];

            if(letterCount === twoCount) {
                this.letterCountTwo = true;
            }
            
            if(letterCount === threeCount) {
                this.letterCountThree = true;
            }
        }

        return { twoCount: this.letterCountTwo,
              threeCount: this.letterCountThree }
        
    }
}


let twoCounter = 0;
let threeCounter = 0;

for(let word of input) {
    const count = new StringCouner(word).countLetters().lettersWithCount(2, 3);
    if(count.twoCount) {
        twoCounter++;
    }
    if(count.threeCount) {
        threeCounter++;
    }
}   
// result
console.log(twoCounter * threeCounter);




