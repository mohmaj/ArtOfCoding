import turtle
import random
import time

def xshapes(aTurtle,B,size,sym):
      angle=360/sym
      for j in range(sym):
         aTurtle.up()
         aTurtle.forward(size)
         aTurtle.down()
         X=aTurtle.xcor()
         Y=aTurtle.ycor()
         for k in range(len(B)):
               if B[k-1]==1:
                  aTurtle.left(angle)
               else:
                  aTurtle.right(angle)
               aTurtle.forward(size)
         aTurtle.pencolor("lightgray")
         aTurtle.goto(X,Y)
         aTurtle.pencolor("black")

def xrandv(n,f):
    B=[0]*n
    for i in range(n):
        r=random.random()
        if r >=f:
            B[i]=1
        else:
            B[i]=0 
    return B

def main():
    S=input("symmetry        ")  # Order of symmetry (>3)
    symmetry=int(S)
    F=input("fraction        ")  # Relative number of 1's in bit string
    fraction=float(F)
    L=input("contour length  ")  # Length of contour bit string
    length=int(L)
    Z=input("segment size    ")  # Length of line segments in pixels
    size=int(Z)
#
    tom=turtle.Pen()
    tom.hideturtle() 
    tom.speed(0)
    turtle.bgcolor("white")      # Background color
    tom.pencolor("black")        # Line color
    tom.pensize(1)               # Line width
#
    tom.goto(0,0)
    B=xrandv(length,fraction)    # Random initial conditions
    xshapes(tom,B,size,symmetry)
main()
