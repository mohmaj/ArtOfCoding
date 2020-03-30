import java.awt.Dimension;

import javax.swing.BoxLayout;
import javax.swing.JComponent;
import javax.swing.JFrame;
import javax.swing.JLayeredPane;
import javax.swing.JPanel;
import javax.swing.JSlider;
import javax.swing.JToggleButton;
import javax.swing.Timer; 

class Canvas extends JPanel {
	private JLayeredPane layeredPane;
	private Timer timer;
	
	public Canvas() {
		setLayout(new BoxLayout(this, BoxLayout.PAGE_AXIS));
		layeredPane = new JLayeredPane();
        layeredPane.setPreferredSize(new Dimension(600, 600));
        
        Tree tree = new Tree();
        Rain rain = new Rain(600);
		
		OpenWeather weather = new OpenWeather();
		Timer weatherRefresh = new Timer(600000, a -> { //every 10 minutes
			weather.requestWeather();
			tree.calculateSkyColor(weather.getTemperature());
			tree.calculateSwayBias(weather.getWindDirection());
			rain.setWind(weather.getWindDirection());
			rain.setVisible(weather.isRaining());
		});
		
		tree.calculateSkyColor(weather.getTemperature());
		tree.calculateSwayBias(weather.getWindDirection());
		rain.setWind(weather.getWindDirection());
		rain.setVisible(weather.isRaining());
		
		weatherRefresh.start();
		
		tree.setBounds(0, 0, 600, 600);
		rain.setOpaque(false);
		rain.setBounds(0, 0, 600, 600);
		layeredPane.add(rain);
		layeredPane.add(tree);
		add(layeredPane);
		
		timer = new Timer(100, a -> layeredPane.repaint());
		timer.start();
		
		//Control Frame for override controls
		ControlFrame controlFrame= new ControlFrame();
		initControlComponents(controlFrame, tree, weather, rain);
		controlFrame.setBounds(1250, 50, 300, 600);
		controlFrame.setVisible(true);
	}
	
	public static void createAndShowGUI() {
		JFrame frame= new JFrame();
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setLocation(600, 50);
		frame.setResizable(false);
		
		JComponent newContentPane = new Canvas();
        newContentPane.setOpaque(true);
        frame.setContentPane(newContentPane);
		
		frame.pack();
		frame.setVisible(true);
	}
	
	public static void main(String[] args) {
		javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                createAndShowGUI();
            }
        });
	}

	
	public static void initControlComponents(ControlFrame controlFrame, Tree tree, OpenWeather weather, Rain rain){
		controlFrame.addHeading("City Search");
		controlFrame.addSubmissionBox("Set City", weather, tree, rain);
		controlFrame.addButtonControl("Print Weather To Console", a -> System.out.println(weather));
		
		controlFrame.addSeperator();
		
		controlFrame.addHeading("Weather Controls");
		controlFrame.addSlideControl("Wind Direction", 0, 360, (int)weather.getWindDirection(), 45, a -> {
			rain.setWind(((JSlider)a.getSource()).getValue());
			tree.calculateSwayBias(((JSlider)a.getSource()).getValue());
			tree.repaint();
		});
		controlFrame.addCheckBoxControl("Rain Toggle", weather.isRaining(), a -> {
			rain.setVisible(((JToggleButton)a.getSource()).isSelected());
			tree.repaint();
		});
		
		controlFrame.addSlideControl("Rain Amount", 0, 1000, 600, 200, a -> {
			rain.setDrops(((JSlider)a.getSource()).getValue());
			tree.repaint();
		});		
		
		controlFrame.addSlideControl("Temperature (C)", 0, 40, (int)weather.getTemperature(), 20, a -> {
			tree.calculateSkyColor(((JSlider)a.getSource()).getValue());
		});
		
		controlFrame.addSeperator();
		
		controlFrame.addHeading("Tree Controls");
		controlFrame.addSlideControl("Width", 0, 100, tree.width,  a -> {
			tree.width = ((JSlider)a.getSource()).getValue();
			tree.repaint();
		});
		
		controlFrame.addSlideControl("Length", 0, 200, tree.length, a -> {
			tree.length = ((JSlider)a.getSource()).getValue();
			tree.repaint();
		});
		controlFrame.addSlideControl("X", 0, 600, tree.x, a -> {
			tree.x = ((JSlider)a.getSource()).getValue();
			tree.repaint();
		});
		controlFrame.addSlideControl("Y", 0, 600, tree.y, a -> {
			tree.y = ((JSlider)a.getSource()).getValue();
			tree.repaint();
		});
		controlFrame.addSlideControl("Length Reduction", 0, 10, tree.lReduction, 1, a -> {
			tree.lReduction = ((JSlider)a.getSource()).getValue();
			tree.repaint();
		});
		controlFrame.addSlideControl("Width Reduction", 0, 10, tree.wReduction, 1, a -> {
			tree.wReduction = ((JSlider)a.getSource()).getValue();
			tree.repaint();
		});
		controlFrame.addSlideControl("Branching Number", 0, 10, tree.branchingNum, 1, a -> {
			tree.branchingNum = ((JSlider)a.getSource()).getValue();
			tree.repaint();
		});
		controlFrame.addSlideControl("Angle", 0, 180, tree.angle, 45, a -> {
			tree.angle = ((JSlider)a.getSource()).getValue();
			tree.repaint();
		});
		
		controlFrame.addButtonControl("Default Values", a -> tree.resetTreeValues());
		
		
		
	}
}