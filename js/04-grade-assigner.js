//Prompt for a number between 1-100
let grade = parseInt(prompt("Enter the student\'s grade"));

//Grading scale code
if (grade >= 90 && grade <= 100) {
    console.log("Student received an A")
}
else if (grade >= 80 && grade <= 89) {
    console.log("Student received a B")
}
else if (grade >= 70 && grade <= 79) {
    console.log("Student received a C")
}
else if (grade >= 60 && grade <= 69) {
    console.log("Student received a D")
}
else if (grade >= 1 && grade <= 59) {
    console.log("Student received a F")
}
else {
    console.log("Only numbers between 1 and 100 are accepted")
}