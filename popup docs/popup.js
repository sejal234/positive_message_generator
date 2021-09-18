document.addEventListener('DOMContentLoaded', function(){
    var checkPageButton = document.getElementById('clickIt');
    checkPageButton.addEventListener('click', function()){

        chrome.tabs.getSelected(null, function(tab)){
            alert("Hi what's up");

        });
    }, false);

}, false);