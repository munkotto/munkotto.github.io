float leftX = 600;
float rightX = -200;
float sunRadius = 100;
float snowman = 100;
float snowX = -50;
float snowY1 = 275;
float snowY2 = snowY1-65;
float snowY3 = snowY1-115;
float rectY = 300;
float sunX = -75;
float sunY = 400;
float ground = 255;
float puddle_wid = 0;
float puddle_hei = 0;
float background2 = 0;
float background1 = 0;
float puddle_c = 0;
float puddle_x = snowX;

void setup() {
  size(400, 400);
    leftX = 600;
  rightX = -200;
  sunRadius = 100;
  snowman = 100;
  snowX = -50;
  snowY1 = 275;
  snowY2 = snowY1-65;
  snowY3 = snowY1-115;
  rectY = 300;
  sunX = -75;
  sunY = 400;
  ground = 255;
  puddle_wid = 0;
  puddle_hei = 0;
  background2 = 0;
  background1 = 0;
  puddle_c = 0;
  puddle_x = snowX;
}

void draw() {
  noStroke();
  background(background1, background2, background2);
  if (sunX<200) {
    background2 = background2+0.5;
    background1 = background2/2;
  } else {
    background2 = background2-0.7;
    background1 = background2/2;
  }

  fill(255, 170, 0);
  ellipse(sunX, sunY, sunRadius, sunRadius);

  // clouds 
  fill(94, 94, 94);
  // left cloud
  ellipse(leftX, 150, 126, 97);
  ellipse(leftX+62, 150, 70, 60);
  ellipse(leftX-62, 150, 70, 60);

  // right cloud
  ellipse(rightX, 95, 126, 97);
  ellipse(rightX+62, 95, 70, 60);
  ellipse(rightX-62, 95, 70, 60);

  // ground
  fill(ground, 255, ground);
  rect(0, 300, 400, 100);

  // left cloud shadow
  fill(117, 117, 117, 30);
  ellipse(leftX, 350, 126, 97);
  ellipse(leftX+62, 350, 70, 60);
  ellipse(leftX-62, 350, 70, 60);

  // right cloud shadow
  ellipse(rightX, 350, 126, 97);
  ellipse(rightX+62, 355, 70, 60);
  ellipse(rightX-62, 355, 70, 60);

  // puddle
  if (snowman > 10) {
    fill(93, 93, 107, 50);
    ellipse(snowX, snowY1+snowman/2, snowman-3, 11);
  } else {
  }

  // puddle
  fill(puddle_c, 255, 255);
  ellipse(snowX, snowY1+snowY1/29, puddle_wid, puddle_hei);

  fill(255, 255, 255);
  // ball 1
  ellipse(snowX, snowY1, snowman, snowman);
  // ball 2
  ellipse(snowX, snowY2, snowman*3/4, snowman*3/4);
  // ball 3
  ellipse(snowX, snowY3, snowman*2/4, snowman*2/4);


  rightX = rightX+1.5;
  leftX = leftX-1.5;
  snowX = snowX+0.75;

  sunX = sunX+0.5;
  sunY = ((sunX*sunX)/90)-(4.2*sunX)+427;

  if (snowX>170 && snowX<320) {
    snowman = snowman-0.1;
    snowY1 = snowY1+0.35;
    snowY2 = snowY2+0.7;
    snowY3 = snowY3+1;
    ground = ground-0.5;
  }

  if (snowX>320) {
    snowY2 = snowY1;
    snowY3 = snowY1;
    snowman = snowman-0.5;
    snowX = 320;
    puddle_wid = puddle_wid+0.9;
    puddle_hei = puddle_hei+0.4;
  }

  if (snowman < 0) {
    snowman = 0;
  }

  if (90<puddle_wid) {
    puddle_wid = 90;
    puddle_hei = 45;
  }

  if (sunX>360) {
    ground = ground+2.5;
    puddle_c = puddle_c+5;
  }
  
  if(sunX > 425){
    setup();
  }
};
