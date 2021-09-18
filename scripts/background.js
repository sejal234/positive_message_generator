let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
}
=======
chrome.browserAction.onClicked.addListener(function(tab) {

});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

});