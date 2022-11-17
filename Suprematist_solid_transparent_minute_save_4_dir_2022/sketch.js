let h;

let direction = [giuSu, suGiu, sxDx, dxSx];
let choice;

let baseURLImage = "https://oscaraccorsi.github.io/pictures/";
let logo;

let img;
let palette = [];
let pictureList = ['riley57.jpeg', 
                   'Rothko01.jpg', 
                   'Rothko07.jpg', 
                   'Rothko09.jpg', 
                   'klee.jpg',  
                   'riley5.jpeg', 
                   'riley6.jpeg',
                   'veronesi04.jpeg',
                   'mond.jpg', 
                   'schneiderMio.png',
                   'munariluce.png',
                   'munariluce.png', 
                   'munariluce02.png',
                   'munariluce03.png'];

let xLimitSx, xLimitDx, yLimitUp, yLimitDown;
let xMomLimitDx, xMomLimitSx, yMomLimitUp, yMomLimitDown;

let x, xx;
let y, yy;


let Inc = 1;

let fr = [16, 22, 38, 60];

let divArray = [4, 6, 8, 10];
let divisoreX; 
let divisoreY;



//---------------------------------------------------------preload
function preload() {
  h = round(random(0, 13));
  img = loadImage(baseURLImage + pictureList[h]);
  logo = loadImage(baseURLImage + "good one white.png");
  
  divisoreX = random(divArray);
  divisoreY = divisoreX+2;
   
}

//-----------------------------------------------------------SETUP
function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(1);
  choice = random(direction);
  
  setInterval(mousePressed, 1000*120);
  setInterval(reloadPage, 1000*121);
  
  console.log(pictureList[h], h, width, height); 

//------------------------------------------------palette
  img.resize(50, 0);
  img.loadPixels();
  
  
 
  for (let i = 0; i < img.pixels.length; i += 4) {
    let r = img.pixels[i];
    let g = img.pixels[i + 1];
    let b = img.pixels[i + 2];
    let alpha = round(random(30, 150));
    let c = color(r, g, b, alpha);
    palette.push(c);
  }
//-----------------------------------------coordinate 
  xLimitSx = width/divisoreX;
  xLimitDx = width-width/divisoreX;
  yLimitUp = height/divisoreY;
  yLimitDown = height-height/divisoreY;
  
  y = round(random(yLimitUp, yLimitDown));
  yy = round(random(yLimitUp, yLimitDown));
  
  x = round(random(xLimitSx, xLimitDx));
  xx = round(random(xLimitSx, xLimitDx));
  
  xMomLimitDx = round(random(x, xLimitDx));
  xMomLimitSx = round(random(x, xLimitSx));
  yMomLimitUp = round(random(y, yLimitUp));
  yMomLimitDown = round(random(y, yLimitDown));
  
  stroke(random(palette));
}

//--------------------------------------------------windowResized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//---------------------------------------------------------DRAW 
function draw() {
  choice();
}

//-----------------------------------------dxSx
function dxSx() {
  line(x, y, x, yy);
  x -= Inc;
  if (x < xMomLimitSx) {
    x = round(random(xLimitSx, xLimitDx));
    y = round(random(yLimitUp, yLimitDown));
    yy = round(random(yLimitUp, yLimitDown));
    
    xMomLimitSx = round(random(x, xLimitSx));
    stroke(random(palette));
    
    choice = random(direction);  
  }
  
  if (x >= (xLimitDx)-10) {
    reloadPage(); 
  }
}
//-----------------------------------------sxDx
function sxDx() {
  line(x, y, x, yy);
  x += Inc;
  if (x > xMomLimitDx) {
    x = round(random(xLimitSx, xLimitDx));
    y = round(random(yLimitUp, yLimitDown));
    yy = round(random(yLimitUp, yLimitDown));
    
    xMomLimitDx = round(random(x, xLimitDx));
    stroke(random(palette));
    
    choice = random(direction);  
  }
  
  if (x <= (xLimitSx)+10) {
    reloadPage(); 
  }
}

//-----------------------------------------suGiu
function suGiu() {
  line(x, y, xx, y);
  y += Inc;
  
  if (y > yMomLimitDown) {
    y = round(random(yLimitUp, yLimitDown));
    x = round(random(xLimitSx, xLimitDx));
    xx = round(random(xLimitSx, xLimitDx));
    
    yMomLimitDown = round(random(y, yLimitDown));
    stroke(random(palette));
    
    choice = random(direction);
  }
  
  if (y <= (yLimitUp)+10) {
    reloadPage(); 
  }
}

//-----------------------------------------giuSu
function giuSu() {
  line(x, y, xx, y);
  y -= Inc;
  if (y < yMomLimitUp) {
    y = round(random(yLimitUp, yLimitDown));
    x = round(random(xLimitSx, xLimitDx));
    xx = round(random(xLimitSx, xLimitDx));
    
    yMomLimitUp = round(random(y, yLimitUp));
    stroke(random(palette));
    
    choice = random(direction);
  }
  
  if (y >= (yLimitDown)-10) {
    reloadPage(); 
  }
}

//----------------------------------reLoad
function reloadPage() {
  window.location.reload();
}

function mousePressed() {
  imageMode(CENTER);
  let xLogo = windowWidth - 40;
  logo.resize(40, 0);  
  image(logo, xLogo, windowHeight - 25);
  tint(200);
  imageMode(CORNER);
  save();
  clear();
}

function keyPressed() {
  if (keyCode === 32 ) {
    reloadPage();   
  }
}