import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.image.*;
import java.awt.event.*;////// - new -
import java.awt.*;
import java.io.*;

import javax.swing.JFrame;
import javax.sound.sampled.*;
import javax.swing.*;

import java.util.ArrayList;
import java.util.Random;

public class simpleRandomPointLineGraph02 {

    static Dimension size = new Dimension(500, 200);
	static JPanel view;
	static BufferedImage img;  ////// - new -
 
    // public simpleRandomPointLineGraph02() {
        // super("Simple Random-Point Line Graph"); //label for window
 
        // setSize(500, 200);
        // setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        // setLocationRelativeTo(null);
    // }

//////////////////////////////////////////////////////////
public static void loadAudio() {

        float[] samples;

        try {
			File file = new File("pop.wav"); 
		
            AudioInputStream in = AudioSystem.getAudioInputStream(file);
            AudioFormat fmt = in.getFormat();

            if(fmt.getEncoding() != AudioFormat.Encoding.PCM_SIGNED) {
                throw new UnsupportedAudioFileException("unsigned");
            }

            boolean big = fmt.isBigEndian();
            int chans = fmt.getChannels();
            int bits = fmt.getSampleSizeInBits();
            int bytes = bits + 7 >> 3;

            int frameLength = (int)in.getFrameLength();
            int bufferLength = chans * bytes * 1024;

            samples = new float[frameLength];
            byte[] buf = new byte[bufferLength];

            int i = 0;
            int bRead;
            while((bRead = in.read(buf)) > -1) {

                for(int b = 0; b < bRead;) {
                    double sum = 0;

                    // (sums to mono if multiple channels)
                    for(int c = 0; c < chans; c++) {
                        if(bytes == 1) {
                            sum += buf[b++] << 8;

                        } else {
                            int sample = 0;

                            // (quantizes to 16-bit)
                            if(big) {
                                sample |= (buf[b++] & 0xFF) << 8;
                                sample |= (buf[b++] & 0xFF);
                                b += bytes - 2;
                            } else {
                                b += bytes - 2;
                                sample |= (buf[b++] & 0xFF);
                                sample |= (buf[b++] & 0xFF) << 8;
                            }

                            final int sign = 1 << 15;
                            final int mask = -1 << 16;
                            if((sample & sign) == sign) {
                                sample |= mask;
                            }

                            sum += sample;
                        }
                    }

                    samples[i++] = (float)(sum / chans);
                }
            }
			
        if(img == null) {
            img = new BufferedImage(size.width, size.height, BufferedImage.TYPE_INT_ARGB);
        }

       //drawImage(samples);   /////////////// - problem here -
		
		} catch(IOException ioe) {
			System.out.println(ioe.toString());
		} catch(UnsupportedAudioFileException uafe) {
			System.out.println(uafe.toString());
		}
    }
//////////////////////////////////////////////////////////
    static void drawImage(Graphics g) {
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
	    //g2d.dispose();
        view.repaint();
        //view.requestFocus();
    }
 
    // public void paint(Graphics g) {
        // super.paint(g);
        // drawLines(g);
    // }
 
    // public static void main(String[] args) {
        // SwingUtilities.invokeLater(new Runnable() {
            // @Override
            // public void run() {
                // new simpleRandomPointLineGraph02().setVisible(true);
            // }
        // });
    // }
	
	public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                JFrame frame = new JFrame("Line Waveform");
                JPanel content = new JPanel(new BorderLayout());
                frame.setContentPane(content);
				

                JButton load = new JButton("Load");
                 load.addActionListener(new ActionListener() {
                     @Override
                     public void actionPerformed(ActionEvent ae) {
                        loadAudio();
                    }
                 });

                view = new JPanel() {
                    @Override
                    protected void paintComponent(Graphics g) {
                        super.paintComponent(g);

                        //if(img != null) {
                            drawImage(g); //(img, 1, 1, img.getWidth(), img.getHeight(), null);
                        //}
                    }
                };

                view.setBackground(Color.WHITE);
                view.setPreferredSize(new Dimension(size.width + 2, size.height + 2));// +2 buffer around image panel

                content.add(view, BorderLayout.CENTER);
                content.add(load, BorderLayout.SOUTH);

                frame.pack();
                frame.setResizable(false);
                frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                frame.setLocationRelativeTo(null);
                frame.setVisible(true);
            }
        });
    }
	
}

