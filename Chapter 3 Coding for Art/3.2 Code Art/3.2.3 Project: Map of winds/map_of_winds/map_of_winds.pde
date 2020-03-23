PulseRay rayOne, rayTwo, rayThree, rayFour, rayFive, raySix, raySeven;
WindBlower WB;
PImage windBlower, paperTexture, sun;

void setup(){
  size(640, 360, P3D);
  stroke(240);
  windBlower = loadImage("wind.png");
  paperTexture = loadImage("paperTexture.jpg");
  sun = loadImage("sun_vector.png");
  
  //Initiate Rays
  rayOne = new PulseRay();
  rayTwo = new PulseRay(30);
  rayThree = new PulseRay(60);
  rayFour = new PulseRay(75);
  rayFive = new PulseRay(15);
  raySix = new PulseRay(345);
  raySeven = new PulseRay(115);
   
  WB = new WindBlower();
  smooth(6);
  
  ps = new ParticleSystem(new PVector(10, 0));
  pOne = loadImage("particle_1.png");
  pTwo = loadImage("particle_2.png");
  pThree = loadImage("particle_3.png");
  pFour = loadImage("particle_4.png");
}

void draw(){
  image(paperTexture, 0,0);
  noTint();
  tint(255,100);
  image(sun, width/2 - 75, height/2 - 75, 150,150);
  //Wind Blower
  WB.display();
  
  //Draw Rays
  rayOne.displayRay();
  rayTwo.displayRay();
  rayThree.displayRay();
  rayFour.displayRay();
  rayFive.displayRay();
  raySix.displayRay();
  raySeven.displayRay();
  
  //Generate Particles
  pushMatrix();
  translate(25,25);
  rotate(radians(30));
  ps.addParticle();
  ps.run();
  popMatrix();
  
}


class PulseRay{
  float angle;
  float startX;
  float startY;
  float xoff;
  
 PulseRay(float angle){
   this.angle = angle;
   xoff = random(0,3.5);
 }
 PulseRay(){
   this.angle = 45;
   xoff = random(0,3.5);
 }
 
  void displayRay(){
  pushMatrix();
  translate(75, 75);
  rotate(radians(angle));
  line(0, 0, perlinNoise(), 0);
  popMatrix();
 }
 
 float perlinNoise(){
  xoff += .01;
  float xNoise = noise(xoff) * width/3;
  return xNoise; 
 }
}

class WindBlower{
  void display(){
    pushMatrix();
    translate(50,-25, 1);
    rotate(radians(45));
    tint(255, 126);
    image(windBlower, 0,0, 100,100);
    popMatrix();
  }
}

