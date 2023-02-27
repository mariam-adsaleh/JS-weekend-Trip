const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", function (event) {
    event.preventDefault();

    checkPalindrome();
});

function isPalindrome(str) {
    // Base case
    if (str.length <= 1) {
        return true;
    }

    // Recursive case
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1));
    } else {
        return false;
    }
}

function checkPalindrome() {
    // Get the input string from the user
    const inputStr = document.getElementById("inputStr").value;

    // Check if the input string is a palindrome or not
    const result = isPalindrome(inputStr) ? "is a palindrome" : "is not a palindrome";

    // Display the result on the DOM
    document.getElementById("result").innerHTML = `The input string "${inputStr}" ${result}.`;
}