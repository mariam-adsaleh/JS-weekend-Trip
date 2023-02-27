const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", function (event) {
    event.preventDefault();

    checkPrime();
});
function checkPrime() {
    let yearOfBirth = document.getElementById("year").value;
    let age = new Date().getFullYear() - yearOfBirth;
    let isPrime = true;
    if (age < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i < age; i++) {
            if (age % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        document.getElementById("result").innerHTML = "Your age is prime!";
    } else {
        document.getElementById("result").innerHTML = "Your age is not prime.";
    }
}