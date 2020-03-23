# prog01.py
 
import turtle
 
def star(aTurtle,size,sym): # The following 5 commands define ("def") how to draw a star.
    for i in range(sym):      # Do the following sym times:
        aTurtle.right(2*360/sym)  urn right (144 degrees if sym=5).
        aTurtle.forward(size) # Draw a line segment (100 pixels long if size=100).
        aTurtle.left(360/sym) # Turn left (72 degrees if sym=5).
        aTurtle.forward(size) # Draw a line segment (100 pixels long if size=100).
  
def main():           # The following commands are the main program.
    tom=turtle.Pen()  # Create a turtle named "tom" and give it a "pen.!"
    turtle.bgcolor("beige") # Set the background color to beige (Boring! We'll change this later)
    tom.color("blue") # Set the pen color to blue.
    tom.pensize(3)    # Make the lines 3 pixels wide.
    tom.speed(3)      # Sedrawing speed slow so you can see what's happening.
    size=100          # Set the length of line segments to 100 pixels.
    sym=5             # Set the number of points on the star to 5.
    tom.hideturtle()  # Make the turtle invisible. We don't need to see it.
    tom.up()          # Raise the pen.
    tom.goto(50,50)   # Move the turtle to its starting point (x=50, y=50).
    tom.down()        # Put the pen down so the turtle can draw.
    star(tom,size,sym)# Execute the "star" procedure defined above.  
main()                # End of main program.
