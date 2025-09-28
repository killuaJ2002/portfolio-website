const words = [
  "Full-Stack Developer",
  "ML Engineer",
  "UI Designer",
  "System Engineer",
];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("changingText");

function typeWriter() {
  const currentWord = words[currentWordIndex];

  if (isDeleting) {
    // Remove characters
    textElement.innerHTML =
      currentWord.substring(0, currentCharIndex - 1) +
      '<span class="cursor">|</span>';
    currentCharIndex--;

    if (currentCharIndex === 0) {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
    }
  } else {
    // Add characters
    textElement.innerHTML =
      currentWord.substring(0, currentCharIndex + 1) +
      '<span class="cursor">|</span>';
    currentCharIndex++;

    if (currentCharIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeWriter, 2000); // Pause when word is complete
      return;
    }
  }

  // Speed: faster when deleting, slower when typing
  const speed = isDeleting ? 50 : 100;
  setTimeout(typeWriter, speed);
}

// Start the animation
typeWriter();

const toggleProject = (id) => {
  const techStack = document.getElementById(id);
  techStack.classList.toggle("visible");
};

const nameInput = document.getElementById("full-name");
const emailInput = document.getElementById("user-email");
const messageInput = document.getElementById("user-message");
const contactForm = document.querySelector(".contact-form");

const sendMessage = (e) => {
  e.preventDefault();
  console.log(
    `${nameInput.value}(${emailInput.value}) says ${messageInput.value}`
  );
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
};

contactForm.addEventListener("submit", sendMessage);
