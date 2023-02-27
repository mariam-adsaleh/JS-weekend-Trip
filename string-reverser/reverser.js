const reverseBtn = document.getElementById("reverse-btn");

reverseBtn.addEventListener("click", function (event) {
    event.preventDefault();

    reverse();
});
function reverse() {
    const input = document.getElementById("input-string").value;
    const numbers = input.match(/\d+/g);
    let output = input;

    if (numbers !== null) {
        numbers.forEach((number) => {
            output = output.replace(number, number.split("").reverse().join(""));
        });
    }

    document.getElementById("output-string").textContent = output;
}