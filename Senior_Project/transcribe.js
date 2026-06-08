let syncMode = false;
let tempLyrics = [];
let mySound;
let lastTap = 0;

function preload() {
  soundFormats('mp3');
  mySound = loadSound('Shaggy - Angel ft. Rayvon (Official Music Video).mp3');
}

function setup() {
  createCanvas(400, 400);

  let syncBtn = createButton("Start Sync Mode");
  syncBtn.position(20, 20);

  syncBtn.mousePressed(() => {
    userStartAudio(); // required for browser audio
    syncMode = true;
    mySound.play();
    console.log("SYNC MODE ON — press SPACE for each lyric, press E to export");
  });
}

function draw() {
  background(220);

  fill(0);
  textSize(16);

  if (syncMode) {
    text("SYNC MODE", 20, 60);
    text("Time: " + mySound.currentTime().toFixed(2), 20, 80);
    text("Press SPACE to add lyric", 20, 100);
    text("Press E to export", 20, 120);
  } else {
    text("Click 'Start Sync Mode' to begin", 20, 60);
  }
}

function keyPressed() {
  // EXPORT
  if (key === "E" || key === "e") {
    exportLyrics();
    return;
  }

  if (!syncMode) return;

  // TAP TO SYNC
  if (key === " ") {
    let now = millis();
    if (now - lastTap < 200) return; // debounce
    lastTap = now;

    mySound.pause();

    let t = mySound.currentTime();

    let lyric = prompt("Enter lyric for time: " + t.toFixed(2));

    if (lyric !== null && lyric.trim() !== "") {
      tempLyrics.push({
        time: t,
        text: lyric
      });

      console.log("Added:", t.toFixed(2), lyric);
    }

    // rewind slightly for smoother syncing
    mySound.jump(max(0, t - 0.3));
    mySound.play();
  }
}

function exportLyrics() {
  if (tempLyrics.length === 0) {
    console.log("No lyrics recorded.");
    return;
  }

  // ensure correct order
  tempLyrics.sort((a, b) => a.time - b.time);

  let cues = [];
  let texts = [];

  for (let i = 0; i < tempLyrics.length; i++) {
    cues.push(Number(tempLyrics[i].time.toFixed(2)));
    texts.push(tempLyrics[i].text);
  }

  console.log("subtitleCueArray =", JSON.stringify(cues, null, 2));
  console.log("subtitleArray =", JSON.stringify(texts, null, 2));
}