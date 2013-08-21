var state = {play: false};

chrome.browserAction.onClicked.addListener(browserActionClicked);

function browserActionClicked() {
  // Update state.
  state.play = !state.play;
  updateIcon();
  
  // Send new state to Player.fm tab.
  playerfmTabs(function (tabs) {
    if (tabs.length > 0) {
      sendMessage(tabs[0], state);
    }
  });
}

function playerfmTabs(cb) {
  chrome.tabs.query({url: "http://player.fm/*"}, cb);
}

function sendMessage(tab, message, cb) {
  chrome.tabs.sendMessage(tab.id, message, cb);
}

function updateIcon() {
  var path = state.play ? 'play.png' : 'pause.png';
  chrome.browserAction.setIcon({path: path}); 
}

