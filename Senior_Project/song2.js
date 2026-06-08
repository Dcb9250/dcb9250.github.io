//Lyrics
let subtitleArray = [];
let subtitleCueArray = [];
let index = -1;
let subtitle;

let mySound;

let c1,c2;
let bg;

//nav button
let btn;

//sound variables
let bam;
let trem;
let midVal = 0;

let prevBass = 0;
let burst = 0;

// particle setup
let inc = 0.01;
let scl = 20;
let rows;
let cols;
let field;
let zoff = 0;
let particleNum = 250;
let particles = [];


function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('/Pursuit Of Happiness (nightmare).mp3');

  myFont = loadFont('/fonts/Rubik80sFade-Regular.ttf');

  img = loadImage('images/Street_Overlay.png');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  c1 = color(30, 20, 50);
  c2 = color(130, 90, 70);

  background(30, 20, 50);

  fft = new p5.FFT(0.9 ,256);

  //particles
  cols = floor(width / scl);
  rows = floor(height/2 / scl);
  field = new Array(rows * cols);
  for (let i = 0; i < particleNum; i++) {
      particles[i] = new Particle();
  }

  //lyric stuff
  insertText();
  insertCue();

  //lyrics stuff
  subtitle = createDiv('');
  subtitle.position(50,50);
  subtitle.style('font-family', myFont);
  subtitle.style('color', 'white');
  subtitle.style('font-size', '75px');
  subtitle.style('max-width', '90%');
  subtitle.style('text-shadow', '0px 0px 10px black');
  subtitle.style('font-family', 'Marker');

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
  fill(30, 20, 50, 25);
  rect(0, 0, width, height);

  //background(30, 20, 50);
  //stroke(255);
  if (burst > 1) {
    fill(255, 50 * burst);
    rect(0, 0, width, height);
  }
  
  let spectrum = fft.analyze();
  
  bass = fft.getEnergy("bass");
  mid = fft.getEnergy("mid");
  treble = fft.getEnergy("treble");
  
  bam = lerp(bam || 0, map(bass, 0, 255, 0.5, 6), 0.1);
  midVal = lerp(midVal || 0, map(mid, 0, 255, 0, 1), 0.1);
  trem = lerp(trem || 0, map(treble, 0, 255, 0, 2), 0.1);

  let bassDiff = bass - prevBass;

  // detect sudden jump
  if (bassDiff > 40) {   // tweak threshold if needed
    burst = 1;           // trigger burst
  }

prevBass = bass;

  circle(width/3, height/3 +100, bass*2);
  circle(50, 50, mid);
  circle(width * (6/7), 400, treble);


  let xoff;
  let yoff = 0;
  strokeWeight(1);
  stroke(1);
  for (let y = 0; y < rows; y++) {
      xoff = 0;
      for (let x = 0; x < cols; x++) {
        let index = x + y * cols;
        let angle = noise(
          xoff * (1 + trem),
          yoff * (1 + trem),
          zoff
        ) * TWO_PI;
        field[index] = p5.Vector.fromAngle(angle);
        field[index].setMag(2);
        /*
        push();
        translate(x * scl, y * scl);
        rotate(field[index].heading());
        line(0, 0, scl, 0);
        pop(); */
        xoff += inc;
      }
      yoff += inc;
      zoff += 0.0001;
    }
  let speedBoost = bam + burst * 10;  // 🔥 big spike multiplier
  
  for (let i = 0; i < particleNum; i++) {
    particles[i].follow(field, scl, cols);
    particles[i].update(bam);
    particles[i].show();
    particles[i].update(speedBoost);
  }





  image(img,-100,windowHeight/5, windowWidth + 150,windowHeight* (9/10));
  
  timeSubtitles();
  showText();

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
  subtitleArray.push(
    "...","Mm, ayy-oh",
    "Hey",
    "Ratatat, yeah",
    "Na-na-na-na,\nNa-na-na-na",
    "Crush a bit, lil' bit, roll it up, take a hit",
    "Feelin' lit, feelin' right, 2 a.m., summer night",
    "I don't care, hand on the wheel, drivin' drunk, I'm doin' my thing",
    "Rollin' the Midwest side and out",
    "livin' my life, gettin' our dreams",
    "People told me slow my roll, I'm screamin' out, - that",
    "I'ma do just what I want, lookin' ahead, no turnin' back",
    "If I fall, if I die, know I lived it to the fullest",
    "If I fall, if I die, know I lived and missed some bullets",
    "I'm on the pursuit of happiness, and I know",
    "Everything that shine ain't always gonna be gold, hey",
    "I'll be fine once I get it",
    "I'll be good",
    "I'm on the pursuit of happiness and I know",
    "Everything that shine ain't always gonna be gold, hey",
    "I'll be fine once I get it",
    "I'll be good",
    "Tell me, what you know about dreamin'",
    "dreamin'?",
    "You don't really know about",
    "nothin'",
    "-nothin'",
    "Tell me, what you know about the night terrors every night?",
    "5 a.m., cold sweats, wakin' up to the sky",
    "Tell me, what you know about",
    "dreams",
    "dreams?",
    "Tell me, what you know about night terrors? Nothin'",
    "You don't really care about the trials of tomorrow",
    "Rather lay awake in the bed full of sorrow",
    "I'm on the pursuit of happiness, and I know",
    "Everything that shine ain't always gonna be gold, hey",
    "I'll be fine once I get it",
    "I'll be good",
    "I'm on the pursuit of happiness, and I know",
    "Everything that shine ain't always gonna be gold, hey",
    "I'll be fine once I get it",
    "I'll be good",
    "I'm on the pursuit of happiness",
    "I know everything that shine ain't always gold",
    "I'll be fine once I get it",
    "I'll be good",
    "*Guitar Solo*",
    "I'm on the pursuit of happiness, and I know",
    "Everything that shine ain't always gonna be gold, hey",
    "I'll be fine once I get it",
    "I'll be good",
    "I'm on the pursuit of happiness, and I know",
    "Everything that shine ain't always gonna be gold, hey",
    "I'll be fine once I get it",
    "I'll be good",
    "Pursuit of happiness",
    "yeah",
    "Oh, oh, man, oh, ugh",
    "Oh, oh, man, oh, ugh",
    "The room's spinnin', room's spinnin'",
    "Pat, Zuli, wait!",
    "Oh, f-",
    "Oh my God, why'd I drink so much and smoke so much? Ah",
    "Oh, f-"
  );
}

//Time stamp copied and pasted from console
function insertCue() {
subtitleCueArray.push( 0,4.98,8.77,
    12.78,
    15.41,
    23.85,
    29.34,
    33.41,
    37.74,
    39.79,
    41.94,
    46.64,
    50.28,
    54.47,
    58.63,
    62.51,
    67.71,
    71.13,
    75.17,
    79.21,
    84.28,
    88.49,
    91.81,
    94.92,
    96.18,
    97.97,
    99.01,
    100.3,
    104.36,
    108.47,
    110.46,
    111.55,
    112.58,
    116.82,
    120.89,
    125.17,
    129.15,
    134.38,
    138.42,
    141.73,
    145.81,
    150.94,
    154.99,
    158.49,
    161.7,
    166.68,
    170.98,
    175.12,
    208.6,
    212.39,
    217.6,
    221.63,
    224.94,
    229.14,
    234.32,
    238.08,
    241.68,
    246.22,
    247.55,
    255.35,
    266.9,
    269.81,
    276.64,
    278.19,
    284.53,
    291.25
  
   );
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  subtitle.position(50, 50);
  btn.position(width - 250 , height*.9);

}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.prev = this.pos.copy();
    this.weightOffset = random(0.2, 1);
  }
  
  show() {
    let col = lerpColor(
      color(200, 200, 255),
      color(255, 200, 200),
      midVal
    );
  
    stroke(col);
    strokeWeight(bam * this.weightOffset);
  
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
    this.prev = this.pos.copy();
  }
  
  update(maxSpeed) {
    if (this.pos.x > width) {
        this.pos.x = 0;
    }
    if (this.pos.x < 0) {
        this.pos.x = width;
    }
    if (this.pos.y > height) {
        this.pos.y = 0;
    }
    if (this.pos.y < 0) {
        this.pos.y = height;
    }
    this.prev = this.pos.copy();
    this.vel.add(this.acc);
    this.vel.limit(maxSpeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  
  follow(flowfield, scl, cols) {
    let x = floor(this.pos.x / scl);
    let y = floor(this.pos.y / scl);
    let index = x + y * cols;
    let force = flowfield[index];
    this.applyForce(force);
  }
  
  applyForce(force) {
    this.acc.add(force);
  }
}

function openNewPage() {
  window.location.href = 'songSelect.html';
}
