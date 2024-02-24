let countdown; 

function timer(seconds){
    const  now = Date.now(); // When timer started
    const then = now + seconds * 1000;
    console.log(then)
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        // check if we should stop it
        if(secondsLeft <= 0){
            clearInterval(countdown);
            return; // Return here to exit the setInterval function
        }

        // display it
        console.log(secondsLeft)
    }, 1000)
}
