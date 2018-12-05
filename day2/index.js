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
// Part I
console.log(twoCounter * threeCounter);


// Part II
let comparasionWordIndex = 0;
for(let i = 0; i < input.length; i++) {
    for(let k = 0; k < input.length; k++) {
        
        if (comparasionWordIndex != k) {

            let differenceCounter = 0;
            let differenceIndex = 0;

            for(let j = 0; j < input[k].length; j++) {
               
               if (input[k][j] !== input[comparasionWordIndex][j]) {
                  differenceCounter++;
                  differenceIndex = j;
               }

            }

            if (differenceCounter === 1) {
                let result = input[k].substring(0, differenceIndex - 1) + input[k].substring(differenceIndex, input[k].length);
                console.log(result);
                return true;
            }
        }
    }
    comparasionWordIndex++;
}
