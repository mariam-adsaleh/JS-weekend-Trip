const ball = document.getElementById("ball");

let position = 0; // initial position of the ball
let speed = 5; // speed of the ball
let size = 50; // size of the ball
let color = "red"; // color of the ball

function animate() {
    position += speed;
    ball.style.top = position + "px";

    // reverse the direction if the ball hits the top or bottom
    if (position >= window.innerHeight - ball.offsetHeight || position <= 0) {
        speed = -speed;

        // change the color of the ball randomly
        color = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        ball.style.backgroundColor = color;
    }

    // increase or decrease the size of the ball based on its position
    if (position < window.innerHeight / 3) {
        size = 50;
    } else if (position < window.innerHeight * 2 / 3) {
        size = 40;
    } else {
        size = 30;
    }
    ball.style.width = size + "px";
    ball.style.height = size + "px";

    requestAnimationFrame(animate); // call the function again on the next animation frame
}

animate();
