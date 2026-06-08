const records = [
    { id: 1, color: '#699FA2', name: 'Angel', description: "This song reminds me of my childhood and the simplicity of just being a kid and being surrounded by the love of my family. The moving bassline and upbeat rhythm of the song just adds to the experience of joy I feel when listening to this song. It invokes a specific memory of being in the car with my mom, listening to the radio. I remember that every time this song came on, she would turn to me and say, \"This is your song because you're my angel.\" ", img: 'images/Visualizer_Records-02.png'},
    { id: 2, color: '#2D234C', name: 'Pursuit of Happiness' , description: 'This song is the epitome of the feeling of like hanging out with friends, no responsibilities, just pure energy and enjoyment of life. Think those pure moments of bliss; staying up all night, late-night drives, rollerskating on the street, exploring the city with no real destination. While it is a song that is very “vibey” and upbeat, once you inspect the lyrics more, there is a bit more meaning to this song. It also reminds me of a time where I didn’t really think much of the future, where sometimes these fleeting moments of joy were all I had to look forward to when life got so stressful.', img: 'images/Visualizer_Records-03.png'},
    { id: 3, color: '#CC6666', name: 'Prom', description: "Prom is very representative of my feelings on life now. As graduation nears, the pressure and reality of being an real adult grows. But, as I’m sure a lot of us feel, I don’t feel ready. I sometimes feel insecure in my ability to be a proper functioning adult. Like SZA sings, I feel like I need more time sometimes. Beyond the meaning of this song, I honestly love the way it sounds and it’s such a fun listen. It is so poppy and whimsical and is a song I routinely have on my morning commute.", img: 'images/Visualizer_Records-04.png' }
];



let currentIndex = 1;
let selectedRecord = null;

const selectionScreen = document.getElementById('selectionScreen');
const songScreen = document.getElementById('songScreen');
const recordsContainer = document.getElementById('recordsContainer');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const backBtn = document.getElementById('backBtn');
const playBtn = document.getElementById('playBtn');
const songCircle = document.getElementById('songCircle');
const songTitle = document.getElementById('songTitle');
const songDesc = document.getElementById('songDesc')


function renderRecords() {
    const recordDivs = document.querySelectorAll('.record');

    recordDivs.forEach((div, index) => {
        const isCenter = index === currentIndex;

        div.style.width = (isCenter ? 450 : 356) + 'px';
        div.style.height = (isCenter ? 450 : 356) + 'px';
        div.style.opacity = isCenter ? 1 : 0.6;

        div.classList.toggle('clickable', isCenter);
        div.classList.toggle('center', isCenter);
        div.classList.toggle('side', !isCenter);
    });
}

function initRecords() {
    records.forEach((record, index) => {
        const div = document.createElement('div');
        div.className = 'record';

        div.style.backgroundImage = `url(${record.img})`;
        div.style.backgroundSize = 'cover';
        div.style.backgroundPosition = 'center';

        div.onclick = () => {
            if (index === currentIndex) {
                openSongScreen(index);
            }
        };

        recordsContainer.appendChild(div);
    });
}

function updateButtons() {
    leftBtn.disabled = currentIndex === 0;
    rightBtn.disabled = currentIndex === 2;
}

function handleScroll(direction) {
    if (direction === 'left' && currentIndex > 0) currentIndex--;
    else if (direction === 'right' && currentIndex < 2) currentIndex++;
    renderRecords();
    updateButtons();
}

function openSongScreen(index) {
    selectedRecord = records[index];
    songCircle.style.backgroundImage = `url(${selectedRecord.img})`;
    songTitle.textContent = selectedRecord.name;
    songTitle.style.color = selectedRecord.color;
    songDesc.textContent = selectedRecord.description;
    selectionScreen.classList.remove('active');
    songScreen.classList.add('active');
    playBtnSvg.style.fill = selectedRecord.color;
    songTitle.style.textShadow = `
    0 0 10px ${selectedRecord.color},
    0 0 20px ${selectedRecord.color}
`;

}

function closeSongScreen() {
    selectionScreen.classList.add('active');
    songScreen.classList.remove('active');
    selectedRecord = null;
}



leftBtn.onclick = () => handleScroll('left');
rightBtn.onclick = () => handleScroll('right');
backBtn.onclick = closeSongScreen;
playBtn.onclick = () => openNewPage(currentIndex);

window.onkeydown = (e) => {
    if (songScreen.classList.contains('active')) return;
    
    if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handleScroll('left');
    } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleScroll('right');
    }
};

initRecords();
renderRecords();
updateButtons();

function openNewPage(index) {
    if (index == 1) {
        window.location.href = '/song2.html';
    } else if (index == 2) {
        window.location.href = '/song3.html' ;
    } else {
        window.location.href = '/index.html';
    }
}


