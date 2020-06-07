ArrayList<Integer> x = new ArrayList<Integer>(), y = new ArrayList<Integer>();

int w = 10, h = 10, gt = 45, ax = 1, ay = 1, speedx = 1, speedy = 0, gameover = 0, highscore = 0;

void setup() {
  size(450, 450); 
  x.add(2);
  y.add(2);
}

void draw() {
  background(255);
  stroke(1);
  for (int i = 0; i < w; i++)
    line(i*gt, 0, i*gt, height);
  for (int i = 0; i < h; i++)
    line(0, i*gt, width, i*gt);

  fill(255, 0, 0);
  noStroke();
  rect(ax*gt, ay*gt, gt, gt);

  for (int i = 0; i < x.size(); i++) {
    fill(0, 255, 0);
    rect(x.get(i)*gt, y.get(i)*gt, gt, gt);
  }
  if (gameover == 0) {
    if (frameCount % 8 == 0) {
      x.add(0, x.get(0)+speedx);
      y.add(0, y.get(0)+speedy);
      for (int i = 1; i < x.size(); i++) {
        if (x.get(0) == x.get(i) && y.get(0) == y.get(i)) {
          gameover++;
        }
      }
      if (x.get(0) >= w || x.get(0) < -0.1 || y.get(0) >= h || y.get(0) < -0.1) {
        gameover++;
      }
      if (x.get(0) == ax && y.get(0) == ay) {
        for (int i = 0; i<x.size(); i++) {
          if (x.get(i) == ax && y.get(i) == ay) {
            ax = (int)random(0, w);
            ay = (int)random(0, h);
          }
        }
      } else {
        x.remove(x.size()-1);
        y.remove(y.size()-1);
      }
      keyPressed();
    }
  } else if (gameover > 0) {
    background(0);
    textSize(20);
    textAlign(CENTER);
    text("Hey! Dig der! Du har fået " + x.size() + " point!", width/2, height/2);
    text("Din highscore er " + max(highscore, x.size()) + " makker!", width/2, height/2+50);
    highscore = max(highscore, x.size());
    for (int i = 0; i < x.size(); i++)
      rect(120+i*31, 120, 30, 30);
    if (keyPressed) {
      if (key == ' ') {
        x.clear();
        y.clear();
        x.add(2);
        y.add(2);
        gameover = 0;
      }
    }
  }
}

void keyPressed() {
  if (keyPressed) {
    if (key == 'w' && speedy != 1) {
      speedx = 0;
      speedy = -1;
    } else if (key == 's' && speedy != -1) {
      speedx = 0;
      speedy = 1;
    } else if (key == 'a' && speedx != 1) {
      speedx = -1;
      speedy = 0;
    } else  if (key == 'd' && speedx != -1) {
      speedx = 1;
      speedy = 0;
    }
  }
}
