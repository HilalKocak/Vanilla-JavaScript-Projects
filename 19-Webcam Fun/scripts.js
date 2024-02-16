const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
    navigator.mediaDevices.getUserMedia({video:true, audio:false})
    .then(localMediaStream => {
        console.log(localMediaStream);
        video.srcObject = localMediaStream;
        video.play();
         
    })

    .catch(err => {
        console.log('YOU DENIED THE WEBCAM', error)
    });
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    console.log(width, height)
    canvas.width = width;
    canvas.height  = height;

    setInterval(()=> {
        ctx.drawImage(video, 0, 0, width, height);
    })
}

function takePhoto() {
    // play the sound
    snap.currenttime = 0;
    snap.play();

    // take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
    console.log(data) // text representation of image

    const link = document.createElement('a')
    link.href = data;
    link.setAttribute('download', 'pretty');
    // link.textContent = 'Download Image';
    link.innerHTML = `<img src="${data}" alt="Nice people" />`
    strip.insertBefore(link, strip.firstChild);

}


getVideo();

video.addEventListener('canplay', paintToCanvas);