/*
  Main circle with many smaller circles (moving and changing sizes) attached
*/

Circle mainC;
Circle[] c = new Circle[10];
void setup() {
  size(500,500);
  background(255); // this sets the background colour to white
  frameRate(30); // number of frames per second; the larger the number the faster the animation 
  
  // initialising mainC with position, size and colour (red)
  mainC = new Circle(width/2, height/2, 25, color(255,0,0));
  
  // initialising the circles in c
  for (int i = 0; i < c.length; i++){
    c[i] = new Circle(); 
    c[i].setX( mainC.getX() + random(-100,100) );
    c[i].setY( mainC.getY() + random(-100,100) );
    c[i].setSize( 5 + random( mainC.getSize()-10 ) );
  }
}

void draw() {
  background(255); // this keeps cleaning the background before showing the new frame
  
  //mainC.setX( mainC.getX() + 0.25 );
  
  // moving the cicles in c
  for (int i = 0; i < c.length; i++){
    c[i].setX( c[i].getX() + random(-3,1) );
    c[i].setY( c[i].getY() + random(-1,1) );
    c[i].setSize( c[i].getSize() + random(-1,1) );
  }
  
  // draw lines connecting the circles in c to mainC
  // and draw the circles in c
  for (int i = 0; i < c.length; i++){
    line(mainC.getX(), mainC.getY(), c[i].getX(), c[i].getY() );
    c[i].draw();
  }
  
  // draw mainC
  mainC.draw();  
  
  //Bring the first small circle to where it's clicked
  if (mousePressed) {
    c[0].setX(mouseX);
    c[0].setY(mouseY);
  }
  
}

void keyPressed() {
  if ( key == 's')
    save("SampleSnapshot.png");
}


public class Circle {
  float x; 
  float y;
  float size; // diameter 
  color colour;
  
  public Circle() {
    x = random(width);
    y = random(height);
    size = random(100);
    colour = color( random(255), random(255), random(255) ); // picking random RGB colours
  }
  
  // Constructor: taking (x,y) coordinate and size of the circle
  public Circle(float newX, float newY, float newSize) {
    x = newX;
    y = newY;
    size = newSize;
  }
  
  // Constructor: taking (x,y) coordinate, size and colour of the circle
  public Circle(float newX, float newY, float newSize, color newColour) {
    x = newX;
    y = newY;
    size = newSize;
    colour = newColour;
  }
  
  // drawing the circle
  public void draw() {
    fill( colour ); 
    ellipse(x, y, size, size);
  }
  
  // getters
  public float getX() {
    return x;
  }
  
  public float getY() {
    return y;
  }
  
  public float getSize() {
    return size;
  }
  
  public color getColour() {
    return colour;
  }
  
  // setters 
  public void setX(float newX) {
    x = newX;
  }
  
  public void setY(float newY) {
    y = newY;
  }
  
  public void setSize(float newSize) {
    size = newSize;
  }
  
  public void setColour(color newColour) {
    colour = newColour;
  }
}
