import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionListener;

import javax.swing.Box;
import javax.swing.BoxLayout;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JSeparator;
import javax.swing.JSlider;
import javax.swing.JTextField;
import javax.swing.event.ChangeListener;

class ControlFrame extends JFrame{
	private JPanel container;
	private Font headingFont = new Font("Sans-Serif", Font.BOLD, 16);
	
	public ControlFrame(){
		setTitle("Controls");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		container = new JPanel();
		container.setLayout(new BoxLayout(container, BoxLayout.Y_AXIS));
		this.add(new JScrollPane(container));
	}
	
	public void addSeperator(){
		container.add(new JSeparator());
	}
	
	public void addHeading(String text){
		JLabel heading = new JLabel(text);
		heading.setFont(headingFont);
		heading.setAlignmentX(LEFT_ALIGNMENT);
		container.add(heading);
		container.add(Box.createVerticalStrut(15));
		pack();
	}
	
	public void addSlideControl(String label, int min, int max, int value, ChangeListener cl){
		addSlideControl(label, min, max, value, 100, cl);
	}
	
	public void addSlideControl(String text, int min, int max, int value, int tickSpacing,ChangeListener a){
		JSlider slider = new JSlider(min, max, value);
		slider.setMajorTickSpacing(tickSpacing);
		slider.setPaintTicks(true);
		slider.setPaintLabels(true);
		slider.addChangeListener(a);
		slider.setBackground(new Color(225, 225, 250));
		slider.setAlignmentX(LEFT_ALIGNMENT);
		JLabel label = new JLabel(text);
		label.setAlignmentX(LEFT_ALIGNMENT);
		container.add(label);
		container.add(slider);
		container.add(Box.createVerticalStrut(15));
		pack();
	}
	
	public void addButtonControl(String label, ActionListener al){
		JButton button = new JButton(label);
		button.addActionListener(al);
		button.setAlignmentX(LEFT_ALIGNMENT);
		container.add(button);
		container.add(Box.createVerticalStrut(15));
		pack();
	}
	
	public void addCheckBoxControl(String label, boolean value,ActionListener al){
		JCheckBox checkbox = new JCheckBox(label, value);
		checkbox.addActionListener(al);
		checkbox.setBackground(new Color(225, 225, 250));
		checkbox.setAlignmentX(LEFT_ALIGNMENT);
		container.add(checkbox);
		container.add(Box.createVerticalStrut(15));
		pack();
	}
	
	public void addSubmissionBox(String label, OpenWeather weather, Tree tree, Rain rain){
		JTextField textField = new JTextField();
		JButton button = new JButton(label);
		button.addActionListener(a -> {
			weather.requestWeather(textField.getText());
			tree.calculateSkyColor(weather.getTemperature());
			tree.calculateSwayBias(weather.getWindDirection());
			rain.setWind(weather.getWindDirection());
			rain.setVisible(weather.isRaining());
		});
		JPanel boxPanel = new JPanel();
		boxPanel.setLayout(new BoxLayout(boxPanel, BoxLayout.X_AXIS));
		boxPanel.add(textField);
		boxPanel.add(button);
		boxPanel.setAlignmentX(LEFT_ALIGNMENT);
		container.add(boxPanel);
		container.add(Box.createVerticalStrut(15));
		pack();
	}
	
}
