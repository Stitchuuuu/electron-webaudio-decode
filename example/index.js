let { getAudioBuffer } = require('electron-webaudio-decode');

var audioCtx = new window.AudioContext();

function play(audiobuf) {
    var source = audioCtx.createBufferSource();
    source.buffer = audiobuf;
    source.connect(audioCtx.destination);
    source.start();
}

document.getElementById("mp3").addEventListener("click", function() {
    getAudioBuffer("audio/bird.mp3").then(function(audioBuffer) {
        play(audioBuffer);
    });
});

document.getElementById("aiff").addEventListener("click", function() {
    getAudioBuffer("audio/cow.aiff").then(function(audioBuffer) {
        play(audioBuffer);
    });
});

document.getElementById("wav").addEventListener("click", function() {
    getAudioBuffer("audio/cat.wav").then(function(audioBuffer) {
        play(audioBuffer);
    });
});
