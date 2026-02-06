const messages = [
  "Are you sure? 😳",
  "Really really sure?? 🥺",
  "Think again 💭",
  "Pookie please… 💕",
  "You’re breaking my heart 💔",
  "I’ll be VERY sad 😢",
  "Like… extremely sad 😭",
  "Okay fine… I give up 😞",
  "JUST KIDDING — SAY YES ❤️"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.35}px`;

  noButton.style.transform = `translate(${Math.random()*60-30}px, ${Math.random()*40-20}px)`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
