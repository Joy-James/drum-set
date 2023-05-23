const drums=document.querySelectorAll(".drum");

function handleClick(event) {
    // console.log(event.target.innerText)
    let char= event.target.innerText
    decideSound(char);
}


for (let i = 0; i < drums.length; i++) {
    let drum=drums[i];
   drum.addEventListener("click", (e)=>handleClick (e));
}
function playSound(sound) {
    const audio=new Audio(sound);
    audio.play();
    
}



function decideSound(char) {
    let sound=""
    switch (char) {
        case 'w':sound="./sounds/tom-1.mp3"
            break;
            case 'a':sound="./sounds/tom-2.mp3"
            break;
            case 's':sound="./sounds/tom-3.mp3"
            break;
            case 'd':sound="./sounds/tom-4.mp3"
            break;
            case 'j':sound="./sounds/snare.mp3"
            break;
            case 'k':sound="./sounds/crash.mp3"
            break;
            case 'l':sound="./sounds/kick-bass.mp3"
            break;
    
    
    
        default:
            break;
    }
playSound(sound);
}
  const body =document.querySelector("body")
  body.addEventListener("keypress", e=>handlePress(e))

  function handlePress(e) {
    let key= e.key;
    decideSound(key)

  }
  //play sounds when elements are clicked and when keyboard is clicked
  //1.getting events from clicks
  //2.extracct info we can make a decision
  //3.make the decison
  //4.place a given sound


