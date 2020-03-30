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
import java.awt.image.BufferedImage;
import java.awt.Transparency;
import java.awt.geom.Path2D;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import javax.swing.*;

import java.io.File;
import java.io.IOException;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutionException;
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

public class BasicAudioAnimatedVisualiserPolar {

	/* Determines the width of the overall wave sampled and displayed ***2048*** */
	public static final int DEF_BUFFER_SAMPLE_SZ = 4096;//2048;

	/* JPanel Main Window */
	public static JPanel view;

	/* Buffer Image Instance to draw pixel */
	public static BufferedImage image;
	//a pixel data buffer - basically a method for storing a pixel array (image) in memory - can be static or changing

	/* Path2D instance to hold X,Y coordinate */
	public static Path2D path = new Path2D.Float();
	public static Path2D path2 = new Path2D.Float();

	/* Windows Width/Height parameter */
	public static Dimension pref ;

	/*  Java Synchronization Object*/
	public static final Object pathLock = new Object();

	/* Main JPanel to add other view components */
	public static JPanel contentPane = new JPanel();


	/* Hold the Audio file name */
	public static File audioFile;

	/* AudioFormat Class Instance to get Format info for Audio file */
	public static  AudioFormat audioFormat;

	public static  int mSIZE = 0;

	/* Empty Constructor */
	public BasicAudioAnimatedVisualiserPolar()
	{
	}
		
	public interface PlayerRef
	{
		public File getFile();
		public void playbackEnded();
		public void drawDisplay(float[] samples, int svalid);
	}


	/*
	 * PlayerRef Class Implementation 
	 */ 	 		
	public static PlayerRef thisPlayer = new PlayerRef() 
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
				BasicAudioAnimatedVisualiserPolar.reset();
				view.repaint();
			}

		@Override
			public void drawDisplay(float[] samples, int svalid)
			{
				/* Call the makePath method to draw on waveform on the screen */
				BasicAudioAnimatedVisualiserPolar.makePath(samples, svalid);

				view.repaint();
			}

	};

	public static void LoadAudio() 
	{
		try {
			/* Find pop.wav in the current directory */
			audioFile = new File("pop.wav");

			/* Open the Audio file */
			AudioFileFormat fmt = AudioSystem.getAudioFileFormat(audioFile);

			/* Find the Audio Format for the given Audio File */
			audioFormat = fmt.getFormat();

			/* Call the Playbackloop thread to start the File playback and generate the waveform */
			new PlaybackLoop(thisPlayer).execute();

		} catch(IOException ioe) {
			System.out.println(ioe.toString());
		} catch(UnsupportedAudioFileException uafe) {
			System.out.println(uafe.toString());
		}
	}


	public static class PlaybackLoop extends SwingWorker<Void, Void> {

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

	public static float[] unpack(byte[] bytes, long[] transfer, float[] samples, int bvalid, AudioFormat fmt) 
	{

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

		if(fmt.getEncoding() == AudioFormat.Encoding.PCM_SIGNED) 
		{
			long signShift = 64L - bitsPerSample;

			for(int i = 0; i < transfer.length; i++)
			{
				transfer[i] = ((transfer[i] << signShift) >> signShift );
			}
		}

		/* finally normalize to range of -1.0f to 1.0f */
		for(int i = 0; i < transfer.length; i++)
		{
			samples[i] = (float)transfer[i] / (float)fullScale;
		}

		return samples;
	}

	public static int normalBytesFromBits(int bitsPerSample)
	{
		return bitsPerSample + 7 >> 3;
	}

	public static void reset()
	{
		Graphics2D g2d = image.createGraphics();
		g2d.clearRect(0, 0, image.getWidth(), image.getHeight());
		g2d.dispose();
	}
static int count = 0;
	public static void makePath(float[] samples, int svalid)
	{


		if(audioFormat == null) {
			return;
		}

		mSIZE = svalid ;

		/* lots of ratios */            
		float avg = 0f;
		float hd2 = view.getHeight() / 2f;//determines hieght of sample wave            
		final int channels = audioFormat.getChannels();

		int i = 0;
		while(i < channels && i < svalid)
		{
			avg += samples[i++];
		}

		avg /= channels;  

		//path.reset();
		//path.moveTo(0, hd2 - avg * hd2);

		int fvalid = svalid / channels;
		
		ArrayList<Float> arrayAVG = new ArrayList<Float>();
		
		for(int ch, frame = 0; i < svalid; frame++)
		{
			avg = 0f;

			/* average the channels for each frame. */                
			for(ch = 0; ch < channels; ch++)
			{
				avg += samples[i++];
			}

			avg /= channels;

			//path.lineTo((float)frame / fvalid * image.getWidth(), hd2 - avg * hd2);
			
			arrayAVG.add(avg);

		}

		Graphics2D g2d = image.createGraphics();

		int a = 250; 
		int b = a;
		// offset pixels so circle is not in top left corner

		int n =  (mSIZE/2)-1;
		// n must be (mSIZE/2)-1 as this fits within the buffer sample size
		// it is divided by 2 because there are 2 channels

		ArrayList<Integer> arrayX = new ArrayList<Integer>();
		ArrayList<Integer> arrayY = new ArrayList<Integer>();


		int k = 0;
		for (int j = 0; j < n; j++) {
			double t = 36 * Math.PI * j / n; // normally just 2 for circle

			float AVG = arrayAVG.get(k);
			k++;	
			float r = AVG*200;

			int x = (int) Math.round(a + (r+150) * Math.cos(t));
			int y = (int) Math.round(b + (r+150) * Math.sin(t));

			arrayX.add(x);
			arrayY.add(y);
		}

		path2.reset(); // without reset just keeps drawing


		for (int j = 0; j < n - 1; j++)
		{
			int x1 = arrayX.get(j);
			int y1 = arrayY.get(j);
			int x2 = arrayX.get(j + 1);
			int y2 = arrayY.get(j + 1);
			
			path2.moveTo(x1, y1);		
			path2.lineTo(x2, y2);			
		}

		synchronized(pathLock) 
		{
			g2d.setBackground(Color.WHITE);
			g2d.clearRect(0, 0, image.getWidth(), image.getHeight());
			g2d.setPaint(Color.BLUE);
			g2d.draw(path2);
		}
	}

	static void InitializeWindow()
	{
		EventQueue.invokeLater(new Runnable() 
				{
				@Override
				public void run() 
				{

				/* Creates a new, initially invisible Frame(External Window)  with the specified title */
				JFrame mainFrame = new JFrame("Basic Audio Animated Visualiser Polar");
	
				JPanel content = new JPanel(new BorderLayout());

				/* Attach the JPanel to JFrame */
				mainFrame.setContentPane(contentPane);

				/* Create a new custom JPanel from output Audio Data */
				view = new JPanel() 
				{
					/* This method override the default draw method and call custom drawLines to create Random Graph */

					@Override
						public void paintComponent(Graphics g) 
						{
							super.paintComponent(g);

							synchronized(pathLock) 
							{
								g.drawImage(image, 0, 0, null);
							}
						}

					/* This method override the default getPreferredSize and set the WidthXHeight of the ContentPane */
					@Override
						public Dimension getPreferredSize() 
						{
							return new Dimension(500, 500);//(DEF_BUFFER_SAMPLE_SZ / 2, 512);// determines height of sample window
						}

					/* This method override the default getMinimumSize and get the WidthXHeight Dimension of the ContentPane */
					@Override
						public Dimension getMinimumSize() 
						{
							return getPreferredSize();
						}

					/* This method override the default getMaximumSize and get the WidthXHeight Dimension of the ContentPane */
					@Override
						public Dimension getMaximumSize() {
							return getPreferredSize();
						}
				};

		/* Set the Window Background color to White */
		view.setBackground(Color.WHITE);

		/* Set the ConentPane Dimension */
		pref = new Dimension (512, 512); //(DEF_BUFFER_SAMPLE_SZ / 2, 512);

		/* Build the BufferImage to render audio data pixel*/
		image = GraphicsEnvironment
			.getLocalGraphicsEnvironment()
			.getDefaultScreenDevice()
			.getDefaultConfiguration()
			.createCompatibleImage(pref.width, pref.height, Transparency.OPAQUE);

		/* Add the Custom Panel to Root Panel */
		contentPane.add(view, BorderLayout.CENTER);

		/* The pack method sizes the frame so that all its contents are at or above their preferred sizes */
		mainFrame.pack();

		/* Set the mainFrame to not Resizable */
		mainFrame.setResizable(true);

		/* Set the frame Size */
		//mainFrame.setSize(500, 200);

		/* Set the action for Close Button*/
		mainFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		/* Set position of the window in the Desktop relative to */
		mainFrame.setLocationRelativeTo(null);

		/* Once Frame is created we need set its visibility to true, because by default it is set to False on Creation */
		mainFrame.setVisible(true);

		/* Call the LoadAudio() method to start the audio playback and generate the graph */
		LoadAudio();
				}
				});
	}

	/* Main Function is the entry point for application */
	public static void main(String[] args) 
	{
		// Calling InitializeWindow() Method to Create Window and Populate Data
		InitializeWindow();
	}
}
