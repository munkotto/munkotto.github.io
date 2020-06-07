int bubR = 20;
int[] bubY = new int[10]; 

void setup() {
  size(1280, 155);
    for (int i = 0; i < 10; i++) {
    bubY[i] = int(random(height, height+20));
  }
}

void draw() {
  noStroke();
  background(64, 200, 255);
  fill(64, 255, 200);
  for (int i = 0; i < 10; i++) {
     circle(bubR+i*130, bubY[i], bubR);
    if (bubY[i] < 0) {
      bubY[i] = int(random(height, height+20));
    }
  }
  for (int i = 0; i < 10; i++) {
    bubY[i] -= 1;
  }
}
