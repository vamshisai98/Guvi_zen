function videodefault() {
    var videoTag = document.getElementById("myVideo");
    videoTag.play();
}
videodefault();
var Controls = /** @class */ (function () {
    function Controls() {
        this.source = "";
        this.video = document.getElementById("myVideo");
    }
    Controls.prototype.companyBrand = function (src) {
        this.source = src;
        var videoBox = document.getElementById("videoBox");
        videoBox.innerHTML = " <video id=\"myVideo\" controls>\n        <source src=\"" + this.source + "\" type=\"video/mp4\">\n      </video>";
        var myID = document.getElementById("myVideo");
    };
    Controls.prototype.play = function (myID) {
        this.video = myID;
        // let myID =<HTMLVideoElement>document.getElementById("myVideo");
        myID.play();
    };
    Controls.prototype.pause = function (myID) {
        myID.pause;
    };
    Controls.prototype.volInc = function (myID) {
        myID.volume = myID.volume + 0.1;
    };
    Controls.prototype.volDec = function (myID) {
        myID.volume = myID.volume - 0.1;
    };
    return Controls;
}());
function company(brand) {
    var controls = new Controls();
    if (brand == "sony") {
        controls.companyBrand("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4");
    }
    else if (brand == "oppo") {
        controls.companyBrand("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4");
    }
    else if (brand == "samsung") {
        controls.companyBrand("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");
    }
    else if (brand == "LG") {
        controls.companyBrand("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4");
    }
    else if (brand == "Phillips") {
        controls.companyBrand("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4");
    }
}
// let play = document.getElementById('play')
// play.setAttribute('onclick','playVideo()')
function playVideo() {
    console.log('working');
    var div = document.getElementById('videoBox');
    var controls = new Controls();
    controls.play(div);
}
// let pause = document.getElementById('pause')
// pause.setAttribute('onclick','pauseVideo()')    
function pauseVideo() {
    console.log('working1');
    var div = document.getElementById('videoBox');
    var controls = new Controls();
    controls.pause(div);
}
