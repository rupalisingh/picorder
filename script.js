let videoElem = document.querySelector("#video_elem")
let recordButton = document.querySelector("#video_record")
let mediaRecorder;
let constraints = {
    video : true,
    audio : true
}

let buffer = []

navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){
    videoElem.srcObject = mediaStream

    mediaRecorder = new MediaRecorder(mediaStream)
    mediaRecorder.addEventListener("dataavalaible", function(e){
        buffer.push(e.data)
    })

}).catch(function(err){
    console.log(err)
})