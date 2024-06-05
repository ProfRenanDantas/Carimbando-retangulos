let cor;
let contador
let circulox; //horizontal
let circuloy; //vertical
let posicaoHorizontal; // X
let posicaoVertical; // y

let posicaoHorizontal12; //x
let posicaoVertical12; //Y

function setup() {
  createCanvas(400, 400);
  background(color(100, 0, 0));

  cor = color(random (255), random(255), random (255));
  circulox = [0, 0, 0];
  circuloy = [random(height),random(height), random(height)];
  
  
}

function draw() {
  fill(cor)

  for(let contador in circulox){
    circle(circulox[contador], circuloy[contador], 50);
    circulox[contador]+= random (0, 3);
    circuloy[contador]+= random (-3, 3);
    
    if(circulox[contador] >= width) {
       circulox[contador] = 0;
       circuloy[contador] = random(height);
  }
  
  }
  
  if(mouseIsPressed){
    cor = color(random (0, 250), random(0, 250), random (0, 100));
  }
}