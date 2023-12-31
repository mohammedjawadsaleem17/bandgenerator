let len = document.querySelectorAll(".drum").length;
console.log(`Length of the Buttons is ${len}.`)


for(let i=0;i<len;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        console.log(this.innerHTML);
        playSound(this.innerHTML);
    })
}


//Keyboard Press
document.addEventListener("keydown",function(event){
    console.log(event.key);
    playSound(event.key)
})


function playSound(letter){
    switch(letter){
        case "w":
            console.log("a");
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "s":
            console.log("s");
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "a":
            console.log("a");
            let kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "d":
            console.log("d");
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            console.log("j");
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            console.log("k");
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            console.log("l");
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log("invalid click");
            let error = new Audio("./sounds/error.wav");
            error.play();

    }
}

document.querySelector("footer").style.fontVariant="small-caps";
