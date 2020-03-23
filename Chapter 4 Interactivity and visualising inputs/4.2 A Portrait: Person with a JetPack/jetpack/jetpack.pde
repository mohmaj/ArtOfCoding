PImage jetpack;
PImage mannequin;
JetFuel stream;
boolean clickEvent = false;
boolean jetOneClicked = false;
boolean jetTwoClicked = false;
boolean strapClicked = false;
boolean mannequinVisible = false;

void setup(){
  size(800,800);
  jetpack = loadImage("Jetpack.png");
  mannequin = loadImage("mannequin.png");
  image(jetpack,249,100);
  stream = new JetFuel();
}

void draw(){
  
  if ((clickEvent && jetOneClicked)||(clickEvent && jetTwoClicked)){
    for (int x = 0; x < 25; x++){
      stream.addParticle(new PVector(mouseX,mouseY));
    }
      clickEvent = false;
      jetOneClicked = false;
      jetTwoClicked = false;
  }
  stream.run();
  if(clickEvent && strapClicked){ //<>//
    if(!mannequinVisible){
    scale(0.75);
    image(mannequin, 315, 100);
    mannequinVisible = true;
    }
    else{
      translate(20,20);
      image(mannequin, 315, 100);
    }
    strapClicked = false;
  }
}

void mousePressed(){
  clickEvent = true;
  if (mouseX >= 249 && mouseX <= 341 && mouseY >= 335 && mouseY <= 379){
    jetOneClicked = true;
  }
  if (mouseX >= 459 && mouseX <= 551 && mouseY >= 335 && mouseY <= 379){
    jetTwoClicked = true;
  }
  if(mouseX >= 341 && mouseX <= 459 && mouseY >= 100 && mouseY < 235){
    strapClicked = true;

  }
}

// An array to manage particles
class JetFuel {
  ArrayList<Particle> particles;
  PVector origin;

  //Constructor
  JetFuel() {
    particles = new ArrayList<Particle>();
  }

  void addParticle(PVector position) {
    origin = position.copy();
    particles.add(new Particle(origin));
  }

  void run() {
    for (int i = particles.size()-1; i >= 0; i--) {
      Particle p = particles.get(i);
      p.run();
      if (p.isDead()) {
        particles.remove(i);
      }
    }
  }
}


// A simple Particle class
class Particle {
  PVector position;
  PVector velocity;
  PVector acceleration;
  float lifespan;

  Particle(PVector l) {
    acceleration = new PVector(0, 0.05);
    velocity = new PVector(random(-1, 1), random(-2, 0));
    position = l.copy();
    lifespan = 150.0;
  }

  void run() {
    update();
    display();
  }

  // Method to update position
  void update() {
    velocity.add(acceleration);
    position.add(velocity);
    lifespan -= 1.0;
  }

  // Method to display
  void display() {
    stroke(255, lifespan);
    fill(255, lifespan);
    ellipse(position.x, position.y, 8, 8);
  }

  // Is the particle still useful?
  boolean isDead() {
    if (lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}