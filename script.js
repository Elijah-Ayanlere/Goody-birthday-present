const greetingText = "TO A WONDERFUL FRIEND!";
const speed = 100; // Typing speed in milliseconds
let index = 0;

function typeWriter() {
    if (index < greetingText.length) {
        document.getElementById("greeting").innerHTML += greetingText.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter(); // Start typing when the page loads
