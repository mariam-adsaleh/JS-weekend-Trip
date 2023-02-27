const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", function (event) {
    event.preventDefault();

    convertToPigLatin();
});
function convertToPigLatin() {
    const inputString = document.getElementById("input-string").value;
    const regex = /^[^aeiou]+/;
    const firstConsonants = regex.exec(inputString)[0];
    const restOfWord = inputString.substring(firstConsonants.length);
    const pigLatinWord = restOfWord + firstConsonants + "ay";
    document.getElementById("output").innerText = pigLatinWord;
}