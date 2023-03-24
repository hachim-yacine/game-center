// Add event listener to play buttons
var playButtons = document.querySelectorAll('.play-button');

playButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var gameFile = button.dataset.gameFile;
    if (!gameFile) {
      alert('Sorry, this game is not yet available.');
      return;
    }
    window.location.href = gameFile;
  });
});

// Add event listener to icon buttons
var icons = document.querySelectorAll('.icon');

icons.forEach(function(icon) {
  icon.addEventListener('click', function() {
    icons.forEach(function(icon) {
      icon.classList.remove('active');
    });
    icon.classList.add('active');
  });
});
