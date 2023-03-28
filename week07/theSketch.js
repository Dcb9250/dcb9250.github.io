console.log("hello world!");

console.log(1+ 1);

function setup(){
    //runs once
    console.log("hello p5!")
    createCanvas(windowWidth,windowHeight)
    background(230, 150, 190)
}

function draw(){
    //loop run 60 fps
    noFill()
    ellipse(mouseX,mouseY,100)
}