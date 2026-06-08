//Lyrics
let subtitleArray = [];
let subtitleCueArray = [];
let index = -1;
let subtitle;

let mySound;

let c1,c2;

//nav button
let btn;

// Creating an array to store the flowers
let flowersTop = [];
let flowersBottom = [];
//variables
// set max number of flowers
let maxTop = 25;
let maxBottom = 16;
//setting a uniform speed for the spinning flowers
let startX = 0;
let startY = 0;

//sound variables
let bam;
let trem;

//scribble
let scrib = new Scribble();

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('/SZA - Prom (Audio).mp3');

  font = loadFont('/fonts/Rubik80sFade-Regular.ttf');

  img = loadImage('/images/Prom_Overlay.png');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  c1 = color(220,235,227);
  c2 = color(200, 55, 30);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }

  fft = new p5.FFT(0.4 ,256);


  //lyric stuff
  insertText();
  insertCue();

  //lyrics stuff
  subtitle = createDiv('');
  subtitle.position(50,100);
  subtitle.style('font-family', 'Courier New');
  subtitle.style('color', 'white');
  subtitle.style('font-size', '90px');
  subtitle.style('max-width', '90%');
  subtitle.style('text-shadow', '0px 0px 10px pink');
  subtitle.style('font-family', 'Barrio');

  btn = createButton('Back to Titles');
  btn.size(200,45);
  btn.position(width - 250 , height*.9);
  btn.mousePressed(openNewPage);
  btn.style('border-radius', '25px');
  btn.style('font-size', '20px');
  btn.style('font-family', 'Rubik80s');
  btn.style('background', 'rgba(255,255,255,0.1)');
  btn.style('backdrop-filter', 'blur(10px)');
  btn.style('border', '2px solid white');
  btn.style('color', 'white');
  btn.style('box-shadow', '0 0 20px rgba(255,255,255,0.4)');
  btn.style('cursor', 'pointer');
  btn.style('transition', 'all 0.2s ease');
  btn.hide();

  mySound.play();
}


function draw() {
    for(let y=0; y<height; y++){
        n = map(y,0,height,0,1);
        let newc = lerpColor(c1,c2,n);
        stroke(newc);
        line(0,y,width, y);
      }

  stroke(255);
  
  let spectrum = fft.analyze();
  
  bass = fft.getEnergy("bass");
  mid = fft.getEnergy("mid");
  treble = fft.getEnergy("treble");
  
  bam = map(bass, 0, 256, 0, 2.3);
  trem = map(treble, 0, 256, 0.2, 2.3);

  
  
  fill(255,230,150); 

  //circle(10, 10, mid);
  scrib.roughness = .5; 
  scrib.scribbleEllipse( 0, 0, mid*2, mid*2 );





  image(img,-100,windowHeight/5, windowWidth + 190,windowHeight* (9/10));
  
  timeSubtitles();
  showText();

  // top flowers
  for (let f of flowersTop) {
    f.display(trem);
  }


    // bottom flowers
    for (let f of flowersBottom) {
      f.display(bam);
    }

    // generate bottom
    if (flowersBottom.length < maxBottom) {
      flowersBottom.push(
        new Flower(10, width - 50, height/2 + 250, height, flowersBottom,50,90)
      );
    }
  


    // generate top
    if (flowersTop.length < maxTop) {
      flowersTop.push(
        new Flower(50, width - 250, height/2 + 50, height/2 + 220, flowersTop,10,35)
      );
    }

}
// end of draw

function timeSubtitles() {
    let currentTime = mySound.currentTime();
  
    for (let i = subtitleCueArray.length - 1; i >= 0; i--) {
      if (currentTime >= subtitleCueArray[i]) {
        index = i;
        return;
      }
    }
  
    index = -1;
  }

//play and pause song
function mouseClicked() {
  if (!mySound.isPlaying()) {
    mySound.play();
    btn.hide();
  } else {
    mySound.pause();
    btn.show();
  }
}


function showText() {
    subtitle.html(subtitleArray[index] || "");
  }

function insertText() {
  subtitleArray.push( "...","Fearing not growing up",
  "Keeping me up at night",
  "Am I doing enough?",
  "Feel like I'm wasting time (But I)",
  "Promise to get a little",
  "Better as I get older",
  "And you're so patient",
  "And sick of waiting",
  "Promise to do better",
  "-Shoulda -coulda, -Prolly wanna let me go",
  "But you can't, oh",
  "Right now I feel it pouring",
  "I need a little bit",
  "Just a little bit",
  "(-Just a little bit)",
  "Right now I feel it pouring",
  "I need a little bit",
  "Just a little bit<br>-Just a little bit",
  "Please don't take it, don't take it personal",
  "Like I know you usually do",
  "Please don't take it, don't take it personal",
  "Like I know you usually do",
  "Please",
  "-please",
  "Don't take it",
  "per-",
  "so-",
  "nal",
  "Don't take it",
  "Personal, darling, like I know you will",
  "ooo-ooo-ooo",
  "Forget to call your mama on the weekend",
  "You should put yourself in time out",
  "(Sh- sh- shame, sh- sh- shame on you)",
  "But lately you've been feeling so good",
  "I forget my future, never pull out",
  "(Sh- sh- shame, sh- sh- shame on me)",
  "Maybe the money'll make it easier",
  "For me to run and hide out somewhere",
  "(So far away)",
  "Hopping through poppy fields,dodging evil witches",
  "These houses keep dropping everywhere",
  "Promise to get a little",
  "Better as I get older",
  "And you're so patient",
  "And sick of waiting",
  "Promise to do better",
  "-Shoulda -coulda",
  "-Prolly wanna let me go",
  "But you can't, oh",
  "Right now I feel it pouring",
  "I need a little bit",
  "Just a little bit",
  "(-Just a little bit)",
  "Right now it's really pouring",
  "I need a little bit",
  "Just a little bit",
  "(-Just a little bit)",
  "Please don't take it, don't take it personal",
  "Like I know you usually do",
  "Please don't take it, take it personal",
  "Like I know you usually do",
  "Like rain is falling, it's heavy",
  "Take it off me, all it off",
  "Rain, I can't stand this",
  "Snow is falling all on me");
}

//Time stamp copied and pasted from console
function insertCue() {
subtitleCueArray.push(
    0,17.5,
    22.2,
    26.17,
    30.14,
    33.43,
    36.69,
    38.52,
    40.5,
    42.56,
    44.83,
    47.93,
    49.83,
    51.93,
    53.82,
    55.79,
    57.86,
    60.18,
    62.07,
    65.04,
    70.68,
    73.39,
    78.69,
    81.77,
    83.34,
    84.05,
    85.79,
    86.46,
    87.1,
    88.17,
    89.91,
    92.51,
    95.41,
    100.41,
    103.07,
    105.89,
    108.58,
    110.94,
    113.95,
    116.46,
    119.97,
    121.47,
    125.55,
    129.8,
    131.85,
    134.69,
    136.47,
    138.88,
    140.89,
    142,
    143.83,
    145.83,
    148,
    149.8,
    151.81,
    153.83,
    156.07,
    157.88,
    159.86,
    161.82,
    166.21,
    169.78,
    174.71,
    178.32,
    182.82,
    186.87,
    190.39,
    193.89);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  subtitle.position(50, 50);

}

//function to draw the flower
function drawFlower(size, petalColor, energy) {
  let petalCount = 10; 
  let petalLength = size * 0.8;
  let petalWidth = size * 0.3;

  stroke(255);
  strokeWeight(1);
  fill(petalColor);

  for (let i = 0; i < petalCount; i++) {
    push();
    rotate(TWO_PI / petalCount * i);
    translate(6, 6);


    ellipse(
      petalLength / 2,
      -6,
      petalLength,
      petalWidth * energy   // 🔥 ONLY driver
    );

    pop();
  }
}

class Flower {
  constructor(xMin, xMax, yMin, yMax, existingFlowers,minSize, maxSize,vol) {
    this.size = random(minSize, maxSize);
    this.color = color(random(175, 255), random(150, 200), random(150, 255), map(this.size, minSize, maxSize, 120, 200));
    this.angle = 0;

    let positionValid = false;

    while (!positionValid) {
      this.x = random(xMin, xMax);
      this.y = random(yMin, yMax);

      positionValid = true;

      for (let other of existingFlowers) {
        let d = dist(this.x, this.y, other.x, other.y);
        if (d < (this.size + other.size) * 0.8) {
          positionValid = false;
          break;
        }
      }
    }
  }

  
 display(energy) {
  push();
  translate(this.x, this.y);
  drawFlower(this.size, this.color, energy);
  pop();
  }
}

function openNewPage() {
  window.location.href = 'songSelect.html';
}

