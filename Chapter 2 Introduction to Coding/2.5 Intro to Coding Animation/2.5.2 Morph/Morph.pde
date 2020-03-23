// Morph

// Below, a few ArrayLists are created to store the vertices of the shapes
ArrayList<PVector> circle = new ArrayList<PVector>();
ArrayList<PVector> triangle = new ArrayList<PVector>();
ArrayList<PVector> square = new ArrayList<PVector>();
ArrayList<PVector> random = new ArrayList<PVector>();

// This ArrayList will contain the vertices of what will be drawn
ArrayList<PVector> morph = new ArrayList<PVector>();

/* The variable below shows which shape is to be drawn:
 * 0: circle
 * 1: triangle
 * 2: square 
 * 3: random
 */
int currentState = 0;

void setup() {
  size(400,400);

  // Create a circle using vectors pointing from center
  for (int angle = 0; angle < 360; angle += 9) {
    PVector v = PVector.fromAngle(radians(angle-90)); // Starting from the top centre to match the top tip of the triangle 
    v.mult(50); // scaling the circle (i.e. diameter: 100)
    circle.add(v); // adding vertix v to the ArrayList circle
    
    // Here the ArrayList morph is populated with empty PVectors which will be populated later
    morph.add(new PVector());
  }

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

  // calling a function that creates a random shape
  createRandomShape();
}

int counter = 0;
void draw() {

  if (false){
    if (counter % 20 == 0)
        saveFrame("/home/m/Downloads/asdfdsf/"+counter+".png");
      counter++;}
    
  background(255); // setting the background colour to white 

  // This value keeps the distance of the vertices from the target
  float totalDistance = 0;

  // Vertex by vertex lerping
  for (int i = 0; i < 40; i++) {
    PVector v1;

    // Deciding which shape to lerp to
    if (currentState == 0)
      v1 = circle.get(i);
    else if (currentState == 1)
      v1 = triangle.get(i);
    else if (currentState == 2)
      v1 = square.get(i);
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
    
    if (currentState > 3) {
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
