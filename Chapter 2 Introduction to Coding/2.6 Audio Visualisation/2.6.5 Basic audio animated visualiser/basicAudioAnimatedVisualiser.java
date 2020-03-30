import java.awt.EventQueue;
import javax.swing.SwingWorker;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JLabel;
import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.GraphicsEnvironment;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.image.BufferedImage;
import java.awt.Transparency;
import java.awt.geom.Path2D;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

import java.io.File;
import java.io.IOException;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutionException;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.AudioFileFormat;
import javax.sound.sampled.AudioFormat;
import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.SourceDataLine;
import javax.sound.sampled.UnsupportedAudioFileException;
import javax.sound.sampled.LineUnavailableException;

public class basicAudioAnimatedVisualiser {
    
    public static final int DEF_BUFFER_SAMPLE_SZ = 2048;
	//determines the width of the overall wave sampled and displayed ***2048***
    
    public interface PlayerRef {
        public File getFile();
        public void playbackEnded();
        public void drawDisplay(float[] samples, int svalid);
    }
    
    private JFrame mainFrame = new JFrame("Basic Audio Animated Visualiser");
    private JPanel contentPane = new JPanel();
    private DisplayPanel displayPanel = new DisplayPanel();

    private File audioFile;
    private AudioFormat audioFormat;
    
    private final PlayerRef thisPlayer = new PlayerRef() {
        @Override
        public File getFile() {
            return audioFile;
        }
        
        @Override
        public void playbackEnded() {
            displayPanel.reset();
            displayPanel.repaint();
        }
        
        @Override
        public void drawDisplay(float[] samples, int svalid) {
            displayPanel.makePath(samples, svalid);
            displayPanel.repaint();
        }
		
    };
    
    public basicAudioAnimatedVisualiser() {
        assert EventQueue.isDispatchThread();
        
        mainFrame.setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);
        mainFrame.addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent we) {
            		mainFrame.dispose();
                System.exit(0);
            }
        });
        
		contentPane.add(displayPanel);
		
        mainFrame.setContentPane(contentPane);        
        mainFrame.pack();
        mainFrame.setResizable(true);
        mainFrame.setLocationRelativeTo(null);
        
		loadAudio();
        mainFrame.setVisible(true);
    }
    
    private void loadAudio() {
		try {
			audioFile = new File("pop.wav");

			AudioFileFormat fmt = AudioSystem.getAudioFileFormat(audioFile);
		   
			audioFormat = fmt.getFormat();

			new PlaybackLoop(thisPlayer).execute();

			
		} catch(IOException ioe) {
			System.out.println(ioe.toString());
		} catch(UnsupportedAudioFileException uafe) {
			System.out.println(uafe.toString());
		}
    }
 

////////////////////////////////////////////////////////////////////////////////////
 
    public static class PlaybackLoop extends SwingWorker<Void, Void> {
	// note capitalisation of Void - this is different to void
	
	//The SwingWorker class provides two placeholders (generics).
	// The first one represents the type of object returned when the worker has finished working.
	//The second one represents the type of information that the worker will use to inform (update) the application with its .
	// Void can only return null. Void is used when you don't wnat to use a class name - althoguh Void is a class in its own right, it is instantiable
	
	//as we are trying to run multiple threads at the same time we need to use a class that supports this functionality and
	// in a way that organises the data to the threads in a manner that doesn't interupt the flow
	//where as thread or runnable can do this, SwingWorker is more ffecient - we can do stuff in the background
	// we are sending stuff to the Event Dispatch Thread (EDT) 
	// as the SwingWorker documentaiton says:
		//Time-consuming tasks should not be run on the Event Dispatch Thread. Otherwise the application becomes unresponsive.
		// Swing components should be accessed on the Event Dispatch Thread only.
	//These constraints mean that a GUI application with time intensive computing needs at least two threads:
		//1) a thread to perform the lengthy task and
		//2) the Event Dispatch Thread (EDT) for all GUI-related activities. 
	//This involves inter-thread communication which can be tricky to implement.
	//SwingWorker is designed for situations where you need to have a long running task run in a background thread and
	//provide updates to the UI either when done, or while processing.
	//Subclasses of SwingWorker must implement the doInBackground() method to perform the background computation.
	//you can do this using Thread, Runtime and SwingUtilities (invokeLater) but it's less error prone using the SwingWorker class.
	//SwingWorker takes care of some details, like UI updates while running the task, or after task finishes.
	//These must be executed on Swing EDT thread.
	//SwingWorker encapsulates correct interaction with the event dispatching thread. Runnable doesn't.
	//importantly what the SwingWorker does is to provide aprial returns so that the GUI can be update as the backgorudn is being loaded
	//for exampel, if you were downloading images off the internet, instead of waiting for all of them to be downloaded before showing in a list - they are displayed as they are downloaded.
	//in the case here it measn we can load our aiio file in the akgorund and play it while it is being loaded as well as display the line graph
	
        
        private final PlayerRef playerRef;
		private static boolean bUpdated = false; //bytes updated
        
        public PlaybackLoop(PlayerRef pr) {
            playerRef = pr;
        }
        
        @Override
        public Void doInBackground() throws IOException,
		// doInBackground() note capital V on Void.
		// The method doInBackground() is where the complex and long task is executed (AudioInputStream).
		// This method is not invoked by the event dispatcher thread, but by another thread (referred to hereunder as the worker thread).
        	UnsupportedAudioFileException, 
        	LineUnavailableException {
			
        	AudioInputStream in = null; // get data from audio file
            SourceDataLine out = null; // feed it to the dataline for processing
            
            try {
                final AudioFormat audioFormat = (
                    AudioSystem.getAudioFileFormat(playerRef.getFile()).getFormat()
                );
                
                in = AudioSystem.getAudioInputStream(playerRef.getFile());
                out = AudioSystem.getSourceDataLine(audioFormat);
                
                final int normalBytes = normalBytesFromBits(audioFormat.getSampleSizeInBits());
                
                float[] samples = new float[DEF_BUFFER_SAMPLE_SZ * audioFormat.getChannels()];
                long[] transfer = new long[samples.length];
                byte[] bytes = new byte[samples.length * normalBytes];
                
                out.open(audioFormat, bytes.length);
                out.start();
                
                /*
                 * feed the output some zero samples
                 * helps prevent the 'stutter' issue.
                 * 
                 */

						
				int bread; //bytes read
				play_loop: do {
				if((bread = in.read(bytes)) == -1) {
					break play_loop; // eof
				}
				
				samples = unpack(bytes, transfer, samples, bread, audioFormat);
				float avg = 0;
				for (int i = 0; i < samples.length; i++) {
						avg = avg + samples[i];
				}
				avg = avg / samples.length + 1f;
                                
				bUpdated = true;
					
				playerRef.drawDisplay(samples, bread / normalBytes);
				
				out.write(bytes, 0, bread);
				} while(true);
            } catch (IOException ioe) {
                System.out.println(ioe.toString());
            } catch (UnsupportedAudioFileException uafe) {
            		System.out.println(uafe.toString());
			} catch (LineUnavailableException lue) {
				System.out.println(lue.toString());
			}finally {
				if(in != null) {
					in.close();
				}
				if(out != null) {
					out.flush();
					out.close();
				}
			}
            
            return (Void)null;
        }
        
        @Override
        public void done() {
            playerRef.playbackEnded();
            
            try {
                get();
            } catch(InterruptedException io) {
            } catch(CancellationException ce) {
            } catch(ExecutionException ee) {
                System.out.println(ee.toString());
            }
        }
    }
    
    public static float[] unpack(byte[] bytes,
						        long[] transfer,
						        float[] samples,
						        int bvalid,
						        AudioFormat fmt) {
    	
        if(fmt.getEncoding() != AudioFormat.Encoding.PCM_SIGNED
        	&& fmt.getEncoding() != AudioFormat.Encoding.PCM_UNSIGNED) {
            return samples;
        }
        
        final int bitsPerSample = fmt.getSampleSizeInBits();
        final int normalBytes = normalBytesFromBits(bitsPerSample);
        final long fullScale = (long)Math.pow(2, bitsPerSample - 2);//bitsPerSample - this number determines hieght of wave
        

        
        if(fmt.isBigEndian()) {
            for(int i = 0, k = 0, b; i < bvalid; i += normalBytes, k++) {
                transfer[k] = 0L;
                
                int least = i + normalBytes - 1;
                for(b = 0; b < normalBytes; b++) {
                    transfer[k] |= (bytes[least - b] & 0xffL) << (8 * b);
                }
            }
        } else {
            for(int i = 0, k = 0, b; i < bvalid; i += normalBytes, k++) {
                transfer[k] = 0L;
                
                for(b = 0; b < normalBytes; b++) {
                    transfer[k] |= (bytes[i + b] & 0xffL) << (8 * b);
                }
            }
        }
        /*
         * the OR is not quite enough to convert,
         * the signage needs to be corrected.
         * 
         */
        
        if(fmt.getEncoding() == AudioFormat.Encoding.PCM_SIGNED) {
            
  
            
            long signShift = 64L - bitsPerSample;
            
            for(int i = 0; i < transfer.length; i++) {
                transfer[i] = (
                    (transfer[i] << signShift) >> signShift
                );
            }
        }
        /* finally normalize to range of -1.0f to 1.0f */
        
        for(int i = 0; i < transfer.length; i++) {
            samples[i] = (float)transfer[i] / (float)fullScale;
        }
        
        return samples;
    }
    
    public static int normalBytesFromBits(int bitsPerSample) {
        
        
        return bitsPerSample + 7 >> 3;
    }
    
	/////////////////////////////////////////////////////////////////////////////
	
	
    public class DisplayPanel extends JPanel {
        
        private final BufferedImage image;        
        private final Path2D path = new Path2D.Float();
                
        private final Object pathLock = new Object();
        
        {
            Dimension pref = getPreferredSize();
            
            image = (
                GraphicsEnvironment
                .getLocalGraphicsEnvironment()
                .getDefaultScreenDevice()
                .getDefaultConfiguration()
                .createCompatibleImage(
                    pref.width, pref.height, Transparency.OPAQUE
                )
            );
        }
        
        public DisplayPanel() {
            setOpaque(false);
        }
        
        public void reset() {
            Graphics2D g2d = image.createGraphics();
            //g2d.setBackground(Color.BLACK);//white
            g2d.clearRect(0, 0, image.getWidth(), image.getHeight());
            g2d.dispose();
        }
        
        public void makePath(float[] samples, int svalid) {
            if(audioFormat == null) {
                return;
            }
            
            
            /* lots of ratios */            
            float avg = 0f;
            float hd2 = getHeight() / 2f;//determines hieght of sample wave            
            final int channels = audioFormat.getChannels();
            
            /* 
             * have to do a special op for the
             * 0th samples because moveTo.
             * 
             */            
            int i = 0;
            while(i < channels && i < svalid) {
                avg += samples[i++];
            }
            
            avg /= channels;  
            
			path.reset();
            path.moveTo(0, hd2 - avg * hd2);			

            
            int fvalid = svalid / channels;
            for(int ch, frame = 0; i < svalid; frame++) {
                avg = 0f;
                
                /* average the channels for each frame. */                
                for(ch = 0; ch < channels; ch++) {

                    avg += samples[i++];
                }
                
                avg /= channels;
                
                path.lineTo(
                    (float)frame / fvalid * image.getWidth(), hd2 - avg * hd2
                );
            }
			
			
                
            Graphics2D g2d = image.createGraphics();
            
            synchronized(pathLock) {
			
                g2d.setBackground(Color.WHITE);
                g2d.clearRect(0, 0, image.getWidth(), image.getHeight());
                
                g2d.setPaint(Color.BLUE);
                g2d.draw(path);
            }
	
        }
        
        @Override
        protected void paintComponent(Graphics g) {
            super.paintComponent(g);
            
            synchronized(pathLock) {
                g.drawImage(image, 0, 0, null);
            }
        }
        
        @Override
        public Dimension getPreferredSize() {
            return new Dimension(DEF_BUFFER_SAMPLE_SZ / 2, 512);// determines height of sample window
        }
        
        @Override
        public Dimension getMinimumSize() {
            return getPreferredSize();
        }
        
        @Override
        public Dimension getMaximumSize() {
            return getPreferredSize();
        }
    }

	    public static void main(String[] args) {
        EventQueue.invokeLater(new Runnable() {
		//Here we are instructing Java to execute our Runnable by the event dispatcher thread (EDT).
		// our basicAudioAnimatedVisualiser() only exists within this thread.
		// but if all events are handled by only one thread, then the thread would get blocked and
		//the applicaiton would be become unresponsive when we add long lasting tasks like loading the aduio file to the queue.
		// thats why we use a SwingWorker to provide for multiple parallel threads - although they all ultimately must go through the EDT
            @Override
            public void run() {
                new basicAudioAnimatedVisualiser();
            }
        });
    }

}