int bubR = 20;
int[] bubY = new int[10]; 
PImage fisk;
int fiskX1 = 100;
int speed1 = 5;
int fiskX2 = 1180;
int speed2 = -5;
int frem1 = 0;
int frem2 = 1;
void setup() {
  size(1280, 153);
  fisk = loadImage("fisk.png");
  for (int i = 0; i < 10; i++) {
    bubY[i] = int(random(0, height));
  }
}

void draw() {
  noStroke();
  background(64, 200, 255);
  fill(64, 255, 200);
  for (int i = 0; i < 10; i++) {
    ellipse(bubR+i*130, bubY[i], bubR, bubR);
    if (bubY[i] < -10) {
      bubY[i] = int(random(height+10, height+50));
    }
  }
  for (int i = 0; i < 10; i++) {
    bubY[i] -= 1;
  }
  fill(255, 255, 0);
  ellipse(fiskX1, 125, 100, 50);
  if (frem1 == 0) {
    triangle(fiskX1-45, 125, fiskX1-75, 150, fiskX1-75, 100);
  } else if (frem1 == 1) {
    triangle(fiskX1+45, 125, fiskX1+75, 150, fiskX1+75, 100);
  }
  if (fiskX1 > width+100) {
    speed1 *= -1;
    frem1 = 1;
  } else if (fiskX1 < -100) {
    speed1 *= -1;
    frem1 = 0;
  }
  fiskX1 += speed1;


  ellipse(fiskX2, 30, 100, 50);
  if (frem2 == 0) {
    triangle(fiskX2-45, 30, fiskX2-75, 55, fiskX2-75, 5);
  } else if (frem2 == 1) {
    triangle(fiskX2+45, 30, fiskX2+75, 55, fiskX2+75, 5);
  }
  if (fiskX2 > width+100) {
    speed2 *= -1;
    frem2 = 1;
  } else if (fiskX2 < -100) {
    speed2 *= -1;
    frem2 = 0;
  }
  fiskX2 += speed2;
}
