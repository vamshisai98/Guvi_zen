function videodefault() {
    var videoTag = document.getElementById("myVideo");
    videoTag.play();
}
videodefault();
var Controls = /** @class */ (function () {
    function Controls() {
        this.source = "";
    }
    Controls.prototype.companyBrand = function (src) {
        this.source = src;
        var videoBox = document.getElementById("videoBox");
        videoBox.innerHTML = " <video id=\"myVideo\" controls>\n        <source src=\"" + this.source + "\" type=\"video/mp4\">\n      </video>";
        var myID = document.getElementById("myVideo");
    };
    Controls.prototype.play = function () {
        var myID = document.getElementById("myVideo");
        myID.play();
    };
    Controls.prototype.pause = function () {
        var myID = document.getElementById("myVideo");
        myID.pause();
    };
    Controls.prototype.volInc = function () {
        var myID = document.getElementById("myVideo");
        if (myID.volume <= 1) {
            myID.volume = myID.volume + 0.1;
        }
        else {
            alert('volume full');
        }
    };
    Controls.prototype.volDec = function () {
        var myID = document.getElementById("myVideo");
        if (myID.volume > 0) {
            myID.volume = myID.volume - 0.1;
        }
        else {
            alert('volume 0');
        }
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
function playVideo() {
    console.log('working');
    var controls = new Controls();
    controls.play();
}
function pauseVideo() {
    console.log('working1');
    var controls = new Controls();
    controls.pause();
}
function volUp() {
    console.log('working1');
    var controls = new Controls();
    controls.volInc();
}
function volDown() {
    console.log('working1');
    var controls = new Controls();
    controls.volDec();
}
