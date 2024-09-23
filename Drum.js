var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonKey = this.getAttribute("data-key");
        makeSound(buttonKey);
        buttonAnimation(buttonKey);
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key.toUpperCase());
    buttonAnimation(event.key.toUpperCase());
});

function makeSound(key) {
    switch (key) {
        case "W":
            var tom1 = new Audio("w.mp3");  
            tom1.play();
            break;
        case "A":
            var tom2 = new Audio("a.mp3");
            tom2.play();
            break;
        case "S":
            var tom3 = new Audio("s.mp3");
            tom3.play();
            break;
        case "D":
            var tom4 = new Audio("d.mp3");
            tom4.play();
            break;
        case "J":
            var snare = new Audio("j.mp3");
            snare.play();
            break;
        case "K":
            var crash = new Audio("k.mp3");
            crash.play();
            break;
        case "L":
            var kick = new Audio("l.mp3");  
            kick.play();
            break;
        default:
            console.log("Invalid key: " + key);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector(`button[data-key="${currentKey}"]`);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
