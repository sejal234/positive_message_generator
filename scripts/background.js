<<<<<<< HEAD
let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);

/* chrome.browserAction.onClicked.addListener(function(tab) {

});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){ */

// >>>>>>> acf246b0a26d4ea79065c4bc760337c3e6b5a4a0
});