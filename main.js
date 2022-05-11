//import all modules

const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');

const hat = '^';    //  My hat
const hole = 'O';
const fieldCharacter = '░'; //grass. Using grass patch to fill up the 10 row X 10 col
const pathCharacter = '*'; // ME
const row = 10;
const col = 10;

//in this kickstart, we are using Class object

//1) Build the whole field (10 row X 10 col(column))
//Create a 2D Array
//

class Field {
    field = [];

    constructor(){

        //current location of the character *         //character can always be in the default position
        this.locationX = 0;
        this.locationY = 0;

        for (let a = 0; a < row; a++) {
            this.field[a] = [];
        }
        this.generateField(); //put in the green patches in the plot
    }

    generateField() {

        for (let y = 0; y < row; y++){
            for (let x = 0; x < col; x++) {
                const prob = Math.random();
                this.field[y][x] =  fieldCharacter;
            }
        }
        console.log
        //set the hat location
        // set character position [0][0]
    }
    generateField() {

        for(let y = 0; y < row; y++) {
            for (let x= 0; x < col; x++) {
            const prob = Math.random();
            this.field[y][x] = fieldCharacter;
            }
        }
        //set  the hat location
        //set character position as [0][0] 
    }
    runGame() {
        //Implement your codes
        this.print();
        this.askQuestion();
    }

    print() {
        clear();
        const displayString = this.field.map(row => {
                return row.join('');
             }).join('\n');
        console.log(displayString);
    }

    askQuestion() {
        const answer = prompt('which way? Press u, d, l or r.')();

  

        //const prompt = require('prompt-sync')({sigint: true});

        //const name = prompt('Please enter again');
        //console.log(`Hey there, you found the hat ${name}`);

  
        
        


//if (getKey =='q')
{ 
    placeA();
    console.log(table(arr));
}
    }

} // end of field class

//create an instance object of the field
const myField = new Field();
myField.runGame();



