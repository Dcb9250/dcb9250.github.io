let font;
//let points = [];
let r = 5; let angle =0;
let line1 = 'Music:';
let line2 = 'Beyond the Sound';

let points1;
let points2;


//tv static
let img;

// Start Button
let button;

function preload() {
    font = loadFont('fonts/Rubik80sFade-Regular.ttf');

    // image Load
    img = loadImage('images/_.gif');
    
  }

function setup() {
    let cnv = (createCanvas(windowWidth, windowHeight));
    cnv.position(0,0);

    button = createButton('Start');
    button.size(200,45);
    button.position(width/2 - 100 , height*.9);

    button.mousePressed(openNewPage);

    button.style('background-color', 'rgb(100,80,90)');
    button.style('color', 'rgb(60,48,54)');
    button.style('border', 'none');
    button.style('border-radius', '15px');
    button.style('font-size', '30px');
    button.style('cursor', 'pointer');
    button.style('font-family', 'Rubik80s');
    button.style('box-shadow', '0 0 40px rgba(255,225,255,0.9)');
    button.style('transition', 'all 0.2s ease');

    button.mouseOver(() => {
        button.style('background-color', 'rgb(90,60,80)');
        button.style('transform', 'scale(1.05)');
        button.style('letter-spacing', '4px');
        button.style('filter', 'blur(0.5px)');
    });

    button.mouseOut(() => {
        button.style('background-color', 'rgb(100,80,90)');
        button.style('transform', 'scale(1)');
        button.style('letter-spacing', '1px');
        button.style('filter', 'blur(0px)');
    });
    

    let bounds1 = font.textBounds(line1, 0, 0, 150);
    let bounds2 = font.textBounds(line2, 0, 0, 115);

    // center positions
    let x1 = width / 2 - bounds1.w / 2;
    let x2 = width / 2 - bounds2.w / 2;

    let y1 = height / 2 - 80;
    let y2 = height / 2 + 100;
    points1 = font.textToPoints(line1, x1, y1, 150, {
        sampleFactor: 2,
        simplifyThreshold: 0.5
    });

    points2 = font.textToPoints(line2, x2, y2, 115, {
        sampleFactor: 0.9,
        simplifyThreshold: 0.5
    });

    angleMode(DEGREES);

    // button to continue


  }
  
  
function draw() {
    background(190,180,190);
    image(img, width/100, height/75, windowWidth - (width/100)*2, windowHeight - windowHeight/6 ,0,0, img.width, img.height);
    fill(190,150,170,150);
    noStroke();
    strokeWeight(10);
    stroke(100,80,90);
    rect(width/100, height/75, windowWidth - (width/100)*2, windowHeight - windowHeight/6 , 20);
   
    // reset stroke
    stroke(255);
    strokeWeight(1);
    function drawPoints(pointsArr) {
        for (let i = 0; i < pointsArr.length; i++) {
            if (i % 20 == 0) {
                fill(0,255,255);
            } else {
                fill(255);
            }
            point(pointsArr[i].x + r * sin(angle + i * 20), pointsArr[i].y);
        }
    }
    
    drawPoints(points1);
    drawPoints(points2);
    angle +=50;

    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    button.position(width/2 - 100 , height*.9);

     // recompute positions
     let bounds1 = font.textBounds(line1, 0, 0, 150);
     let bounds2 = font.textBounds(line2, 0, 0, 115);
 
     let x1 = width / 2 - bounds1.w / 2;
     let x2 = width / 2 - bounds2.w / 2;
 
     let y1 = height / 2 - 80;
     let y2 = height / 2 + 100;
 
     points1 = font.textToPoints(line1, x1, y1, 150);
     points2 = font.textToPoints(line2, x2, y2, 115);

}

function openNewPage() {
        window.location.href = '/songSelect.html';
}

function mousePressed() {
    // Toggle fullscreen mode on mouse click
    let fs = fullscreen();
    fullscreen(!fs);
  }


    
