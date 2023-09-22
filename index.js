let len = document.querySelectorAll(".drum").length;

for (let i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let mouse = this.innerHTML;
    makeSound(mouse);
    //Based on the key pressed i have to play sound;
    buttonAnimation(mouse)
  });
}


document.addEventListener("keydown",function(e){
    console.log(e.isTrusted);
    console.log(e.key)
    makeSound(e.key);
    buttonAnimation(e.key)
})




function makeSound(key) {
  switch (key) {
    case "w":
      console.log("You have pressed W");
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      console.log("You have pressed A");
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      console.log("You have pressed S");
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      console.log("You have pressed S");
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      console.log("you have pressed J");
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      console.log("You have pressed K");
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      console.log("You have pressed l");
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
    //   alert("Invalid Request was Submitted");
  }
}

function buttonAnimation(event){
    let button = document.querySelector("."+event).classList.add("pressed");

    setTimeout(unPress,100);
    function unPress(){
        document.querySelector("."+event).classList.remove("pressed");
    }
}

document.querySelector("footer").style.color="black";