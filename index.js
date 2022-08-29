const audio = document.querySelector('audio');
const pauseButton = document.querySelector('.ti-control-pause')
const playButton = document.querySelector('.ti-control-play')
const nextButton = document.querySelector('.ti-control-skip-forward')
const backButton = document.querySelector('.ti-control-skip-backward')
const loopButton = document.querySelector('.ti-loop')
const shuffleButton = document.querySelector('.ti-control-shuffle')
const titleMusic = document.querySelector('.name-controll-zone h5')
const posterMusic = document.querySelector('.audio-zone img')
let i=0;

const listSong = [
    {
        "name":"Shay nắng - Amee",
        "link":"https://tainhacmienphi.biz/get/song/api/403015",
        "poster":"https://images.genius.com/d64785e525d77073b3001376411ddfa4.1000x1000x1.webp"
    },
    {
        "name":"Chìm sâu - RPT MCK x Trung Trần",
        "link":"https://tainhacmienphi.biz/get/song/api/366869",
        "poster":"https://nhachot.vn/wp-content/uploads/2022/03/loi-bai-hat-chim-sau-rpt-mck-x-trung-tran-kem-hop-am.jpg"
    }
];

var listSongClone = listSong;

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }



function pauseMusic()
{
    audio.pause();
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
}

function playMusic()
{
    audio.play();
    pauseButton.classList.remove('hide')
    playButton.classList.add('hide')
}

function nextMusic()
{
    i+=1;
    if(i==listSong.length)
        i=0;
    posterMusic.src=listSongClone[i].poster;
    titleMusic.textContent=listSongClone[i].name;
    audio.pause();
    audio.src= listSongClone[i].link;
    audio.load();
    audio.play();
}

function previousMusic()
{
    i-=1;
    if(i==-1)
        i=listSongClone.length-1;
    titleMusic.textContent=listSongClone[i].name;
    audio.pause();
    audio.src= listSongClone[i].link;
    audio.load();
    audio.play();
}

function loopMusic()
{
    let loop = audio.loop;
    audio.loop=!loop;
    if(loopButton.classList.contains('active'))
    {
        loopButton.classList.remove('active');
    }
    else
    {
        loopButton.classList.add('active')
    }
}

function shuffleMusic()
{
    
    if(shuffleButton.classList.contains('active'))
    {
        shuffleButton.classList.remove('active');
    }
    else
    {
        shuffleButton.classList.add('active')
    }
    shuffle(listSongClone);
}

audio.volume=0.3;
audio.addEventListener('ended',nextMusic)
console.log(listSong);
pauseButton.addEventListener('click',pauseMusic);
playButton.addEventListener('click',playMusic);
nextButton.addEventListener('click',nextMusic);
backButton.addEventListener('click',previousMusic);
loopButton.addEventListener('click',loopMusic);
shuffleButton.addEventListener('click',shuffleMusic)