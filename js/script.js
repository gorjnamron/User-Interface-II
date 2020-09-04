  
  function myFunction() {
    let x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  //function playMusic() {
    //let x = document.getElementById("audio");
    //if (x.style.play === "play") {
      //x.style.pause = "pause";
    //} else {
     // x.style.play = "play";
    //}
  //}
  function playMusic() {
    let audio = document.getElementById("audio");
    audio.play();
   
  }
