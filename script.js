
let text = "مرحبًا، أنا مهاب محمد";
let index = 0;
let speed = 100;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;
