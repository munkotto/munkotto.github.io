float leftX = 200;
float rightX = 200;
float sunRadius = 100;
float snowman = 100;
float snowX = mouseX;
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

void setup(){
  size(400,400);
}

void draw(){
  noStroke();
    background(0, background1, background1);
    
    fill(255, 170, 0);
    ellipse(sunX, sunY, sunRadius, sunRadius);
    

    fill(94, 94, 94);
    ellipse(leftX, 150, 126, 97);
    ellipse(leftX+62, 150, 70, 60);
    ellipse(leftX-62, 150, 70, 60);
    
    ellipse(rightX, 95, 126, 97);
    ellipse(rightX+62, 95, 70, 60);
    ellipse(rightX-62,95, 70, 60);
    
    fill(ground, 255, ground);
    rect(0,300,400,100);
    
    fill(117, 117, 117,30);
    ellipse(leftX, 350, 126, 97);
    ellipse(leftX+62, 350, 70, 60);
    ellipse(leftX-62, 350, 70, 60);
    
    ellipse(rightX, 350, 126, 97);
    ellipse(rightX+62, 355, 70, 60);
    ellipse(rightX-62,355, 70, 60);
    
    fill(93, 93, 107,50);
    ellipse(snowX,snowY1+snowman/2,snowman-3,11);
    
    fill(255, 255, 255);
    ellipse(snowX,snowY1,snowman,snowman);
    ellipse(snowX,snowY2,snowman*3/4,snowman*3/4);
    ellipse(snowX,snowY3,snowman*2/4,snowman*2/4);
    
    if(mouseX<200){
        rightX = mouseX+200;
        leftX = 200-mouseX;
        background1 = mouseX * 1.275;
        ground = 255-(mouseX*0.15);
        snowman = 100-(mouseX*0.15);
        snowY1 = 275+(mouseX*0.175);
        snowY2 = 215+(mouseX*0.255);
        snowY3 = 162+(mouseX*0.345);
        snowX = (mouseX*1.375)-75;
        sunX = mouseX;
    }
    
    if(mouseX>200){
        rightX = 600-mouseX;
        leftX = mouseX-200;
        background1 = 255+(255-(mouseX*1.275));
        ground = 225+((30-mouseX*0.15)*-1);
        snowman = 70-(30-(mouseX*0.15));
        snowY1 = 310+(35-(mouseX*0.175));
        snowY2 = 264+(51-(mouseX*0.2555));
        snowY3 = 220+(79-(mouseX*0.345));
        snowX = (mouseX*1.375)-75;
        sunX = mouseX;
    }
    
    sunY = 1/90*sunX*sunX-4.2*sunX+427;
    
    textSize(15);
    text("Bevæg musen for at se snemanden gå", 81,21);
};
