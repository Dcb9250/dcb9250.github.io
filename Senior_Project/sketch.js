let img;
let mySound;
//audio portions
var bass;
var mid;
var treble;
var w;
//Lyrics
let subtitleArray = [];
let subtitleCueArray = [];
let index = -1;
let subtitle;

//nav button
let btn;

//scribble
let scrib;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('/Shaggy - Angel ft. Rayvon (Official Music Video).mp3');

  myFont = loadFont('fonts/Rubik80sFade-Regular.ttf');
}

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 1);

  fft = new p5.FFT(0.6 ,256);
  w = width/ 256;
  img = loadImage('/Car_Overlay.png');

  scrib = new Scribble();

  c1 = color(250, 5, 100);
  c2 = color(120,20,60);

  //lyric stuff
  insertText();
  insertCue();

  //lyrics stuff
  subtitle = createDiv('');
  subtitle.position(50, windowHeight - 150);
  subtitle.style('color', 'white');
  subtitle.style('font-size', '90px');
  subtitle.style('max-width', 'width - 50px');
  subtitle.style('font-family', 'ReenieBeenie, system-ui, sans-serif');
  subtitle.style('textAlign', 'center');
  subtitle.style('bottom', '95%');

  btn = createButton('Back to Titles');
  btn.size(200,45);
  btn.position(width - 200 , height*.9);
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
  background(220, 20, 100);
  
  noFill();
  stroke(0, 0, 100);
  strokeWeight(4);
  scrib.roughness = 2; 
  scrib.scribbleCurve( width/2 - 200, height/2 + 75, width * (4/3), height/2 - 175, width * (2/3), height/8, width , height/15 );
  scrib.scribbleCurve( width/2 - 200, height/2 + 100, width * (4/3), height/2 - 125, width * (2/3), height/8, width , height/15 );
  scrib.scribbleCurve( width/2 - 200, height/2 + 125, width * (4/3), height/2 -75, width * (2/3), height/8, width , height/15 );
  scrib.scribbleCurve( width/2  -200, height/2 + 150, width * (4/3), height/2 -25, width * (2/3), height/8, width , height/15 );
  scrib.scribbleCurve( width/2 - 200, height/2 + 175, width * (4/3), height/2 + 125, width * (2/3), height/8, width , height/15 );
  // animS.circle('c1', 100, 430, 320, 150, 100);
  // animS.circle('c2', 100, 250, 300, 200, 100);

  // animS.circle('c4', 100, 300, 350, 170, 90);
  // animS.circle('c5', 100, 150, 325, 90, 90);

  let spectrum = fft.analyze();
  stroke(0,0,100);
  fill(255, 0, 255);
  for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height , 0);
    scrib.scribbleRect( x, height, width / spectrum.length, h * 2 );
    //rect(x, height, width / spectrum.length, h );
  }
  bass = fft.getEnergy("bass");
  mid = fft.getEnergy("mid");
  treble = fft.getEnergy("treble");

    var trey = map(treble,0,256,0,height);
    //scrib.bowing = 50;

    if (treble > 120 ){
      stroke(mid,230,200,.2);
      strokeWeight(5);
      noFill();
      scrib.scribbleCurve( width/2 - 200, height/2 + 75, width * (4/3), height/2 - 175, width * (2/3), height/8, width , height/15 );
      stroke(trey,50,100,.2);
      scrib.scribbleCurve( width/2 - 200, height/2 + 100, width * (4/3), height/2 - 125, width * (2/3), height/8, width , height/15 );
      stroke(bass,50,100,.2);
      scrib.scribbleCurve( width/2 - 200, height/2 + 125, width * (4/3), height/2 -75, width * (2/3), height/8, width , height/15 );
      stroke(100,50,100,.2);
      scrib.scribbleCurve( width/2  -200, height/2 + 150, width * (4/3), height/2 -25, width * (2/3), height/8, width , height/15 );
      stroke(20, 50,100,.2);
      scrib.scribbleCurve( width/2 - 200, height/2 + 175, width * (4/3), height/2 + 125, width * (2/3), height/8, width , height/15 );
      //scrib.scribbleEllipse(width/2, height/2 +75, bass,bass);
      //line(i*w,0,i*w,trey);   
        
    }


    fill(55,25,225);
    strokeWeight(2);
    var bay = map(bass,0,256,0,330);
    stroke(bay,20,100,.2);
    scrib.scribbleEllipse(width/2, height/2, bass,bass);
    //circle(width/2,height/2, bass);   

  
  

  
  noFill();
 




  fill(15,75,10);
  rect(0, height -150, width, 155);

  image(img,0,5,windowWidth, windowHeight);
  scrib.roughness = .5;
  scrib.scribbleEllipse(0, height, mid,mid);
  timeSubtitles();
  showText();

}
// end of draw

 //Show appropriate subtitle using the recorded time stamps 
function timeSubtitles() {
  for (let i = 0; i < subtitleCueArray.length; i ++){
    if (mySound.currentTime()>=subtitleCueArray[i]){
      index = i;
    } 
  }
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
  subtitle.html(subtitleArray[index]);
}

function insertText() {
  subtitleArray.push(  "...",
  "Now this one's dedicated to all the boys",
  "Who want to say nice things to them girls",
  "Treat her like diamonds and pearls",
  "Dedicated to all the girls around the world",
  "Now this is Rayvon and Shaggy with a combination you can't miss",
  "Flip this one 'pon the musical disc",
  "Well",
  "Ah, ah, wah, wah, wah",
  "Girl, you're my angel",
  "You're my darling angel",
  "Closer than my peeps you are to me,",
  "baby",
  "Shorty, you're my angel",
  "You're my darling angel",
  "Girl, you're my friend",
  "When I'm in need,",
  "lady",
  "Life is one big party when you're still young",
  "But who's gonna have your back when it's all done",
  "(Yeah)",
  "It's all good when you're little, you have pure fun",
  "Can't be a fool, son, what about the long run?",
  "Looking back shorty always ah mention",
  "Said me not giving her much attention",
  "(Yeah)",
  "She was there through my incarceration",
  "I wanna show the nation",
  "my appreciation",
  "Girl, you're my angel",
  "You're my darling angel",
  "Closer than my peeps you are to me,",
  "baby",
  "Shorty, you're my angel",
  "You're my darling angel",
  "You're my darling angel",
  "Girl, you're my friend",
  "When I'm in need, lady",
  "You're a queen and that's how you should be treated (Ah)",
  "Though you never get the lovin' that you needed",
  "(Yah)",
  "Could have left, but I called and you heeded",
  "Begged and I pleaded, mission completed",
  "Mama said that I and I dissed the program",
  "Not the type to mess around with your emotion",
  "But the feeling that I have for you is so strong",
  "Been together so long",
  "And this could never be wrong",
  "Girl, you're my angel",
  "You're my darling angel",
  "(Ah)",
  "Closer than my peeps you are to me,",
  "baby (Tell her, tell her)",
  "Shorty, you're my angel",
  "You're my darling angel",
  "Girl, you're my friend",
  "When I'm in need, lady (Uh, uh)",
  "Girl, in spite of my behavior",
  "Said I'm your savior",
  "(You must be sent from up above)",
  "And you appear to me so tender",
  "Say girl I surrender",
  "(Thanks for giving me your love)",
  "Girl, in spite of my behavior",
  "Well, you ah mi savior",
  "(You must be sent from up above)",
  "And you appear to me so tender",
  "Well, girl I surrender",
  "(Said, thanks for giving me your love)",
  "Now life is one big party when you're still young",
  "And who's gonna have your back when it's all done",
  "It's all good when you're little, you have pure fun",
  "Can't be a fool, son, what about the long run?",
  "(Yeah)",
  "Looking back shorty always ah mention",
  "Said, me not giving her much attention",
  "She was there through my incarceration",
  "I wanna show the nation my appreciation",
  "Girl, you're my angel",
  "You're my darling",
  "angel (uh, wah)",
  "Closer than my peeps you are to me,",
  "baby (sing ah, sing ah)",
  "Shorty, you're my angel",
  "You're my darling angel (uh)",
  "Girl, you're my friend",
  "When I'm in need,",
  "lady",
  "Girl, you're my angel",
  "You're my darling angel",
  "Closer than my peeps you are to me,",
  "baby (tell em)",
  "Shorty, you're my angel",
  "You're my darling angel",
  "irl, you're my friend",
  "When I'm in need,",
  "lady");
}

//Time stamp copied and pasted from console
function insertCue() {
subtitleCueArray.push(
  0.0,3.88,
  6.17,
  8.65,
  11.59,
  13.87,
  18.47,
  21.9,
  22.53,
  26.35,
  28.31,
  31.84,
  35.4,
  37.66,
  39.67,
  43.02,
  44.84,
  47.1,
  48.88,
  51.54,
  54.36,
  54.85,
  57.07,
  59.9,
  62.66,
  65.5,
  66.1,
  68.26,
  69.78,
  71.16,
  73.35,
  76.84,
  80.39,
  82.58,
  84.67,
  86.61,
  88.02,
  89.84,
  93.76,
  96.44,
  99.45,
  99.94,
  102.1,
  104.95,
  107.82,
  110.74,
  113.33,
  114.71,
  116.35,
  118.43,
  121.45,
  121.91,
  125.81,
  127.72,
  129.7,
  133.07,
  134.81,
  138.87,
  140.81,
  142.32,
  144.49,
  146.49,
  147.99,
  150.16,
  152.06,
  153.65,
  155.74,
  157.64,
  159.13,
  161.34,
  164.02,
  166.92,
  169.64,
  172.36,
  173.12,
  175.25,
  178.13,
  180.85,
  183.7,
  185.92,
  187.81,
  189.29,
  193.41,
  195.21,
  197.28,
  200.68,
  202.35,
  204.66,
  206.33,
  208.52,
  211.89,
  215.79,
  217.67,
  219.83,
  223.27,
  224.93,
  227.11,
  );
}

//Draws a linear gradient on the screen using a for loop and lerpColor
    function gradientFilter() {
      let startColor = color(0, 100, 50);
      let endColor = color(60, 100, 50);
      for (let y = 0; y < height; y += 1) {
        let amt = map(y, 0, height, 0, 1);
        let gradColor = lerpColor(startColor, endColor, amt);
        stroke(gradColor);
        line(0, y, width, y);
      }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  subtitle.position(50, windowHeight - 150);

}

function openNewPage() {
  window.location.href = 'songSelect.html';
}