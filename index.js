const AV = require('av');
const fs = require('fs');

let packages = ['mp3', 'vorbis.js', 'flac.js', 'alac', 'aac', 'opus.js'];

if (!window.AudioContext) {
    throw new Error("Please require the electron-webaudio-decode in a webpage for window.AudioContext.");
}
var audioCtx = new window.AudioContext();

packages.forEach(function(packageName) {
    try {
        require.resolve(packageName);
        require(packageName);
        //console.log('Aurora JS Package '+packageName+' loaded !');
    } catch(e) {
        //console.log('Package "'+packageName+'" not installed.');
    }
});
function createAudioBufferFromAVBuffer(numberOfChannels, sampleRate, buffer) {
    var audioBuffer = audioCtx.createBuffer(numberOfChannels, buffer.length/numberOfChannels, sampleRate);

    for (var channel = 0; channel < audioBuffer.numberOfChannels; channel++) {
      // This gives us the actual ArrayBuffer that contains the data
      var nowBuffering = audioBuffer.getChannelData(channel);

      for (var i = 0; i < audioBuffer.length; i++) {
        // Decoded Float32Array is like that : [channel1 byte1, channel2 byte1, ... byte1, channel1 byte2, channel2 byte2, ...]
        nowBuffering[i] = buffer[(i*(numberOfChannels))+channel];
        // Setting in "nowBuffering" is permanent
      }
    }
    return audioBuffer;
}


function doDecodeBuffer(buffer, resolve, reject) {
    let asset = AV.Asset.fromBuffer(buffer);

    asset.on('error', err => {
        reject(err)
    });

    asset.decodeToBuffer((buffer) => {
        resolve(createAudioBufferFromAVBuffer(asset.format.channelsPerFrame, asset.format.sampleRate, buffer));
    });
};

exports.getAudioBuffer = function(source) { return new Promise(function(resolve, reject) {
    if (typeof(source) == "string" && fs.existsSync(source)) {
        fs.readFile(source, (err, data) => {
            if (!err) {
                doDecodeBuffer(data, resolve, reject);
            } else {
                reject(err);
            }
        });
    } else {
        doDecodeBuffer(source, resolve, reject);
    }
}); };
