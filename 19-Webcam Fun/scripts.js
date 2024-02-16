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
        // take the pixels out
        let pixels = ctx.getImageData(0,0, width, height);
        //console.log(pixels);
        // mess with pixels
       // pixels = redEffect(pixels);
        pixels = rgbSplits(pixels);
        ctx.globalAlpha = 0.1
        // put them back
         ctx.putImageData(pixels,0,0);
        
    }, 16)
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
function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // BLUE
    
    }
    return pixels; 
}

function rgbSplits(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0] + 200; // RED
        pixels.data[i + 500] = pixels.data[i + 1] + 50; // GREEN
        pixels.data[i - 550] = pixels.data[i + 2] * 0.9; // BLUE
    }
    return pixels;
}


getVideo();

video.addEventListener('canplay', paintToCanvas);