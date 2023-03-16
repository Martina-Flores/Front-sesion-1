function setup() {
  createCanvas(windowWidth, windowHeight).position(0,0).style('z-index',-1);
  createA("https://github.com/Martina-Flores","Mi Github","_blank"). id("chibiides");
  textSize(40);
}

function draw() {
 text("🌸",mouseX,mouseY)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}