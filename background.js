//Define the a list of know scam mew URLS.
//TODO: there is a community maintained list from metamask, source this array from there
//TODO: allow users to submit a URL via a google form
var known_scam_urls = ['http://myethereumwalletntw.com/', 'http://myethereumwalletntw.com', 'myethereumwalletntw.com', 'https://www.myethereumwalletntw.com', 'http://myetherwalletntw.com','myetherwalletntw.com','http://www.myetherwalletntw.com'];

//Define the legit perms of the mew URL
var known_true_urls = ['www.myetherwallet.com/', 'myetherwallet.com', 'www.myetherwallet.com'];

function checkCounter (counter) {
  if(counter > 1) {
    return true;
  } else {
    return false;
  }
}

function inspectDom(domContent) {

    var counter = 0;

    if(domContent.indexOf('Enter a password') > -1){
      counter = counter + 1;
    }

    if (checkCounter(counter) ) {
      updateIconToUnsafe();
      alert("WARNING!!!\nMew Protect has identified that this website may not be the real myetherwallet.com.\n\nPlease take a moment to check the url carefully.\n\nAlways access mew via a bookmark.");
    }

    if(domContent.indexOf('<p translate="x_PasswordDesc" class="ng-scope">This password <em> encrypts </em> your private key. This does not act as a seed to generate your keys. <strong>You will need this password + your private key to unlock your wallet.</strong></p>') > -1){
      counter = counter + 1;
    }

    if (checkCounter(counter) ) {
      updateIconToUnsafe();
      alert("WARNING!!!\nMew Protect has identified that this website may not be the real myetherwallet.com.\n\nPlease take a moment to check the url carefully.\n\nAlways access mew via a bookmark.");
    }

    counter = 0;
}

function updateIconToSafe() {
  chrome.browserAction.setIcon({path:"icons/icon-safe-16.png"});
  return;
}

function resetIcon() {
  chrome.browserAction.setIcon({path:"icons/icon-16.png"});
  return;
}

function updateIconToUnsafe() {
  chrome.browserAction.setIcon({path:"icons/icon-red-16.png"});
  return;
}

function mainAnalysis() {
  resetIcon();

  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    tab = tabs[0];

    var a = document.createElement ('a');  
    a.href = tab.url;

    if (known_scam_urls.indexOf(a.href) > -1) {
      updateIconToUnsafe();
      alert("WARNING!!!\nThis is not the real myetherwallet.com website. Mew Protect has identified that this is a known scam site.\n\nPlease take a moment to check the url carefully.\n\nAlways access mew via a bookmark.");
      return;
    }

    if (known_true_urls.indexOf(a.hostname) > -1) {
      updateIconToSafe();
      return;
    } else {
      var res = a.hostname.substring(0, 7);
      if ((res == "www.mye") || (res == "myether")) {  
        chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, inspectDom);
      }
    }

  });
}

chrome.tabs.onActivated.addListener(function (tabId, changeInfo, tab) {
  mainAnalysis();
});

chrome.tabs.onCreated.addListener(function (tabId, changeInfo, tab) {
  mainAnalysis();
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  mainAnalysis();
});

chrome.windows.onFocusChanged.addListener(function(window) {
  mainAnalysis();
});  
