let angle = 0;
let canva;
let img;

P5Capture.setDefaultOptions();
const params = new URLSearchParams(window.location.search);
let logo_url = params.get('logo');
let method = params.get('method');
let color = `'#${params.get('color')}'`;
console.log(color);
function setup() {
  canva = createCanvas(300, 300, WEBGL);
    loadImage(logo_url, function(loadedImage) {
      img = loadedImage;
    });
  frameRate(100)
}
function draw() {
  background(color);
  rectMode(CENTER);
  noStroke();
  if (method == '3d') {
    fill(0,0,255);
    rotateY(angle);
    if (img != undefined) {
    texture(img);
    }
    noStroke();
    rect(0, 0, 200, 200);
    angle += 0.1;
    if (frameCount === 1) {
      const capture = P5Capture.getInstance();
      capture.start({
        format: "gif",
        duration: 100,
      });
    }
  }
  if (method == '2d') {
    if (img != undefined) {
      texture(img);
      }
  rect(0, 0, 250, 250);
  if (img != undefined && frameRate == 1) {
    const capture = P5Capture.getInstance();
    capture.start({
      format: "png",
      duration: 10,
    });
  }
  }
  
}
