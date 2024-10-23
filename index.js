/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";

// Your code here...
console.log(string1.indexOf("jello"));





/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";

// Your code here...
const cool = string2[2]+string2[string2.length-1]+string2[string2.length-1]+string2[string2.length-2];
console.log(cool);





/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";

// Your code here...
console.log(`${string3.repeat(4)} Batman!`);





/*******************************************
       Iteration 4 | Fruit Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

// Your code here...
//console.log(fruit.indexOf(`lemon`));
//console.log(fruit.slice(26, 31));
console.log(fruit.slice(fruit.indexOf('lemon'), fruit.indexOf('lemon') + 'lemon'.length ) );




/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";

function checkIfFunny(headline) {

    if(headline.includes("oxygen")) {
        return "The string includes the word 'oxygen'";
    } else {
        return "The string does not include the word 'oxygen'";
    }
}

// Check the first headline
// Your code here ...
const isFunny = checkIfFunny(funnyHeadline1);
console.log(isFunny);


// Check the second headline
// Your code here ...
const isNotFunny = checkIfFunny(funnyHeadline2);
console.log(isNotFunny);


/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";

const isLength = string4.length;
const isLastChar = string4.slice(-1);

// a) Print the string length
// Your code here ...
console.log(isLength);


// b) Print the last character in the string
// Your code here ...
console.log(isLastChar);
