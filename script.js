let play_pause = document.getElementById("play_pause");
let audio_element = new Audio("./Songs/lightOfSevenSong2.mp3");
let song_progress_bar = document.getElementById("song_progress_bar");

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

audio_element.addEventListener("timeupdate",()=>{
    let progress_value = (audio_element.currentTime / audio_element.duration)*100;
    console.log(progress_value)
    song_progress_bar.value = progress_value;
})

song_progress_bar.addEventListener("change",(t)=>{

   let n = song_progress_bar.value
   audio_element.currentTime = (n*audio_element.duration)/100;

    
})














