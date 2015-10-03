chrome.tabs.onUpdated.addListener(function(tabId, changedInfo, tab){

  console.log('TAB ID = ' + tabId);
  console.log(changedInfo);

  if (changedInfo.status =='complete') {

    var tabURL = tab.url;
    sendURLForCancerCheck(tabURL);
    console.log("You are Currently Browsing : " + tabURL);

    chrome.tabs.sendMessage(tab.id, tabURL,
                                sendURLForCancerCheck);
  }

});

function sendURLForCancerCheck(suspicousTabURL) {
  if (jQuery) {
    console.log("Jquery is available");
    var REQUEST_URL = "http://192.168.43.188:4567/" + suspicousTabURL;
    $.get(REQUEST_URL, function(data) {
      console.log(data);
    })
    .done(function() {
      console.log("DOne");
    })
    .fail(function() {
      console.log("Failed");
    });

  } else {
    console.log("Jquery is not available");
  }
}
