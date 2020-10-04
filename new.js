var elem = document.documentElement;
function openfullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

// document.addEventListener('blur', function(){
//     window.confirm("Dont you dare asshole");
// });
var i = 0;
function returnFull() {
    i = i+1
    if (alert("WARNING.\n Unapologetic behaviour suspected...")) {
        openfullscreen()
        interval = setInterval(checkfocus, 1000);
    }
    if (i == 2){
        window.location.replace("disqualify.html");
    }
    
}

document.addEventListener('fullscreenchange', function () {
    if (document.webkitIsFullScreen === false) {
        returnFull()
    }
    else if (document.mozFullScreen === false) {
        returnFull()
    }
    else if (document.msFullscreenElement === false) {
        returnFull();
    }
}, false);

function checkfocus() {
    if (!document.hasFocus()) {
        returnFull();
        closeInterval(interval);
    }
}

var interval = setInterval(checkfocus, 1000);



function myFunction1() {
    alert("WARNING.\n Unapologetic behaviour suspected");
}

window.onload = function () {
    var constraints = { audio: false, video: { width: 500, height: 375 } };

    navigator.mediaDevices.getUserMedia(constraints)
        .then(function (mediaStream) {
            if (mediaStream) {
                var video = document.querySelector('video');
                video.srcObject = mediaStream;
                video.onloadedmetadata = function (e) {
                    video.play();
                };
            }
            else {
                window.alert("please give necessary permission");
            }

        })
        .catch((err) => console.log(err.name))
}