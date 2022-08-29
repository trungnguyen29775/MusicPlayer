const audio = document.querySelector('audio');
const pauseButton = document.querySelector('.ti-control-pause')
const playButton = document.querySelector('.ti-control-play')
const nextButton = document.querySelector('.ti-control-skip-forward')
const backButton = document.querySelector('.ti-control-skip-backward')
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

function nextMusin()
{
    audio
}

audio.volume=0.3;

pauseButton.addEventListener('click',pauseMusic)
playButton.addEventListener('click',playMusic)
