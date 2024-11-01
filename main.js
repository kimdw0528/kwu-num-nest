#!/usr/bin/env node



const lib = require("./lib");
if (process.argv.length <= 3){
    console.log("INSUFFICIENT PARAMETER!");
    process.exit(1);
}
let command = process.argv[2];

let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n)=> parseFloat(n));
if (numbers.some((n)=> isNaN(n))){
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

    let result;
switch (command){
    case "avg":
        result = lib.avg(numbers);
        console.log("result is : ");
        break;
    case "prime":
        result = lib.prime(numbers[0]);
        if (result){
            console.log("NOT PRIME");
        }
        else {
            console.log("PRIME");
        }
        break;
    case "factorial":
        result = lib.factorial(numbers[0])
        console.log("result is : ");
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}
console.log(result);