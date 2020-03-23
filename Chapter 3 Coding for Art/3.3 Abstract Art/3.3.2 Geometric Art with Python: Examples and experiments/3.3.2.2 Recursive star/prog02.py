import turtle
 
def rstar(aTurtle,size,sym):
	if size>4:   # draw a star if size is greater than 4 pixels.     	
    	for i in range(sym):
        	aTurtle.right(2*360/sym)        	
        	aTurtle.forward(size)
        	aTurtle.left(360/sym)
        	aTurtle.forward(size)  
        	rstar(aTurtle,int(size/3),sym) # rstar "calls" itself here.
 
def main():
	tom=turtle.Pen()
	turtle.bgcolor("navy")
	tom.color("yellow")
	tom.pensize(1)	# Reduce pen size to allow greater detail.
	tom.speed(0)
	size=200
	sym=5
	tom.hideturtle()
	tom.up()
	tom.goto(250,50)   # Start the turtle at (250,50) to fit on the screen
	tom.down()
	rstar(tom,size,sym)	
main()
