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
        "name":"Shay nắng - AMEE",
        "link":"https://tainhacmienphi.biz/get/song/api/403015",
        "poster":"https://images.genius.com/d64785e525d77073b3001376411ddfa4.1000x1000x1.webp"
    },
    {
        "name":"Chìm sâu - RPT MCK x Trung Trần",
        "link":"https://tainhacmienphi.biz/get/song/api/366869",
        "poster":"https://nhachot.vn/wp-content/uploads/2022/03/loi-bai-hat-chim-sau-rpt-mck-x-trung-tran-kem-hop-am.jpg"
    },
    {
        "name":"Anh Biết - Nger(MCK)",
        "link":"https://tainhacmienphi.biz/get/song/api/215508",
        "poster":"https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/294514626_1679416932420255_6624298566995376701_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RtHPU70PgxsAX8RUN3m&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT-sFte2oF_AUq2eqSJRFaRB2FacC5t89PaDmgtqPrUtEA&oe=6311035E"
    },
    {
        "name":"Lavie - Wean",
        "link":"https://tainhacmienphi.biz/get/song/api/217570",
        "poster":"https://i1.sndcdn.com/avatars-pc20yBfsYHMIlQC0-zEpkFA-t500x500.jpg"
    },
    {
        "name":"Retrograde - Wean, Naomi",
        "link":"https://tainhacmienphi.biz/get/song/api/145675",
        "poster":"https://i1.sndcdn.com/artworks-000463086828-ybjgww-t500x500.jpg"
    },
    {
        "name":"Mot nguoi vi em - Wean",
        "link":"https://tainhacmienphi.biz/get/song/api/209434",
        "poster":"https://i.ytimg.com/vi/vS85YUO2dX4/maxresdefault.jpg"
    },
    {
        "name":"Áo màu xanh - Wean",
        "link":"https://tainhacmienphi.biz/get/song/api/259990",
        "poster":"https://i1.sndcdn.com/artworks-AQkBvtoR3URp-0-t500x500.jpg"
    },
    {
        "name":"Love U So - Wean",
        "link":"https://tainhacmienphi.biz/get/song/api/233258",
        "poster":"https://i1.sndcdn.com/artworks-AQkBvtoR3URp-0-t500x500.jpg"
    },
    {
        "name":"I Don't Know - Wean",
        "link":"https://tainhacmienphi.biz/get/song/api/235998",
        "poster":"https://i1.sndcdn.com/artworks-AQkBvtoR3URp-0-t500x500.jpg"
    },
    {
        "name":"Tay To - Rapital; MCK; RPT PhongKhin",
        "link":"https://tainhacmienphi.biz/get/song/api/304258",
        "poster":"https://i1.sndcdn.com/artworks-huxHg5W9USkzL7t2-jl8Mfg-t500x500.jpg"
    },

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
    posterMusic.src=listSongClone[i].poster;
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