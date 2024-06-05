function setup() { 
    createCanvas(400, 400); 
  }
  
  function draw() { 
    stroke("blue"); 
    fill ("Red");  
    
    if(mouseIsPressed) { 
      rect (mouseX, mouseY, 20, 20); 
    }
  }
