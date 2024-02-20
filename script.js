//your JS code here. If required.
function playSound(soundFile) {
  const audio = new Audio(`sounds/${soundFile}`);
  audio.play();
}

function stopSound() {
  const audioElements = document.querySelectorAll('audio');
  audioElements.forEach(audio => audio.pause());
}
