// we will use the typeof command to check if the given value is a string
let stringvalue = "bruh";

if (typeof stringvalue == "string") {
    console.log("True");
}
else {
    console.log("false");
}
// we will check if the boolean is falsey by having an if and then statment checking for the boolean being false
// alternatively we can also check if its a truthy and have an else argument to print false
const booleantest = false;

if (booleantest == false) {
    console.log("The Boolean is falsey");
} else {
    console.log("The bollean is Truthy");
}

// we will check if null equals true then we will use the else feature to print falsey

const testnull = null

if (testnull == true) {
    console.log("The Null value is truthy");
} else {
    console.log("The Null value is falsey");
}

//  we will use the same if else statement above to check if a undefined value is truthy or falsey

const testlundefined = undefined

if (testlundefined == true) {
    console.log("undefined is truthy");
} else {
    console.log("undefined is falsey");
}

// we will use an if and then statement to check if 0 is a falsey number

const testnumb = 0

if (testnumb == true) {
    console.log("The number 0 is truthy");
} else {
    console.log("The number 0 is falsey");
}

// we will use an if and then statement to check if an empty string is truthy or falsey 

const teststring = ""

if (teststring == true) {
    console.log("The string is truthy");
} else {
    console.log("The string is falsey");
}