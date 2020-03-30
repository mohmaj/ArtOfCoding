import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.util.Random;

import javax.swing.JPanel;

public class Rain extends JPanel {

	private int [] dropsXY;
	private int [] dropSpeeds;
	private Random random = new Random();
	private final int MIN_SPEED = 20;
	private double wind;
	
	public Rain(int amount){
		setDrops(amount);
		setPreferredSize(new Dimension(600, 600));
	}
	
	public void setDrops(int amount) {
		dropsXY = new int [amount*2];
		dropSpeeds = new int [amount];
		for (int i = 0; i < dropsXY.length; i++){
			dropsXY[i] = random.nextInt(600);
		}
		for (int i = 0; i < amount; i++) {
			dropSpeeds[i] = random.nextInt(20) + MIN_SPEED;
		}
	}
	
	public void setWind(double wind){
		if (wind > 225 & wind < 315)
			this.wind = 315;
		else if (wind > 45 & wind < 135)
			this.wind = 45;
		else if (wind >= 135 & wind <= 180)
			this.wind = 180 - wind;
		else if (wind > 180 & wind < 315)
			this.wind = 540 - wind;
		else
			this.wind = wind;
	}

	@Override
	protected void paintComponent(Graphics g) {
		super.paintComponent(g);
		((Graphics2D)g).rotate(Math.toRadians(wind),300,300);
		g.setColor(Color.BLUE);
		for(int i = 0; i < dropsXY.length; i+=2){
			if ((dropsXY[i+1] += dropSpeeds[i/2]) > 700){
				dropsXY[i+1] = -100;
				dropsXY[i] = random.nextInt(800) - 100;
			}
			
			g.drawLine(dropsXY[i], dropsXY[i+1], dropsXY[i], dropsXY[i+1] - (dropSpeeds[i/2])/2);
		}
	}
	
}
