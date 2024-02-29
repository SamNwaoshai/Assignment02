//First Integer Prompt
let firstInteger = parseInt(prompt("Enter the first integer."));

//Second Integer Prompt
let secondInteger = parseInt(prompt("Enter the second integer."));

//The simple conditional statement that compares the two integers, then finds and displays the larger one.
if (firstInteger > secondInteger) {
    document.write("The larger interger is:" + firstInteger);
}
else if (secondInteger > firstInteger) {
    document.write("The larger interger is:" + secondInteger);
}
else {
    document.write("Both integers are equal.");
} 