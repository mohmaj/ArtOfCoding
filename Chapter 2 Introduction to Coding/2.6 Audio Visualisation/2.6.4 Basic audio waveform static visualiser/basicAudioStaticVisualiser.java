import javax.swing.*;
import java.awt.*;
import java.awt.geom.*;
import java.awt.event.*;
import java.awt.image.*;
import java.awt.Point;
import java.io.*;
import javax.sound.sampled.*;
import java.util.ArrayList;

public class basicAudioStaticVisualiser {
    static int xStep = 4; //how many pixels between each x coordinate value - smaller number finer-grained graph
    static Dimension size = new Dimension(800, 300); //width , height of panel also sample length and height
    static BufferedImage imageBuffer;
    static JPanel view;

    static void loadAudio() {

        float[] samples;

        try {
			File file = new File("pop.wav"); //load file from PC
		
            AudioInputStream input = AudioSystem.getAudioInputStream(file);
			//extract raw data from audio file
			
            AudioFormat format = input.getFormat();
			//check that the file is of a valid type
			//if not, throw an exception

            if(format.getEncoding() != AudioFormat.Encoding.PCM_SIGNED) {
                throw new UnsupportedAudioFileException("unsigned");
            }
			
			////////////////////////////
			long audioFileLength = file.length();
			int frameSize = format.getFrameSize();
			float frameRate = format.getFrameRate();
			float durationInSeconds = (audioFileLength / (frameSize * frameRate));
			
			System.out.println("audioFileLength: "+audioFileLength);
			// audio file length = number of frames x size of frames (4)
			// size of frames = (16bit file = 8 bits per byte = 2 bytes) x 2 channels (R&L)  = 4
			System.out.println("frameSize: "+frameSize);
			
			//System.out.println("number of frames: " + frameLength); - see below -
			
			System.out.println("framerate: "+frameRate);
			System.out.println("duration: "+durationInSeconds);
			////////////////////////////

            boolean big = format.isBigEndian();
			// sorts the bytes in the same order as they are produced
			//from the original sound file to preseve continuity and makes addition simpler
            int channels = format.getChannels(); // how many channels in this audio file?
            int bits = format.getSampleSizeInBits();
            int bytes = bits + 7 >> 3; // bit shifting to allow for 16bit addition
			//8 bits per byte, so for a 16bit audio file, 2 bytes!
			//2 channels for stereo, therefore 4 bytes per frame
			
			System.out.println("bytes: " + bytes);
			System.out.println("channels: " + channels);

            int frameLength = (int)input.getFrameLength();//how many frames in this audio file?
            int bufferLength = channels * bytes * 1024;
			// number of channels x bytes per frame x 1024
			// the extra 1024 is so that the buffer is large enough to hold all the data before processing
			// even though we may not use all the memory space it saves cpu cycles
			// in other words, the calculations can be done on what is held in memory rather than as they are fed by the data stream
			
			System.out.println("number of frames or length: " + frameLength);
			System.out.println("bufferLength: " + bufferLength);
			
            samples = new float[frameLength];
            byte[] audioBuffer = new byte[bufferLength];
			//create a byte[]  called audioBuffer with the length set to bufferLength

            int i = 0;
            int bRead; //bytes[]  read
            while((bRead = input.read(audioBuffer)) > -1) {

                for(int b = 0; b < bRead;) { //b here is the variable for bits from bytes
                    double sum = 0;

                    // (sums to mono if multiple channels)
                    for(int c = 0; c < channels; c++) { // c here is: which channel, Left or Right?
                        if(bytes == 1) {
                            sum += audioBuffer[b++] << 8; // add bytes from each channel

                        } else {
                            int sample = 0;
							//without going into too much detail, the next part is a method for concatenating the bits in each byte,
							//but becasue the bits are not arranged nicely for simple addition they need to be reorganised
							
                            // (quantizes to 16-bit)
                            if(big) {
                                sample |= (audioBuffer[b++] & 0xFF) << 8;
                                sample |= (audioBuffer[b++] & 0xFF);
                                b += bytes - 2;
                            } else {
                                b += bytes - 2;
                                sample |= (audioBuffer[b++] & 0xFF);
                                sample |= (audioBuffer[b++] & 0xFF) << 8;
                            }

                            final int sign = 1 << 15;
                            final int mask = -1 << 16;
                            if((sample & sign) == sign) {
                                sample |= mask;
								// make sure the sign is maintained so after the bit shifting has occured
                            }

                            sum += sample;
                        }
                    }

                    samples[i++] = (float)(sum / channels); // note: samples not sample!
					
					// after iterating through the channels and adding samples to the overall byte[]
					//they are summed to form a single byte array for storing in another buffer
					//ready to be drawn in the next method drawImage
                }
            }
			
        if(imageBuffer == null) {
            imageBuffer = new BufferedImage(size.width, size.height, BufferedImage.TYPE_INT_ARGB);
        } //size.width and size.height forces the graphic to fit the panel window

        drawImage(samples); //here we send the samples data to the drawImage method so it can be displayed
		
		} catch(IOException ioe) {
			System.out.println(ioe.toString());
		} catch(UnsupportedAudioFileException uafe) {
			System.out.println(uafe.toString());
		}
    }
///////////////////////////////////////////	
	    // draw the image
    static void drawImage(float[] samples) {
        Graphics2D g2d = imageBuffer.createGraphics();

		int tSamplePoints = 1000; // total number of points in samples to be used
		
        int numSubsets = tSamplePoints/xStep; //generates number of points on graph at xStep increments
											// scaled by xStep (currently 4)
        int subsetLength = samples.length / numSubsets; //subsetLength is the total 
		
		System.out.println("samples.length: " + samples.length);
		System.out.println("subsetLength: " + subsetLength);

        float[] subsets = new float[numSubsets];

		// we already know the 44.1kHz sample rate is too high to draw so we ned to scale
		// we will only draw each nth sample, rather than all of them - too big
		// so, this is where the scaling is performed
		
        // find the absolute (Math.abs) average for each subset
        int s = 0;
        for(int i = 0; i < subsets.length; i++) {
            double sum = 0;
            for(int k = 0; k < subsetLength; k++) {
                sum += Math.abs(samples[s++]);
				//add all values within a subset.samples together
            }

            subsets[i] = (float)(sum / subsetLength);
			//divide the sum of a subset by its length (how many values in the subset)
			//and assign it to subsets
        }
		
		// the numbers are still pretty big so we need to bring them down to something we can fit inside our panel
		
        // find the peak so the waveform can be normalized to within the height of the image panel
        float normal = 0;
        for(float sample : subsets) {
		// sample here is not the same as sample used in other parts of the code
		// sample here takes its value from subsets without replacing subsets' values
		// it converts the byte to a float
            if(sample > normal)
                normal = sample; // normal is the biggest number in the sample range
        }
		
		//the range of 16 bit integers is -32768 to 32767 for a signed 16bit audio signal
		// therefore, we need to convert from int to float and normalise between -1 and 1 
		// although the values ahve alrady been unisgned in a previous Math.abs operation 
		
        // normalize and scale - otherwise peaks on the graph will be off the page!
		// to do this take the biggest number in the sample range (normal)
		//and use it to divide the largest possible value in a 16 bit audio signal (+ or - 32768)
		// reassign this new number to normal again
        normal = 32768.0f / normal;
        for(int i = 0; i < subsets.length; i++) { 
            subsets[i] *= normal;
            subsets[i] = (subsets[i] / 32768.0f ) * (size.height);
			// size.height (defined at the top in Dimension) affects the height range of the graph also
        }
		// now all subset values are between -1 and 1

    ArrayList<Integer> arrayX = new ArrayList<Integer>();
	ArrayList<Integer> arrayY = new ArrayList<Integer>();
	    
		int x;
		int sample = 0; // to initialise, need to give a seed value
		
        // convert to image coords and do actual drawing
        for(int i = 0; i < subsets.length - 1; i++) {
            sample = (int)subsets[i]; // sample here is also not the same as sample earlier in the code
            x = i * xStep;
			arrayX.add(x);
			arrayY.add(sample);
			}
			
			g2d.setColor(Color.RED);
      for (int i = 0; i < arrayX.size() - 1; i++) {

         int x1 = arrayX.get(i); 
         int y1 = arrayY.get(i); 
         int x2 = arrayX.get(i + 1);
         int y2 = arrayY.get(i + 1);

         g2d.drawLine(x1, y1, x2, y2);
		 //System.out.println("arrayX.size: " + arrayX.size()); //240
      }
        //g2d.dispose();
        view.repaint();
        //view.requestFocus();
    }


    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                JFrame frame = new JFrame("Basic Audio Static Visualiser");
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

                        if(imageBuffer != null) {
                            g.drawImage(imageBuffer, 1, 1, imageBuffer.getWidth(), imageBuffer.getHeight(), null);
                        }
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



