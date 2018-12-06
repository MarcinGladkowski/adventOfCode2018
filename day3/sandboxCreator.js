
module.exports = class SandboxCreator {

    constructor(data) {
        this.data = data;
    }

    makeArea() {

    let maxX = 0;
    let maxY = 0;

        for(let area of this.data) {
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
        return sandboxToWrite;
    }
}