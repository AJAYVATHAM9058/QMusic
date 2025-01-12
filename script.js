let play_pause = document.getElementById("play_pause");
let audio_element = new Audio("./Songs/lightOfSevenSong2.mp3");
let song_progress_bar = document.getElementById("song_progress_bar");

play_pause.addEventListener("click", () => {

    if (audio_element.paused || audio_element.currentTime == 0) {
        audio_element.play()

        play_pause.classList.remove("fa-play")
        play_pause.classList.add("fa-pause")


    }
    else {
        audio_element.pause()
        play_pause.classList.remove("fa-pause");
        play_pause.classList.add("fa-play");

    }

})

audio_element.addEventListener("timeupdate", () => {
    let progress_value = (audio_element.currentTime / audio_element.duration) * 100;
    console.log(progress_value)
    song_progress_bar.value = progress_value;
})



const song_details = {
    0 : "./Songs/song2Devara.mp3",
    1 : "./Songs/lightOfSevenSong2.mp3",
    2 : "./Songs/song3KonteChuputho.mp3",
    3 : "./Songs/song4TumHiHo.mp3",
    6 : "./Songs/song7Evarevaro.mp3"
}

function add_play_icon(ele){
    let container = document.getElementById("song_container");
    let play_solid =  container.querySelectorAll("#play_solid"); 
    play_solid[ele].style.display = "flex";

    let audio_ele = new Audio(song_details[ele])

   let play_icon = container.querySelectorAll("#play_icon")
   console.log(play_icon[ele])

   
   play_icon[ele].addEventListener("click",()=>{
       
       if(audio_ele.paused || audio_ele.currentTime == 0){
           audio_ele.play();
        }
        else{
            audio_ele.pause()
        }
        
    })
    
    audio_ele.addEventListener("timeupdate",()=>{
     let progress_value = (audio_ele.currentTime / audio_ele.duration)*100;
     song_progress_bar.value = progress_value;
    })
   
    song_progress_bar.addEventListener("change",(t)=>{

        let n = song_progress_bar.value;
        audio_ele.currentTime = (n*audio_ele.duration)/100;
    })

}

 function remove_play_icon(ele){
    let container = document.getElementById("song_container");
    let play_solid = container.querySelectorAll("#play_solid");
    play_solid[ele].style.display = "none";

 }










