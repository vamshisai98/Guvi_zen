function videodefault() {
  let videoTag = <HTMLVideoElement>document.getElementById("myVideo");
  videoTag.play();
}

videodefault();

class Controls {
  source: String;
  video:any
  constructor() {
    this.source = "";
    this.video = <HTMLVideoElement>document.getElementById("myVideo")
  }

  companyBrand(src: string) {
    this.source = src;
    let videoBox = <HTMLVideoElement>document.getElementById("videoBox");
    videoBox.innerHTML = ` <video id="myVideo" controls>
        <source src="${this.source}" type="video/mp4">
      </video>`;
      let myID =<HTMLVideoElement>document.getElementById("myVideo");
  }
  play(myID:any) {
    this.video = myID
    // let myID =<HTMLVideoElement>document.getElementById("myVideo");
    myID.play();
  }
  pause(myID) {
    myID.pause;
  }
  volInc(myID){
    myID.volume = myID.volume + 0.1;
  }
  volDec(myID){
    myID.volume = myID.volume - 0.1;
  }
}

function company(brand: string) {
  let controls = new Controls();

  if (brand == "sony") {
    controls.companyBrand(
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
    );
  } else if (brand == "oppo") {
    controls.companyBrand(
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
    );
  } else if (brand == "samsung") {
    controls.companyBrand(
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    );
  } else if (brand == "LG") {
    controls.companyBrand(
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    );
  } else if (brand == "Phillips") {
    controls.companyBrand(
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    );
  }
}

// let play = document.getElementById('play')

// play.setAttribute('onclick','playVideo()')
function playVideo(){
  console.log('working')
  let div = document.getElementById('videoBox')
    let controls = new Controls();
    controls.play(div)
}

// let pause = document.getElementById('pause')

// pause.setAttribute('onclick','pauseVideo()')    
function pauseVideo(){
  console.log('working1')
  let div = document.getElementById('videoBox')
    let controls = new Controls();
    controls.pause(div)
}

