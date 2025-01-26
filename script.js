let play_pause = document.getElementById("play_pause");
let audio_element = new Audio("./Songs/lightOfSevenSong2.mp3");

let song_progress_bar = document.getElementById("song_progress_bar");
let play_buttons = document.querySelectorAll("#play_solid i")
let currentPlayingIndex = -1
let album_name = document.getElementById("album_name")

let time = document.querySelector("#time")

let forward = document.querySelector(".fa-forward")
let backward = document.querySelector(".fa-backward")


let volume_range = document.getElementById("volume_range1")

let audio = new Audio();

let songs = [
    "./Songs/song1.mp3", "./Songs/song2.mp3", "./Songs/song3.mp3", "./Songs/song4.mp3", "./Songs/song5.mp3", "./Songs/song6.mp3", "./Songs/song7.mp3",
    "./Songs/song8.mp3", "./Songs/song9.mp3", "./Songs/song10.mp3", "./Songs/song11.mp3", "./Songs/song12.mp3",

]

let songNames = [
    "Chuttamlle", "Oh Priya Priya", "Konte Chooputho", "Tum Hi Ho", "Ban Ja Rani", "Ban Ja Rani Remix", "Animal(Telugu)", "Yeh Jawaani hai Deewani", "Peelings",
    "Panjaa", "Godari Gattu Meeda", "Radhika Radhika"
]






//playButtons of albums
play_buttons.forEach((button, index) => {

    button.addEventListener("click", function () {

        if (currentPlayingIndex !== index) {

            if (currentPlayingIndex !== -1) {
                play_buttons[currentPlayingIndex].classList.replace("fa-pause", "fa-play")

            }


            audio_element.src = songs[index];
            audio_element.play()
            button.classList.replace("fa-play", "fa-pause")
            play_pause.classList.replace("fa-play", "fa-pause")

            currentPlayingIndex = index
            console.log(currentPlayingIndex)
            album_name.innerText = songNames[index]

        }
        else {

            if (audio_element.paused) {
                audio_element.play()
                button.classList.replace("fa-play", "fa-pause")
                play_pause.classList.replace("fa-play", "fa-pause")
                
            }
            else {
                audio_element.pause()
                button.classList.replace("fa-pause", "fa-play")
                play_pause.classList.replace("fa-pause", "fa-play")
               
            }
        }


    })
})


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
    // console.log(progress_value)
    song_progress_bar.value = progress_value;
    let display_time = audio_element.currentTime;
    time.innerText = sec_to_min(display_time) + " / " + sec_to_min(audio_element.duration)

})

function sec_to_min(d) {
    var m = Math.floor(d / 60)
    var s = Math.floor(d % 60)

    return m + ":" + s
}

audio_element.addEventListener("timeupdate", (ele) => {
    let progress_value = (audio_element.currentTime / audio_element.duration) * 100;
    song_progress_bar.value = progress_value;
})

song_progress_bar.addEventListener("change", (t) => {

    let n = song_progress_bar.value;
    // console.log(n)
    audio_element.currentTime = (n * audio_element.duration) / 100;
})


let count = -1


// forward Button
forward.addEventListener("click", () => {

    count = currentPlayingIndex
    count++;


    if (count <= 11) {
        audio_element.src = songs[count]
        audio_element.play()
        album_name.innerText = songNames[count]
        play_pause.classList.replace("fa-play","fa-pause")
        currentPlayingIndex = count
    }
    else{
        count = 0
        audio_element.src = songs[count]
        audio_element.play()
        album_name.innerText = songNames[count]
        play_pause.classList.replace("fa-play","fa-pause")
        currentPlayingIndex = count
    }
})


backward.addEventListener("click", () => {
    
    count = currentPlayingIndex
    count--;
    

    if (count >= 0) {
        audio_element.src = songs[count]
        audio_element.play()
        album_name.innerText = songNames[count]
        play_pause.classList.replace("fa-play","fa-pause")
        currentPlayingIndex = count
    }
    else{
        count = 11;
        audio_element.src = songs[count]
        audio_element.play()
        album_name.innerText = songNames[count]
        play_pause.classList.replace("fa-play","fa-pause")
        currentPlayingIndex = count
    }
})


let volume = document.getElementById("volume1")
let volume_btn = document.querySelector(".fa-volume-low")


volume_btn.addEventListener("click",(e)=>{

   if(e.target.classList[1]==="fa-volume-low"){
    audio_element.volume = 1.0;
    volume_range.value = 1*100
    volume_btn.classList.replace("fa-volume-low","fa-volume-high");
   }
   else if(e.target.classList[1] === "fa-volume-high"){
    audio_element.volume = 0.0;
    volume_range.value = 0*100
    volume_btn.classList.replace("fa-volume-high","fa-volume-mute")
   }
   else{
    audio_element.volume = 0.5
    volume_range.value = 0.5*100
    volume_btn.classList.replace("fa-volume-mute","fa-volume-low")
   }
   
})



volume_range.addEventListener("change",(t)=>{
    let b = volume_range.value
    audio_element.volume = b*0.01
    
    if(b==0){
        volume_btn.classList.remove("fa-volume-high")
        volume_btn.classList.remove("fa-volume-low")
        volume_btn.classList.add("fa-volume-mute")
        
    }
   else if(b==50){
        volume_btn.classList.remove("fa-volume-high")
        volume_btn.classList.remove("fa-volume-mute")
        volume_btn.classList.add("fa-volume-low")
        
    }
    
  else if(b==100){
        volume_btn.classList.remove("fa-volume-low")
        volume_btn.classList.remove("fa-volume-mute")
        volume_btn.classList.add("fa-volume-high")
        
    }
    else{
        volume_btn.classList.remove("fa-volume-high")
        volume_btn.classList.remove("fa-volume-mute")
        volume_btn.classList.add("fa-volume-low")

    }

})
