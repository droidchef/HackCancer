// Saves options to chrome.storage
function save_options() {
  var shouldKillTabsAuto = document.getElementById('kill').checked;
  var shoudlOpenYouTube = document.getElementById('youtube').checked;
  chrome.storage.sync.set({
    shouldKillTabsAuto: shouldKillTabsAuto,
    shoudlOpenYouTube: shoudlOpenYouTube
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and shouldKillTabsAuto = true.
  chrome.storage.sync.get({
    shouldKillTabsAuto: false,
    shoudlOpenYouTube: false
  }, function(items) {
    document.getElementById('kill').checked = items.shouldKillTabsAuto;
    document.getElementById('youtube').checked = items.shoudlOpenYouTube;

  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
