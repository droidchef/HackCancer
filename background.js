chrome.tabs.onUpdated.addListener(function(tabId, changedInfo, tab){

  console.log('TAB ID = ' + tabId);
  console.log(changedInfo);

  if (changedInfo.status =='complete') {

    var tabURL = tab.url;
    sendURLForCancerCheck(tabURL, tab);
    console.log("You are Currently Browsing : " + tabURL);

  }

});

function sendURLForCancerCheck(suspicousTabURL, tab) {
  if (jQuery) {
    console.log("Jquery is available");
    var REQUEST_URL = "http://10.192.237.191:4567/" + suspicousTabURL;
    $.get(REQUEST_URL, function(data) {
      console.log(data);
      if (data.response.score == 1) {
          var opt = {
            type: "basic",
            title: "Cancer Hack",
            message: "This website contains very old and irrellevant content.",
            iconUrl: "icon.png"
          };
        Notification.display(opt);
      }
      chrome.tabs.sendMessage(tab.id, suspicousTabURL,
                                  function(){
                                    console.log('Message Sent');
                                  });

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


var Notification=(function(){
    var notification=null;

    return {
        display:function(opt){
            notification=chrome.notifications.create(opt);
            notification.show();
        },
        hide:function(){
            notification.close();
        }
    };
})();
