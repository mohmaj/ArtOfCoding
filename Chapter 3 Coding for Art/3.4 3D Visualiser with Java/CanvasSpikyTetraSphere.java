import java.awt.Dimension;
import javax.swing.BoxLayout;
import javax.swing.JComponent;
import javax.swing.JFrame;
import javax.swing.JLayeredPane;
import javax.swing.JPanel;
import javax.swing.JSlider;

/******************************************************************************************************
 * CLASS:<br />
 * BasicAudioPlayer<br />
 * <br />
 * DESCRIPTION:<br />
 * CanvasSpikyTetraSphere module implement interface for SpikyTetraSphereAudioDriven Class GUI creation
 *******************************************************************************************************/

public class CanvasSpikyTetraSphere extends JPanel 
{

	/* JPane window instance */
	private JLayeredPane layeredPane;

	/* SpikyTetraSphereAudioDriven window instance */
	public static SpikyTetraSphereAudioDriven tetraSphere;

	/* Class constructor */
	public CanvasSpikyTetraSphere()
	{
		setLayout(new BoxLayout(this, BoxLayout.PAGE_AXIS));
		layeredPane = new JLayeredPane();
		layeredPane.setPreferredSize(new Dimension(600, 600));

		tetraSphere = new SpikyTetraSphereAudioDriven();		
		tetraSphere.setBounds(0, 0, 600, 600);

		layeredPane.add(tetraSphere);
		add(layeredPane);
	}

	/* Create the 3D Object Window and Display it */
	public static void createAndShowGUI() 
	{
		JFrame frame= new JFrame();
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setLocation(600, 50);

		JComponent newContentPane = new CanvasSpikyTetraSphere();
		newContentPane.setOpaque(true);
		frame.setContentPane(newContentPane);

		frame.pack();
		frame.setVisible(true);
	}

}
