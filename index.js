chrome.tabs.onUpdate.addListener(function(tabId, changedInfo, tab){

  console.log('TAB ID = ' + tabId);
  console.log('URL = ' + changedInfo.url);

});
