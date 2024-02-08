// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggled = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip');
const playPause = player.querySelector('.play-pause');
const ranges = player.querySelectorAll('.player__slider');

// Build out the functions 
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}
// Hook up the events listeners
video.addEventListener('click', togglePlay);