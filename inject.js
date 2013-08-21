window.addEventListener("message", function(evt) {
  if (evt.data.type == 'from-content-script') {
    var request = JSON.parse(evt.data.text);
    if (window.isPlaying) {
        window.pause();
    } else if (app.is("startedPlayer")) {
        window.resume();
    }
  }
});
