var start = new Date().getTime();

var bestTime = 100000.0;

function makeShapeAppear() {

    var top = Math.random() * 400;

    var left = Math.random() * 700;

    var size = (Math.random() * 200) + 80;

    var color =  Math.floor(Math.random()*16777215).toString(16);
      
    if(Math.random() > 0.5 ){
        document.getElementById("object").style.borderRadius = "50%";
    }

    document.getElementById("object").style.top = top + "px";

    document.getElementById("object").style.left = left + "px";

    document.getElementById("object").style.width = size + "px";

    document.getElementById("object").style.height = size + "px";

    document.getElementById("object").style.backgroundColor = "#" + color;

    document.getElementById("object").style.display = "block" 

    start = new Date().getTime();
}

function appearAfterDelay() {

    setTimeout(makeShapeAppear,(Math.floor(Math.random()*1500)));


};
appearAfterDelay();

document.getElementById("object").onclick = function(){

    document.getElementById("object").style.display = "none";

    var end = new Date().getTime();

    var timeTaken = (end-start) / 1000; 

    if (timeTaken < bestTime){
        document.getElementById("bestTime").innerHTML = timeTaken;
        bestTime = timeTaken;
    }

    document.getElementById("timeTaken").innerHTML = " " + timeTaken + " seconds.";

    appearAfterDelay();
}