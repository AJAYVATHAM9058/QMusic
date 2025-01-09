let play_pause = document.getElementById("play_pause");
let audio_element = new Audio("./Songs/lightOfSevenSong2.mp3");

play_pause.addEventListener("click",()=>{

    if(audio_element.paused || audio_element.currentTime==0){
        audio_element.play()

        play_pause.classList.remove("fa-play")
        play_pause.classList.add("fa-pause")
    }
    else{
        audio_element.pause()
        play_pause.classList.remove("fa-pause");
        play_pause.classList.add("fa-play");

    }

})












