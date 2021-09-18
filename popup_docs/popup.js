let btn = document.createElement("button");
btn.innerHTML("Click me!");
document.body.appendChild(btn);
btn.onclick = randomMess();
function randomMess(){
    var random_message = random["You got this!", "You're beautiful!", "You're amazing!", "Don't sweat the small stuff!"];
    return random_message;
}