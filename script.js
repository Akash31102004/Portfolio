const text = ["BCA Student", "Web Developer", "Database Enthusiast"];
let index = 0;
let charIndex = 0;

function type() {
  const typingText = document.getElementById("typing-text");
  if (charIndex < text[index].length) {
    typingText.innerHTML += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  const typingText = document.getElementById("typing-text");
  if (charIndex > 0) {
    typingText.innerHTML = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);
