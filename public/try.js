var song;
var fft;

function preload(){
song  = loadSound('./one.mp3')
}
function setup() {
    createCanvas(500, 50);
    background(153);
    line(0, 0, width, height);
    fft = new p5.FFT()

  }


  function draw(){
      background(0);
      stroke(255)
      let wave = fft.waveform();
    
      for(let i = 0; i< width ;i++){
          var index = floor(map(i,0,width,0,wave.length));
          var x = i;
          var y = wave[index] * 300 + height /2;
          point(x,y)
      }
  }