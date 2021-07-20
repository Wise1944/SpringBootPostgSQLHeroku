console.log("video start");
var video=document.getElementById('video');

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia()){
    navigator.mediaDevices.getUserMedia({video:true}).then(function (stream) {
        video.scr=window.URL.createObjectURL(stream);
        video.play();
    });
}