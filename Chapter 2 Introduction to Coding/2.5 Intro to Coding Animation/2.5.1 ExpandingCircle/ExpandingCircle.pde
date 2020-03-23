void setup() {
  size (600, 600);
}

void draw() {
  ellipse(width/2, height/2, frameCount, frameCount);
  if (frameCount > width)
    noLoop();
}