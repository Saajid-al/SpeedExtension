document.getElementById("Decrease_Button").addEventListener("click", DecreaseSpeed);

function DecreaseSpeed(){ 
    console.log("CLICKED_DECREASE")
    document.querySelector('video').playbackRate -= 0.5;
    console.log("Speed is increased to : ", document.querySelector('video').playbackRate)


}
document.getElementById("Increase_Button").addEventListener("click", IncreaseSpeed);
function IncreaseSpeed(){ 
    console.log("CLICKED INCREASE")
    document.querySelector('video').playbackRate += 0.5;
    console.log("Speed is increased to : ", document.querySelector('video').playbackRate)
}

