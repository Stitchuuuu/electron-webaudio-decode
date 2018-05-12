electron-webaudio-decode: Audio Decoder for Electron App
========================================================

Node.js package for decoding audio and playing it in an Electron App with WebAudio API.

It allows you to play a large variety of Audio files unsupported with the default WebAudioAPI included in Electron (Chromium)

This package use aurora.js for parsing and decoding audio files. 

    var audioCtx = new window.AudioContext();
    
    function play(audiobuf) {
        var source = audioCtx.createBufferSource();
        source.buffer = audiobuf;
        source.connect(audioCtx.destination);
        source.start();
    }
    getAudioBuffer("audio/my.wav").then(function(audioBuffer) {
        play(audioBuffer);
    });
    

## Default Audio format supported

* Wav
* Aiff

## Optional formats

Those format are Node.js module for Aurora.js :

* mp3
* vorbis
* opus
* AAC
* FLAC
* ALAC (Apple Lossless)

To be able to play those format, just install the package (see below)

### mp3

    npm install mp3
    
### vorbis
    
    npm install vorbis.js

### opus
    
    npm install opus.js

### FLAC
    
    npm install flac.js
    
### AAC

    npm install aac
    
### ALAC (Apple Lossless)

    npm install alac

## Other formats

If you know other Aurora.js plugins, tell me in the issues, or just do a pull ;)