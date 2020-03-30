import java.awt.Color;
import java.awt.GradientPaint;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Rectangle;
import java.awt.geom.Ellipse2D;
import java.util.Random;

import javax.swing.JPanel;

class Tree extends JPanel{
	int x = 300;
	int y = 350;
	int branchingNum = 7;
	int length = 85;
	int width = 25;
	int angle = 30;
	double sway = 0;
	double swayBias = 10;
	float swayUpBound = 0.5f;
	float swayLoBound = -0.5f;
	boolean swayHeadingUp = false;
	int lReduction = 4;
	int wReduction = 1;
	int leafRandoms [];
	Color treeColor = new Color(142, 98, 89);
	Color leafColor = new Color(62, 142, 73);
	GradientPaint backgroundColor = new GradientPaint(0, 0, Color.BLACK, 0, 0, Color.WHITE);
	
	public Tree(){
		initLeafRandoms();
	}
	
	@Override
	public void paintComponent(Graphics g){
		super.paintComponent(g);
		paintBackground((Graphics2D)g);
		adjustSway();
		drawPot(g);
		drawTree((Graphics2D)g);
		g.setColor(Color.BLACK);
	}
	
	private void paintBackground(Graphics2D g) {
		g.setPaint(backgroundColor);
        g.fillRect(0, 0, getWidth(), getHeight());
	}

	public void setBackgroundColor(GradientPaint backgroundColor) {
		this.backgroundColor = backgroundColor;
	}

	private void drawPot(Graphics g) {
		g.setColor(Color.GRAY);
		int potX = x-width*2;
		int potY = y+(int)(length*1.9);
		int potW = width*5;
		int potH = (int)(width);
		g.fillOval(potX, potY, potW, potH);
		g.fillRect(potX, potY+(potH)/2, potW, potH);
		g.fillOval(potX, (potY+(potH)/2) + (potH/2), potW, potH);
		g.setColor(Color.DARK_GRAY);
		g.fillOval(potX+(int)(potW * 0.1), potY+(int)(potH * 0.1), (int)(potW * 0.8), (int)(potH * 0.8));
		g.setColor(Color.GRAY);
		g.fillRect(potX+(int)(potW * 0.1), (potY+(potH)/2) + (potH/2) + (potH/2), (int)(potW * 0.82), potH*2);
		g.fillOval(potX+(int)(potW * 0.1), (potY+(potH)/2) + (potH/2) + (potH/2) + ((potH*2)-(potH/2)), (int)(potW * 0.82), potH);
	}

	void drawTree(Graphics2D g2d){
		g2d.setColor(treeColor);
		Rectangle trunk = new Rectangle(x, y, width, length*2);
		Ellipse2D trunkBottom = new Ellipse2D.Double(x,y+(length*2)-((width/2)/2),width,width/2);
		g2d.rotate(Math.toRadians(sway + swayBias/1.2), x+width/2, y+length*2);
		g2d.fill(trunk);
		g2d.fill(trunkBottom);
		g2d.rotate(Math.toRadians(sway + swayBias), x+width/2, y);
		Rectangle branch = new Rectangle(x, y, width, length);
		double angle = this.angle - Math.abs(swayBias/2);
		g2d.rotate(Math.toRadians(angle/2), x, y);
		drawBranches((Graphics2D)g2d.create(), branch,branchingNum, angle);
		drawLeaves((Graphics2D)g2d.create(), branch,branchingNum, angle);
	}
	
	void drawBranches(Graphics2D g2d, Rectangle baseBranch, int numLeft, double angle){
		//draw branches
		if (numLeft > 0){
			numLeft--;
			Rectangle newBranch = new Rectangle(baseBranch);
			newBranch.grow(-wReduction, -lReduction);
			newBranch.setLocation(newBranch.x, newBranch.y-newBranch.height);
			g2d.rotate(Math.toRadians(-angle), baseBranch.getX(), baseBranch.getY());
			g2d.fill(newBranch);
			drawBranches(g2d, newBranch, numLeft, angle);
			g2d.rotate(Math.toRadians(angle), baseBranch.getX(), baseBranch.getY());
			g2d.fill(newBranch);
			drawBranches(g2d, newBranch, numLeft, -angle);
		}
	}
	
	void drawLeaves(Graphics2D g2d, Rectangle baseBranch, int numLeft, double angle){
		//draw leaves
		g2d.setColor(leafColor);
		if (numLeft > 0){
			numLeft--;
			Rectangle newBranch = new Rectangle(baseBranch);
			newBranch.grow(-wReduction, -lReduction);
			newBranch.setLocation(newBranch.x, newBranch.y-newBranch.height);
			g2d.rotate(Math.toRadians(-angle), baseBranch.getX(), baseBranch.getY());
			drawLeaves(g2d, newBranch, numLeft, angle);
			g2d.rotate(Math.toRadians(angle), baseBranch.getX(), baseBranch.getY());
			drawLeaves(g2d, newBranch, numLeft, -angle);
		}
		if((numLeft+0.0)/branchingNum < 0.7){
			Random random = new Random();
			for(int i = 0; i < 10; i++){
				g2d.fillOval((int)baseBranch.getX() - 40 + leafRandoms[i] + (random.nextInt(8)-4), (int)baseBranch.getY() - 40 + leafRandoms[i+5] + (random.nextInt(8)-4), 10, 20);		
			}
		}
	}
	
	void calculateSwayBias(double wind){
		if (wind >= 45 & wind < 135)
			wind = -45;
		else if (wind >= 135 & wind <= 225)
			wind = wind - 180;
		else if (wind > 225 & wind <= 315)
			wind = 45;
		else if (wind > 315 & wind <= 360)
			wind = 360 - wind;
		else wind = -wind;
		swayBias = wind/4;
	}
	
	void initLeafRandoms(){
		Random random = new Random();
		leafRandoms = new int [20];
		for (int i = 0; i < leafRandoms.length; i++){
			leafRandoms[i] = random.nextInt(80);
		}
	}

	private void adjustSway(){
		if(swayHeadingUp){
			sway+=0.1;
			if(sway >= swayUpBound){
				swayHeadingUp = false;
			}
		}else{
			sway-=0.1;
			if(sway <= swayLoBound){
				swayHeadingUp = true;
			}
		}
	}
	
	public void calculateSkyColor(double temperature) {
		int maxTemp = 40;
		int r = (int) (Math.sin(Math.toRadians(temperature * 9 + 90)) * 127.5 + 127.5);
		int b = 255 - (int)((temperature/maxTemp)*255);
		int g = 255 - (int)((temperature/maxTemp)*255);
		
		
		//Brighten Colour
		double brightness = (Math.sin(Math.toRadians(temperature * 5 - 90)) * 0.2 + 0.2);
		r = (int) Math.round(Math.min(255, r + 255 * brightness));
        g = (int) Math.round(Math.min(255, g + 255 * brightness));
        b = (int) Math.round(Math.min(255, b + 255 * brightness));
		
        Color c1 = new Color(r, g, b);
        Color c2 = new Color(r, 255, b);
		setBackgroundColor(new GradientPaint(300, 400, c1, 300, 420, c2));
	}
	
	void resetTreeValues(){
		x = 300;
		y = 350;
		branchingNum = 7;
		length = 85;
		width = 25;
		angle = 30;
		sway = 0;
		swayBias = 0;
		swayUpBound = 0.5f;
		swayLoBound = -0.5f;
		lReduction = 4;
		wReduction = 1;
	}
}
