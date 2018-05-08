electron-webaudio-decode: Audio Decoder for Electron App
========================================================

Node.js package for decoding audio and playing it in an Electron App with WebAudio API.

It allows you to play a large variety of Audio files unsupported with the default WebAudioAPI included in Electron (Chromium)

This package use aurora.js for parsing and decoding audio files. 

## Default Audio format supported

* Wav
* Aiff

## Optionnal formats

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

    
## Example

How to run the example :

    cd example
    npm install
    npm start
    
## Other formats

If you know other Aurora.js plugins, tell me in the issues, or just do a pull ;)