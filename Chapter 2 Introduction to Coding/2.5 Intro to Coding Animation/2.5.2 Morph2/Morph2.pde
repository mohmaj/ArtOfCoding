// Morph2

// Below, a few ArrayLists are created to store the vertices of the shapes
ArrayList<PVector> circle = new ArrayList<PVector>();
ArrayList<PVector> triangle = new ArrayList<PVector>();
ArrayList<PVector> square = new ArrayList<PVector>();
ArrayList<PVector> house = new ArrayList<PVector>();
ArrayList<PVector> bird = new ArrayList<PVector>();
ArrayList<PVector> random = new ArrayList<PVector>();

// This ArrayList will contain the vertices of what will be drawn
ArrayList<PVector> morph = new ArrayList<PVector>();

/* The variable below shows which shape is to be drawn:
 * 0: circle
 * 1: triangle
 * 2: square 
 * 3: house
 * 4: bird
 * 5: random
 */
int currentState = 0;

void setup() {
  size(400,400);

  // CIRCLE ========================================
  // Create a circle using vectors pointing from center
  for (int angle = 0; angle < 360; angle += 9) {
    PVector v = PVector.fromAngle(radians(angle-90)); // Starting from the top centre to match the top tip of the triangle 
    v.mult(50); // scaling the circle (i.e. diameter: 100)
    circle.add(v); // adding vertix v to the ArrayList circle
    
    // Here the ArrayList morph is populated with empty PVectors which will be populated later
    morph.add(new PVector());
  }

  // SQUARE ========================================
  // A square consists of 4 sides, each of which will be assigned equal number of vertices
  // Top side
  for (int x = -50; x < 50; x += 10) {
    square.add(new PVector(x, -50));
  }
  // Right side
  for (int y = -50; y < 50; y += 10) {
    square.add(new PVector(50, y));
  }
  // Bottom
  for (int x = 50; x > -50; x -= 10) {
    square.add(new PVector(x, 50));
  }
  // Left side
  for (int y = 50; y > -50; y -= 10) {
    square.add(new PVector(-50, y));
  } 

  // TRIANGLE ========================================
  // Triangle consists of 3 sides, each of which is drawn below
  float var = 0; // creating a variable which initially contains 0 
  // The FOR loop below creates the side from (0,-50) to (50,50)
  for (int i=0; i<10; i++) { 
    triangle.add( new PVector(0+var/2, -50+var) );  // creating vertices for the diagonal line on the right-hand side
    var += 10; // adding 10 to var
  } 

  // The FOR loop below creates the side from (50, 50) to (-50, 50) 
  var = 0;
  for (int i=0; i<20; i++) { 
    triangle.add( new PVector(50-var, 50) );  // creating vertices for the horizontal line
    var += 5;
  } 

  // The FOR loop below creates the side from (-50, 50) to (0, -50)
  var = 0;
  for (int i=0; i<10; i++) { 
    triangle.add( new PVector(-50+var/2, 50-var) );  // creating vertices for the diagonal line on the left-hand side
    var += 10;
  } 
  
  // HOUSE ========================================
  // calling a function that creates a house
  createHouse();
  
  // BIRD ========================================
  // calling a function that creates a bird
  createBird();
  
  // RANDOM  ========================================
  // calling a function that creates a random shape
  createRandomShape();
}

int counter = 0;
void draw() {

  background(255); // setting the background colour to white 

  // This value keeps the distance of the vertices from the target
  float totalDistance = 0;

  // Vertex by vertex lerping
  for (int i = 0; i < 40; i++) {
    PVector v1;

    // Deciding which shape to lerp to
    if (currentState == 0)
      //v1 = bird.get(i);
      v1 = circle.get(i);
    else if (currentState == 1)
      v1 = triangle.get(i);
    else if (currentState == 2)
      v1 = square.get(i);
    else if (currentState == 3)
      v1 = house.get(i);
    else if (currentState == 4)
      v1 = bird.get(i);
    else 
      v1 = random.get(i);

    // Get the vertex to draw
    PVector v2 = morph.get(i);
    // Lerp to the target
    v2.lerp(v1, 0.1);
    // Check distance to target
    totalDistance += PVector.dist(v1, v2);
    //if ( totalDistance == 0.2)
    
  }
  
  // If the vertices are close enough, switch shape
  if (totalDistance < 0.1) {
    currentState++;
    
    if (currentState > 5) {
      exit();
      currentState = 0;
      createRandomShape(); // each time the random shape is generated from scratch and thus different 
    }
  }

  // Start drawing from the centre 
  translate(width/2, height/2);
  scale(2); // Double the scale of the drawing 
  strokeWeight(2);
  
  // Start drawing each one of the vertices, joining the vectices 
  beginShape();
  noFill();
  stroke(0);
  for (PVector v : morph) {
    vertex(v.x, v.y);
  }
  endShape(CLOSE);
}


void createHouse() {
  house.clear();

  // Adding the points (vertices) one by one
  house.add(new PVector(-50,-20));
  house.add(new PVector(-50,25));
  house.add(new PVector(-5,50));
  house.add(new PVector(50,10));
  house.add(new PVector(50,-30));
  house.add(new PVector(30,-50));
  house.add(new PVector(-30,-50));
  house.add(new PVector(-5,-10));
  house.add(new PVector(-50,-20));
  house.add(new PVector(-5,-10));
  house.add(new PVector(50,-30));
  house.add(new PVector(-5,-10));
  house.add(new PVector(-5,50));
  house.add(new PVector(-5,-10));
  house.add(new PVector(-50,-20));
  house.add(new PVector(-30,-50));
  house.add(new PVector(-50,-20));
  house.add(new PVector(-50,25));
  house.add(new PVector(-40,30));
  house.add(new PVector(-40,10));
  house.add(new PVector(-22,16));
  house.add(new PVector(-22,40));
  house.add(new PVector(-50,25));

  // filling the rest of required points with the last vertex 
  while (house.size()<40)
    house.add(new PVector(-50,25));
}

void createBird() {
  bird.clear();
  
  // Adding the points (vertices) one by one
  bird.add(new PVector(-50,-30));
  bird.add(new PVector(-41,-35));
  bird.add(new PVector(-38,-42));
  bird.add(new PVector(-22,-45));
  bird.add(new PVector(-8,-33));
  bird.add(new PVector(-9,-20));
  bird.add(new PVector(-4,-15));
  bird.add(new PVector(35,-16));
  bird.add(new PVector(41,-23));
  bird.add(new PVector(41,-16));
  bird.add(new PVector(49,-16));
  bird.add(new PVector(43,-11));
  bird.add(new PVector(47,-4));
  bird.add(new PVector(39,-5));
  bird.add(new PVector(-4,34));
  bird.add(new PVector(-7,44));
  bird.add(new PVector(-12,44));
  bird.add(new PVector(-7,44));
  bird.add(new PVector(-10,49));
  bird.add(new PVector(-7,44));
  bird.add(new PVector(-3,49));
  bird.add(new PVector(-7,44));
  bird.add(new PVector(-4,34));
  bird.add(new PVector(-15,34));
  bird.add(new PVector(-37,16));
  bird.add(new PVector(-42,-26));
  bird.add(new PVector(-32,-7));
  bird.add(new PVector(-9,17));
  bird.add(new PVector(6,6));
  bird.add(new PVector(17,8));
  bird.add(new PVector(21,5));
  bird.add(new PVector(13,3));
  bird.add(new PVector(24,1));
  bird.add(new PVector(1,-10));
  bird.add(new PVector(-8,-14));
  bird.add(new PVector(-6,-9));
  bird.add(new PVector(-16,-15));
  bird.add(new PVector(-15,-8));
  bird.add(new PVector(-25,-15));
  bird.add(new PVector(-24,-12));
}

void createRandomShape() {
  random.clear(); // clear the previous shape
  // Define random shape with 8 vertices (duplicate each 5 times to have 40 vertices)
  for (int i=0; i < 8; i++) {
    float x = random(-50, 50);
    float y = random(-50, 50);
    for (int j=0; j < 5; j++)
      random.add(new PVector(x, y) ) ;
  }
}
