ParticleSystem ps;
PImage pOne, pTwo, pThree, pFour;
int leafType;

// A class to describe a group of Particles
// An ArrayList is used to manage the list of Particles 

class ParticleSystem {
  ArrayList<Particle> particles;
  PVector origin;

  ParticleSystem(PVector position) {
    origin = position.copy();
    particles = new ArrayList<Particle>();
  }

  void addParticle() {
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
  PImage leaf;
  float lifespan;

  Particle(PVector l) {
    leafType = int(random(1,4));
    acceleration = new PVector(.01, 0);
    velocity = new PVector(random(-1, 1), random(-.5,.5));
    position = l.copy();
    lifespan = random(255,300);
    switch(leafType){
      case 1:
        leaf = pOne;
        break;
      case 2:
        leaf = pTwo;
        break;
      case 3:
        leaf = pThree;
        break;
      case 4:
        leaf = pFour;
        break;
    }
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
    
    if (position.x > width){
      acceleration.x = -acceleration.x;
      acceleration.y = -acceleration.y;
      velocity.x = -velocity.x;
      velocity.y = -velocity.y;
    }
  }

  // Method to display
  void display() {
    //stroke(100, lifespan);
    //fill(0, lifespan);
    //ellipse(position.x, position.y, 5, 5);
    tint(255, lifespan);
    image(leaf, position.x, position.y, 15,15);
    noTint();
    
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