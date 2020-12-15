const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");

const songName = document.getElementById("songName");
const artist = document.getElementById("artistName");
const prev = document.getElementById("prev");
const next = document.getElementById("next");


const songs =[
    {
        id:'song1',
        songName: 'Malang',
        artistsName: 'Aditya Roy Kapoor'
    },
    {
        id:'song2',
        songName: 'Veham',
        artistsName: 'Sehnazz Kaull Gill'
    },
    {
        id:'song3',
        songName: 'Zinda dili',
        artistsName: 'Ariji'
    },
    {
        id:'song4',
        songName: 'Zra Zra',
        artistsName: 'Somchanda'

    }
]


let isAudioPlaying = false;

const playTheMusic = function(){
    isAudioPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
     img.classList.add("rotateAnime");
};

//pause function
const pauseTheMusic = function(){
    isAudioPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
     img.classList.remove("rotateAnime");
};
// event is firing; 

play.addEventListener("click",function(){
     isAudioPlaying? pauseTheMusic():playTheMusic()
});

//chnaging the songs

const loadTheSongs = function(songs){
    songName.textContent = songs.songName;
    artistName.textContent = songs.artistsName;
    music.src = "../audio/" + songs.id + ".mp3";
    img.src = "../img/" + songs.id + ".jpg"
}

songIndex = 0;
const nextSong = function(){
    songIndex = (songIndex + 1) % songs.length;
    loadTheSongs(songs[songIndex]);
    playTheMusic();

}

const prevSong = function(){
    songIndex = (songIndex - 1) % songs.length;
    loadTheSongs(songs[songIndex]);
    playTheMusic();
}
next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);