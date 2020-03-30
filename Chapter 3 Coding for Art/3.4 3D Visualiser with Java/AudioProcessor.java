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

import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.AudioFileFormat;
import javax.sound.sampled.AudioFormat;
import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.SourceDataLine;
import javax.sound.sampled.UnsupportedAudioFileException;
import javax.sound.sampled.LineUnavailableException;
/******************************************************************************************************
 * CLASS:<br />
 * AudioProcessor<br />
 * <br />
 * DESCRIPTION:<br />
 * AudioProcessor module is the main module that read audio data from file and generate the vertival graph
 * It also invoke and drive 3D object feed a set of sample at a time 
 *******************************************************************************************************/
public class AudioProcessor {

	/* determines the width of the overall wave sampled and displayed ***2048*** */
	public static final int DEF_BUFFER_SAMPLE_SZ = 1470;//5880; 

	/* RGB Color code for light blue*/
	public static final Color LIGHT_BLUE = new Color(128, 192, 255);

	/* RGB Color code for dark blue*/
	public static final Color DARK_BLUE = new Color(0, 0, 127);

	/* JPanle Main Window */
	public static JFrame mainFrame = new JFrame("Waveform Demo");

	/* Main JPanel to add other view components */
	public static JPanel contentPane = new JPanel(new BorderLayout());

	/* Textbox label for error message display*/
	public static JLabel fileLabel = new JLabel("No file loaded");

	/* DisplayPanel instance A display panel enabling one to show different parts of an image.
	 * This panel was created to switch between the two frames of a double frame PIV image.
	 * Frame 0 means the upper half of the image is shown, frame 1 means the lower half and 
	 * frame 2 referes to the whole image. */
	public DisplayPanel displayPanel = new DisplayPanel();

	/* Hold the Audio file name */
	private File audioFile;

	/* AudioFormat class instance to store audio metadata (sample-rate,channel...etc) */
	private AudioFormat audioFormat;

	/*
	 * PlayerRef is an Interface Class to 
	 * Start the Player
	 * Display Audio data on Graph 
	 */ 
	public interface PlayerRef 
	{
		public File getFile();
		public void playbackEnded();
		public void drawDisplay(float[] samples, int svalid);
	}

	/*
	 * PlayerRef Class Implementation 
	 */
	private final PlayerRef thisPlayer = new PlayerRef() 
	{
		@Override
			public File getFile() 
			{
				return audioFile;
			}

		@Override
			public void playbackEnded()
			{
				/* Call the reset method to clear the screen*/
				displayPanel.reset();
				displayPanel.repaint();
			}

		@Override
			public void drawDisplay(float[] samples, int svalid)
			{
				/* Call the makePath method to draw on waveform on the screen */
				displayPanel.makePath(samples, svalid);
				displayPanel.repaint();
			}
	};

	/**
	 * Create and Initialize window JFrame
	 * Override paint method to call custom drawLine method
	 * 
	 * Basically, a JFrame represents a framed window and a JPanel represents some area in which controls
	 * (e.g., buttons, checkboxes, and textfields) and visuals (e.g., figures, pictures, and even text) can appear
	 *
	 * More info @https://www.cs.cmu.edu/~pattis/15-1XX/15-200/lectures/view/lecture.html
	 * @param  @none
	 * @return @none.
	 */
	static void InitializeWindow()
	{
		/* Check if EventQueue is Dispatch Thead */
		assert EventQueue.isDispatchThread();

		/* Set the action for Close Button to Nothing*/
		mainFrame.setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);

		/* Set the action for Close Button*/
		mainFrame.addWindowListener(new WindowAdapter() {
				@Override
				public void windowClosing(WindowEvent we) 
				{
				mainFrame.dispose();
				System.exit(0);
				}
				});

		/* Hide the Text label */
		fileLabel.setOpaque(true);

		/* Set Background color for Text label */
		fileLabel.setBackground(Color.BLACK);

		/* Set Foreground color for Text label */
		fileLabel.setForeground(Color.WHITE);

		/* Set Text label Position */
		fileLabel.setHorizontalAlignment(JLabel.CENTER);

		/* Set Text label Position */
		contentPane.add(fileLabel, BorderLayout.NORTH);

		/* Attach the JPanel to JFrame */
		mainFrame.setContentPane(contentPane);

		/* The pack method sizes the frame so that all its contents are at or above their preferred sizes */
		mainFrame.pack();

		/* Set the mainFrame to not Resizable */
		mainFrame.setResizable(false);

		/* Set position of the window in the Desktop relative to */
		mainFrame.setLocationRelativeTo(null);

		/* Once Frame is created we need set its visibility to true, because by default it is set to False on Creation */
		mainFrame.setVisible(true);

	}

	/* Class Constructor */
	public AudioProcessor()
	{
		/* Add the Custom Panel to Root Panel */
		contentPane.add(displayPanel, BorderLayout.CENTER);

		// Calling InitializeWindow() Method to Create Window and Populate Data
		InitializeWindow();

		/* Call the LoadAudio() method to start the audio playback and generate the graph */
		LoadAudio();
	}

	/**************************************************************************** 
	 * This method take the input audio file in PCM format
	 * iterating through the channels and add all the samples
	 * to form a single byte array ready to be drawn in the next method drawImage
	 * Also invoke the 3D object GUI
	 ****************************************************************************/
	private void LoadAudio() 
	{
		try {
			/* Find wav file in the current directory */
			audioFile = new File("dubstep-beat16k-long.wav");

			/* Open the Audio file */
			AudioFileFormat fmt = AudioSystem.getAudioFileFormat(audioFile);

			/* Find the Audio Format for the given Audio File */
			audioFormat = fmt.getFormat();

			/* Set the text lable with Audio File Name */
			fileLabel.setText(audioFile.getName());

			/* Invoke the Player ASync Task for audio playback */
			new PlaybackLoop(thisPlayer).execute();

			/* Call the 3D Object GUI */
			CanvasSpikyTetraSphere.createAndShowGUI();

		} catch(IOException ioe) {
			System.out.println(ioe.toString());
		} catch(UnsupportedAudioFileException uafe) {
			System.out.println(uafe.toString());
		}
	}

	////////////////////////////////////////////////////////////////////////////////////

	public static class PlaybackLoop extends SwingWorker<Void, Void>
	{

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

		/* Create Interface instance */ 
		private final PlayerRef playerRef;

		/* Default parameters for 3D Class */
		private static int nSpherise = 0;
		private static int nScale = 250;
		private static int nHeading = -180;
		private static int nPitch = 180;
		private static int nStep = 20;

		private static boolean bUpdated = false;

		public PlaybackLoop(PlayerRef pr) 
		{
			playerRef = pr;
		}

		@Override
			public Void doInBackground() throws IOException, 
			       // doInBackground() note capital V on Void.
			       // The method doInBackground() is where the complex and long task is executed (AudioInputStream).
			       // This method is not invoked by the event dispatcher thread, but by another thread (referred to hereunder as the worker thread).
			       UnsupportedAudioFileException, 
			       LineUnavailableException {

				       AudioInputStream in = null;
				       SourceDataLine out = null;

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

					       /* Timer task to feed audio samples to SpikyTetraSphereAudioDriven class */
					       Timer timer = new Timer();
					       timer.schedule(new TimerTask() {
							       public void run() 
							       {

							       CanvasSpikyTetraSphere.tetraSphere.Spherise = nSpherise;
							       CanvasSpikyTetraSphere.tetraSphere.Scale = nScale;
							       CanvasSpikyTetraSphere.tetraSphere.Heading = nHeading - 180;
							       CanvasSpikyTetraSphere.tetraSphere.Pitch = nPitch - 180;

							       }
							       }, 0, 1); // second value determines time delay between datasends in milliseconds

					       int bread;
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
		   if (avg < 0) {
			   nSpherise = (int)(avg * 2000.0f);
		   } else {
			   nSpherise = (int)(avg * 2000.0f);
		   }

		   // Enqueue the sample to SpikyTetraSphereAudioDriven class for 3D object motion control
		   CanvasSpikyTetraSphere.tetraSphere.Enqueue(avg);

		   nHeading = (nHeading + 1) % 360;
		   nPitch = (nPitch + 1) % 360;
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

	public class DisplayPanel extends JPanel {

		private final BufferedImage image;        
		private final Path2D.Float[] paths = {
			new Path2D.Float()//, new Path2D.Float(), new Path2D.Float()
		};        
		private final Object pathLock = new Object();

		{
			/* Get the default window Width and Height */
			Dimension pref = getPreferredSize();

			/* Build the BufferImage to render audio data pixel*/
			image = (	GraphicsEnvironment
					.getLocalGraphicsEnvironment()
					.getDefaultScreenDevice()
					.getDefaultConfiguration()
					.createCompatibleImage(pref.width, pref.height, Transparency.OPAQUE)
				);
		}

		public DisplayPanel() {
			setOpaque(false);
		}

		public void reset() {
			Graphics2D g2d = image.createGraphics();
			g2d.setBackground(Color.BLUE); //BLACK
			g2d.clearRect(0, 0, image.getWidth(), image.getHeight());
			g2d.dispose();
		}

		public void makePath(float[] samples, int svalid) {
			if(audioFormat == null) {
				return;
			}

			Path2D.Float current = paths[0];

			/* lots of ratios */            
			float avg = 0f;
			float hd2 = getHeight() / 2f;//determines hieght of sample wave            
			final int channels = audioFormat.getChannels();

			int i = 0;
			while(i < channels && i < svalid) {
				avg += samples[i++];
			}

			avg /= channels;            
			current.reset();
			current.moveTo(0, hd2 - avg * hd2);

			int fvalid = svalid / channels;
			for(int ch, frame = 0; i < svalid; frame++) {
				avg = 0f;

				/* average the channels for each frame. */                
				for(ch = 0; ch < channels; ch++) {
					avg += samples[i++];
				}

				avg /= channels;

				current.lineTo(
						(float)frame / fvalid * image.getWidth(), hd2 - avg * hd2
					      );
			}

			paths[0] = current;

			Graphics2D g2d = image.createGraphics();

			synchronized(pathLock) {
				g2d.setBackground(Color.BLACK);
				g2d.clearRect(0, 0, image.getWidth(), image.getHeight());

				g2d.setRenderingHint(
						RenderingHints.KEY_ANTIALIASING,
						RenderingHints.VALUE_ANTIALIAS_ON
						);
				g2d.setRenderingHint(
						RenderingHints.KEY_STROKE_CONTROL,
						RenderingHints.VALUE_STROKE_PURE
						);

				g2d.setPaint(Color.WHITE);
				g2d.draw(paths[0]);
			}

			g2d.dispose();
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
				return new Dimension(980, 540);// determines height of sample window
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

	/* Main Function is the entry point for application */
	public static void main(String[] args) 
	{
		EventQueue.invokeLater(new Runnable()
				{
				@Override
				public void run()
				{
				// Create class instance and invoke constructor
				new AudioProcessor();
				}
				});
	}

}
