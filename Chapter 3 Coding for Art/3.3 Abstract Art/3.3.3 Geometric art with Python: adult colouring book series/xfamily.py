import turtle
import random
import time

def rotl(l, y=1):
   if len(l) == 0:
      return l
   y = y % len(l)
   return l[y:] + l[:y]

def rotr(l, y=1):
   if len(l) == 0:
      return l
   y = -y % len(l)
   return l[y:] + l[:y]

def dec2bin(i):
    str="{0:b}".format(i)
    while len(str)<8:
        str='0'+str
    num=[0]*8
    for i in range(8):
        if str[i]=='0':
            num[i]=0
        else:
            num[i]=1
    return num

def vecadd(a,b):
    n=len(a)
    m=len(b)
    if n==1 and m==1:
        res=[a[0]+b[0]]
    else:
        if n==1:
            a=a*len(b)
            k=len(b)
        else:
            b=b*len(a)
            k=len(a)
        res=[0]*k
        for i in range(k):
            res[i]=a[i]+b[i]
    return res

def xshapes(aTurtle,B,size,sym):
      angle=360/sym
      aTurtle.goto(0,0)
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

def vecsub(a,b):
    n=len(a)
    m=len(b)
    if n==1 and m==1:
        res=[a[0]-b[0]]
    else:
        if n==1:
            a=a*len(b)
            k=len(b)
        else:
            b=b*len(a)
            k=len(a)
        res=[0]*k
        for i in range(k):
            res[i]=a[i]-b[i]
    return res

def vecmul(a,b):
    n=len(a)
    m=len(b)
    if n==1 and m==1:
        res=[a[0]*b[0]]
    else:
        if n==1:
            a=a*len(b)
            k=len(b)
        else:
            b=b*len(a)
            k=len(a)
        res=[0]*k
        for i in range(k):
            res[i]=a[i]*b[i]
    return res

def CAstep(x,rule):
    r=dec2bin(rule)
    a=vecsub([8],vecadd(rotl(x),vecmul([2],vecadd(x,vecmul([2],rotr(x))))))
    n=len(x)
    res=[0]*n
    for i in range(n): 
        res[i]=(r[a[i]-1])
    return res

def rules(n):
   bestrules=[18,22,26,28,30,45,50,54,57,58,60,62,70,73,75,78,82,86,89,90,92,94,99,101,102,105,109,110,114,118,122,124,126,129,131,133,
      135,137,141,145,146,147,149,150,153,154,156,157,158,161,163,165,167,169,177,178,179,181,182,186,188,190,193,195,197,
      198,199,210,214,218,225,230,242,246,250]
   return bestrules[n]

def main():
    S=input("symmetry        ")  # Order of symmetry (>3)
    symmetry=int(S)
    R=input("rule            ")  # Cellular automaton rule(0-255)
    rule=rules(int(R))      
    G=input("generations     ")  # Number of cellular automaton generations (>0)
    generations=int(G)+1 
    L=input("contour length  ")  # Length of contour bit string
    length=int(L)
    Z=input("segment size    ")  # Length of line segments in pixels
    size=int(Z) 
#
    B=[0]*length                 # "Standard" initial conditions
    B[int(length/2)]=1
#
    tom=turtle.Pen() 
    tom.speed(0)
    turtle.bgcolor("white")      # Background color
    tom.pencolor("black")        # Line color
    tom.pensize(1)               # Line width
#
    for i in range(generations):
       tom.hideturtle()        
       xshapes(tom,B,size,symmetry)
       tom.up()
       tom.goto(-300,-300)
       tom.down()
       ID=str(symmetry)+' '+str(int(R))+' '+str(i)+' '+str(length)+' '+str(size)
       tom.write(ID,align="left",font=("Arial",16,"normal")) 
       filename='xfamily'+str(i)+'.ps'
       turtle.getscreen().getcanvas().postscript(file=filename)
       time.sleep(2)
       tom.reset()
       B=CAstep(B,rule) 
main()
