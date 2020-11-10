function videodefault() {
  let videoTag = <HTMLVideoElement>document.getElementById("myVideo");
  videoTag.play();
}

videodefault();

class Controls {
  source: String;
  constructor() {
    this.source = "";
  }

  companyBrand(src: string) {
    this.source = src;
    let videoBox = <HTMLVideoElement>document.getElementById("videoBox");
    videoBox.innerHTML = ` <video id="myVideo" controls>
        <source src="${this.source}" type="video/mp4">
      </video>`;
      let myID =<HTMLVideoElement>document.getElementById("myVideo");
  }
  play() {
    let myID =<HTMLVideoElement>document.getElementById("myVideo");
    myID.play();
  }
  pause() {
    let myID =<HTMLVideoElement>document.getElementById("myVideo");
    myID.pause();
  }
  volInc(){
   
    let myID =<HTMLVideoElement>document.getElementById("myVideo");
    if(myID.volume<=1){
      myID.volume = myID.volume + 0.1;
    }else{
      alert('volume full')
    }
  
  }
  volDec(){
    let myID =<HTMLVideoElement>document.getElementById("myVideo");
    if(myID.volume>0){
      myID.volume = myID.volume - 0.1;
    }else{
      alert('volume 0')
    }
  
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


function playVideo(){
  console.log('working')
    let controls = new Controls();
    controls.play()
}


function pauseVideo(){
  console.log('working1')
    let controls = new Controls();
    controls.pause()
}
function volUp(){
  console.log('working1')
    let controls = new Controls();
    controls.volInc()
}
function volDown(){
  console.log('working1')
    let controls = new Controls();
    controls.volDec()
}

