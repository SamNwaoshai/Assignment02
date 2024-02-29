//Prompt for language code
const languageCode = prompt("Enter a language code. es for Spanish, de for German, en for English and fr for French.")

//English default 
let translation = "Hello World"

//Set translations for other languages
if (languageCode === "es") {
    translation = "Hola mundo"
}
else if (languageCode === "de") {
    translation = "Hallo Welt"
}
else if (languageCode === "fr") {
    translation = "Bonjour le monde"
}

//Display results
console.log(translation)