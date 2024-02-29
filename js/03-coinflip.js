// Get a random number 
let randomNumber = Math.round(Math.random());

// Set coinFlip variable to the generated random number
let coinFlip = randomNumber < 0.5 ? 'Heads' : 'Tails';

// Prompt the user to choose Heads or Tails
let choice = prompt("Choose Heads or Tails:");

// Compare the coin flip result and user's choice
if (coinFlip === 'Heads' && choice.toLowerCase() === 'heads') {
  alert("The flip was heads and you chose heads...you win!");
} else if (coinFlip === 'Heads' && choice.toLowerCase() === 'tails') {
  alert("The flip was heads but you chose tails...you lose!");
} else if (coinFlip === 'Tails' && choice.toLowerCase() === 'heads') {
  alert("The flip was tails but you chose heads...you lose!");
} else if (coinFlip === 'Tails' && choice.toLowerCase() === 'tails') {
  alert("The flip was tails and you chose tails...you win!");
} else {
  alert("Invalid choice. Please choose Heads or Tails.");
}
