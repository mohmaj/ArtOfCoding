import javax.imageio.ImageIO;
import javax.swing.JFrame;
import javax.swing.JPanel;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

public class ImageProcessing extends JPanel {

	BufferedImage img;
	int height;
	int width;
	int image[][];
	int imgGrayScale[][];

	ImageProcessing() {
		try {
			img = ImageIO.read(new File("input.jpg"));
			height = img.getHeight();
			width = img.getWidth();
			image = new int[width][height];
			imgGrayScale = new int[width][height];

			for (int y = 0; y < height; y++)
				for (int x = 0; x < width; x++)
					image[x][y] = img.getRGB(x, y);

		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
	}

	public void GrayScaleConvert() // method for gray scale conversion
	{
		int rd, gr, bl, grayLevel, grayPix;

		for (int y = 0; y < height; y++)
			for (int x = 0; x < width; x++) {
				rd = (image[x][y] >> 16) & 0xFF;
				gr = (image[x][y] >> 8) & 0xFF;
				bl = (image[x][y] & 0xFF);

				grayLevel = (rd + gr + bl) / 3;
				grayPix = (grayLevel << 16) + (grayLevel << 8) + grayLevel;
				imgGrayScale[x][y] = grayPix;

			}
	}

	public void paintComponent(Graphics g) {
		super.paintComponent(g);
		this.setSize(400, 400);
		this.setBackground(Color.WHITE);
		for (int y = 0; y < height; y++)
			for (int x = 0; x < width; x++) {
				g.setColor(new Color(image[x][y]));
				g.drawLine(x + 10, y + 10, x + 10, y + 10);

			}
		for (int y = 0; y < height; y++)
			for (int x = 0; x < width; x++) {
				g.setColor(new Color(imgGrayScale[x][y]));
				g.drawLine(x + width + 20, y + 10, x + width + 20, y + 10);

			}
	}

	public void OutputImage() // Output gray scale data to an image file
	{
		for (int y = 0; y < height; y++)
			for (int x = 0; x < width; x++) {
				img.setRGB(x, y, imgGrayScale[x][y]);
			}
		try {
			File o = new File("d:\\output.jpg");
			ImageIO.write(img, "jpg", o);
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}

	}

	public static void main(String[] args) {

		ImageProcessing IP = new ImageProcessing();

		IP.GrayScaleConvert();
		IP.OutputImage();

		JFrame f = new JFrame("Image Processing");
		f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		f.add(IP);

		f.setSize(700, 700);
		f.setVisible(true);
	}
}

