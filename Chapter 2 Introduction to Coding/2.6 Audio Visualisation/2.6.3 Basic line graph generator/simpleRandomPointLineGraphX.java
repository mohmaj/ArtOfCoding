import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.*;
import javax.swing.JFrame;
import javax.swing.*;
import java.util.ArrayList;
import java.util.Random;

public class simpleRandomPointLineGraphX { //extends JFrame {

	static JPanel view;

    static void drawLines(Graphics g) {
        Graphics2D g2d = (Graphics2D) g;

	Random rand = new Random();
			
    ArrayList<Integer> arrayX = new ArrayList<Integer>();
	ArrayList<Integer> arrayY = new ArrayList<Integer>();

    int x ;
	int y ;

	int temp = 5; // upper limit of random number;
				// ie generate random numbers between 1 and 5

    for(int i = 0;i < 25; i++) // < 25 is number of times the random number generator iterates (runs 25 times)
    {
		// increment x for each of (i) 
		x = (i)*20; // offset each x value by 20 pixels
		arrayX.add(x); // add/store the x values to/in our arrayX so we can use them later
        System.out.println("X:" + x);
		
		y = Math.abs(rand.nextInt()%temp)+1; // make y = to the next random integer between 1 and 5 (temp limit)
		arrayY.add((y*20)+50); // because y values are small, mulitply by 20 so they are at least 20 pxiels apart
							// then add 50 so they are at least 50 pixels down from top of frame
        System.out.println("Y:" + ((y*20)+50));
    }
	      g.setColor(Color.RED);
      for (int i = 0; i < arrayX.size() - 1; i++) {
	  // get the arrayX size or length (how many numbers in it) and let i iterate thsi many times less 1 (so it can start at 0)
         int x1 = arrayX.get(i); // get the first value for i and assign it to x1 on our graph
         int y1 = arrayY.get(i); // get the first value for i and assign it to x1 on our graph
         int x2 = arrayX.get(i + 1); // get the (i + 1), or second, value for i and assign it to x2 on our graph
         int y2 = arrayY.get(i + 1); // get the (i + 1), or second, value for i and assign it to x2 on our graph
		 // now, keep doing this for as many times as there are numbers in our arrayX
		 // and assign their value to the x1, y1 and x2, y2 points on our graph
         g.drawLine(x1, y1, x2, y2); // draw a line between the x1, y1 and x2, y2 points on our graph
									// repeat for each iteration of x1, y1 and x2, y2 points on our graph
									// until all the numbers in the array have been used up
      }
	  //view.repaint();
    }
 
    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
			    
				JFrame frame = new JFrame("Simple Random-Point Line Graph");
				JPanel content = new JPanel();
                frame.setContentPane(content);
                
				view = new JPanel() {
                    @Override
                    protected void paintComponent(Graphics g) {
                        super.paintComponent(g);
                            drawLines(g);
                    }
                };

                view.setBackground(Color.WHITE);
                view.setPreferredSize(new Dimension(500, 200));
				
				content.add(view);

                frame.pack();
                frame.setResizable(true);
                frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                frame.setLocationRelativeTo(null);
                frame.setVisible(true);
            }
        });
    }
}