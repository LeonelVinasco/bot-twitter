void setup () {
  size(640, 360);
  background(51);
  
  double rand = Math.floor(random(1, 4));
  
  if (rand == 1)
  {
    for (int i = 0; i < 50000 ; i++) {
      float x = random(width);
      float y = random(height);
      float r = random(100, 255);
      float g = random(100, 255);
      float b = random(100, 255);
      noStroke();
      fill(0, g, b, 120);
      ellipse(x, y, 16, 16);
    }
  }
  
  else if (rand == 2)
  {
    for (int i = 0; i < 50000 ; i++) {
      float x = random(width);
      float y = random(height);
      float r = random(100, 255);
      float g = random(100, 255);
      float b = random(100, 255);
      noStroke();
      fill(r, 0, b, 120);
      ellipse(x, y, 16, 16);
    }
  }
    
  else if (rand >= 3)
  {
    for (int i = 0; i < 50000 ; i++) {
      float x = random(width);
      float y = random(height);
      float r = random(100, 255);
      float g = random(100, 255);
      float b = random(100, 255);
      noStroke();
      fill(r, g, 0, 120);
      ellipse(x, y, 16, 16);
    }  

  }
  
  save("output.png");
  exit();
}