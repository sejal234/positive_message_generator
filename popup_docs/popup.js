//document.getElementById("changeColor")
function randomMess(){
    var random_message = random["You got this!", "You're beautiful!", "You're amazing!", "Don't sweat the small stuff!"];
    alert (random_message)
}

document.addEventListener('DOMContentLoaded', function(){
    var changeFontButton = document.getElementById('changeColor');
    changeFontButton.addEventListener('click', function(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            chrome.tabs.executeScript(activeTab.id, {
                file: "inject.js"
            });
        });
    }, false);
}, false);