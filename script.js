document.getElementById("game-2048").addEventListener("click", function () {
    document.querySelector(".title-screen").style.display = "none";
    document.getElementById("instructions-container").style.display = "flex";
  });

  document.getElementById("start-game").addEventListener("click", function () {
    document.getElementById("instructions-container").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
  });

  document.getElementById("reset-button").addEventListener("click", function () {
    document.getElementById("game-screen").style.display = "none";
    document.querySelector(".title-screen").style.display = "flex";
  });

  // JavaScript to handle the volume change
  const clickVolumeSlider = document.getElementById('click-volume');
  const winnerVolumeSlider = document.getElementById('winner-volume');

  const clickSound = document.getElementById('click-sound');
  const winnerSound = document.getElementById('winner-sound');

  clickVolumeSlider.addEventListener('input', function () {
    // Adjust the volume of the click sound
    clickSound.volume = clickVolumeSlider.value / 100;
  });

  winnerVolumeSlider.addEventListener('input', function () {
    // Adjust the volume of the winner sound
    winnerSound.volume = winnerVolumeSlider.value / 100;
  });

  // Example function to play the click sound
  function playClickSound() {
    clickSound.play();
  }

  // Example function to play the winner sound
  function playWinnerSound() {
    winnerSound.play();
  }