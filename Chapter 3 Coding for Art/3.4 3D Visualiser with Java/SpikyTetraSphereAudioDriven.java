import javax.swing.SwingWorker;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JLabel;
import javax.swing.JSlider;
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
import java.awt.*;

import java.util.List;
import java.util.ArrayList;
import java.awt.image.BufferedImage;

/******************************************************************************************************
 * CLASS:<br />
 * BasicAudioPlayer<br />
 * <br />
 * DESCRIPTION:<br />
 * SpikyTetraSphereAudioDriven Class os responisble for 3D object motion contol 
 *******************************************************************************************************/

public class SpikyTetraSphereAudioDriven extends JPanel{

	/* Slider Instance */
	JSlider spikeSlider;

	/* Slider default values */
	public int Spherise = 0; // range of 0~2: 0-circle, 1-tetrahedron, 2-Spiky tetrahedron
	public int Scale = 250;
	public int Heading = 0;
	public int Pitch = 0;

	// Synchronization object
	public static final Object redrawLock = new Object();

	// Run the loop
	private volatile boolean keepGoing = true;

	// local variables for averaging
	static int Count = 0;
	static double sum = 0.0;
	public static double bucketAve = 0.0;
	
	/* Average sample */
	public static final int BUCKET_VALUE = 3;
	
	//fps counter variables
	public static long nextSecond = System.currentTimeMillis() + 1000;
	public static int framesInLastSecond = 0;
	public static int framesinCurrentSecond = 0;

	/**
	 * Enqueue then sample to the the given arraylist
	 *
	 *
	 * @param value 
	 * 		Sample data 
	 * @return @none
	 */
	public static void Enqueue(float value)
	{

		// add the value to ArrayList
		//arrayAVGF.add(value);

		// sum = sum + value;

		// Count++;
		// if( Count == BUCKET_VALUE)
		// {
			synchronized (redrawLock)
			{
				//bucketAve = sum/BUCKET_VALUE;
				bucketAve = value;
				redrawLock.notify();
			}
			
				// // Reset the value
				// sum = 0.0;
				// Count = 0;
		// }		
	}

	// Class Constuctor to start Rendering thread
	SpikyTetraSphereAudioDriven()
	{

		Thread thread = new Thread(new Runnable() {
				@Override
				public void run() {
				runLoop();
				}
				});
		thread.start();
	}

	// Method that controls the 3D object Rendering 
	private void runLoop()
	{
		//System.out.println("runLoop ");
		// update repeatedly
		while (keepGoing) 
		{
			synchronized (redrawLock) {
				try {
					redrawLock.wait();
					repaint();
				} catch (InterruptedException e) {
				}
				
				//fps counter calc
				long currentTime = System.currentTimeMillis();

				if (currentTime > nextSecond) {
					nextSecond +=1000;
					framesInLastSecond = framesinCurrentSecond;
					framesinCurrentSecond = 0;
					System.out.println(framesInLastSecond + " fps");
				}

				framesinCurrentSecond++;
			}

		}
	}

	public void paintComponent(Graphics g) 
	{
		Graphics2D g2 = (Graphics2D) g;
		g2.setColor(Color.BLACK);
		g2.fillRect(0, 0, getWidth(), getHeight());

		List<Triangle> tris = new ArrayList<>();
		tris.add(new Triangle(new Vertex(1, 1, 1, 0).normalize(),
					new Vertex(-1, -1, 1, 0).normalize(),
					new Vertex(-1, 1, -1, 0).normalize(),
					null,
					Color.WHITE, 
					-1));
		tris.add(new Triangle(new Vertex(1, 1, 1, 0).normalize(),
					new Vertex(-1, -1, 1, 0).normalize(),
					new Vertex(1, -1, -1, 0).normalize(),
					null,
					Color.RED, 
					1));
		tris.add(new Triangle(new Vertex(-1, 1, -1, 0).normalize(),
					new Vertex(1, -1, -1, 0).normalize(),
					new Vertex(1, 1, 1, 0).normalize(),
					null,
					Color.GREEN, 
					-1));
		tris.add(new Triangle(new Vertex(-1, 1, -1, 0).normalize(),
					new Vertex(1, -1, -1, 0).normalize(),
					new Vertex(-1, -1, 1, 0).normalize(),
					null,
					Color.BLUE, 
					1));

		// get normal vector of each plane
		for (Triangle t : tris) {
			Vertex normalVector = t.v1.normalVector(t.v2, t.v3);
			t.normalVector = normalVector;						
		}

		////////////////////////// inflate/deflate method calls for Spiky or full sphere //////////////////////

		//double rate = Spherise/200.00f;
		double rate = (bucketAve-0.98)*50;

		for (int i = 0; i < 4; i++) { 

			if (rate >= 1.0f) {
				double rate_sub = rate;
				tris = deflate(tris, rate_sub, i);
			} else if (rate < 1.0f) {
				double rate_sub = rate;
				tris = inflate(tris, rate_sub, i);
			}
		}	

		////////////////////////////////////////////////////////////////////////////////////////
		double heading = Math.toRadians(Heading); // rotates object tumbling
		Matrix3 headingTransform = new Matrix3(new double[] {
				Math.cos(heading), 0, -Math.sin(heading),
				0, 1, 0,
				Math.sin(heading), 0, Math.cos(heading)
				});
		double pitch = Math.toRadians(Pitch); // rotates object clockwise
		Matrix3 pitchTransform = new Matrix3(new double[] {
				1, 0, 0,
				0, Math.cos(pitch), Math.sin(pitch),
				0, -Math.sin(pitch), Math.cos(pitch)
				});
		Matrix3 scaleTransform = new Matrix3(new double[] {
				(Scale), 0, 0,
				0, (Scale), 0,
				0, 0, (Scale)
				});
		Matrix3 transform = headingTransform.multiply(pitchTransform).multiply(scaleTransform);

		BufferedImage img = new BufferedImage(getWidth(), getHeight(), BufferedImage.TYPE_INT_ARGB);

		double[] zBuffer = new double[img.getWidth() * img.getHeight()];
		// initialize array with extremely far away depths
		for (int q = 0; q < zBuffer.length; q++) {
			zBuffer[q] = Double.NEGATIVE_INFINITY;
		}

		for (Triangle t : tris) {
			Vertex v1 = transform.transform(t.v1);
			v1.x += getWidth() / 2;
			v1.y += getHeight() / 2;

			Vertex v2 = transform.transform(t.v2);
			v2.x += getWidth() / 2;
			v2.y += getHeight() / 2;

			Vertex v3 = transform.transform(t.v3);
			v3.x += getWidth() / 2;
			v3.y += getHeight() / 2;

			int minX = (int) Math.max(0, Math.ceil(Math.min(v1.x, Math.min(v2.x, v3.x))));
			int maxX = (int) Math.min(img.getWidth() - 1, Math.floor(Math.max(v1.x, Math.max(v2.x, v3.x))));
			int minY = (int) Math.max(0, Math.ceil(Math.min(v1.y, Math.min(v2.y, v3.y))));
			int maxY = (int) Math.min(img.getHeight() - 1, Math.floor(Math.max(v1.y, Math.max(v2.y, v3.y))));

			double triangleArea = (v1.y - v3.y) * (v2.x - v3.x) + (v2.y - v3.y) * (v3.x - v1.x);

			for (int y = minY; y <= maxY; y++) {
				for (int x = minX; x <= maxX; x++) {
					double b1 = ((y - v3.y) * (v2.x - v3.x) + (v2.y - v3.y) * (v3.x - x)) / triangleArea;
					double b2 = ((y - v1.y) * (v3.x - v1.x) + (v3.y - v1.y) * (v1.x - x)) / triangleArea;
					double b3 = ((y - v2.y) * (v1.x - v2.x) + (v1.y - v2.y) * (v2.x - x)) / triangleArea;
					if (b1 >= 0 && b1 <= 1 && b2 >= 0 && b2 <= 1 && b3 >= 0 && b3 <= 1) {
						double depth = b1 * v1.z + b2 * v2.z + b3 * v3.z;
						int zIndex = y * img.getWidth() + x;
						if (zBuffer[zIndex] < depth) {
							img.setRGB(x, y, t.color.getRGB());
							zBuffer[zIndex] = depth;
						}
					}
				}
			}

		}

		// fps draw to display
		g2.setColor(Color.RED);					
		g2.setFont(new Font("Dialog", Font.BOLD, 18));
		g2.drawString("" + framesInLastSecond, 10, 20);
		g2.drawImage(img, 0, 0, null);

}

////////////////////////// inflate method for spiky or full sphere //////////////////////

/**
 * Function:
 * inflate plane from tetrahedron to sphere by value of rate.
 * range of rate is 0 to 1, 0 means sphere and 1 means tetrahedron.
 * Each curved surface from tetrahedron to sphere is generated, according to value of rate
 * Each surface is drawn the way you get the circle's center to be distance 
 * from origin as value of rate while circle's radius is increased as length 
 * of that distance.
 * 
 * @param triangles - triangle
 * @param rate - value that represent inflation
 * @param i - value that represents depth/deep, but it's not necessary for this method, outside morphing.
 * @return
 */
public List<Triangle> inflate(List<Triangle> triangles, double rate, int i) 
{
	ArrayList<Triangle> result = new ArrayList<Triangle>();
	ArrayList<Triangle> dest = new ArrayList<Triangle>();
	for (Triangle t : triangles) {
		Vertex m1, m2, m3;			
		m1 = new Vertex((t.v1.x + t.v2.x)/2, (t.v1.y + t.v2.y)/2, (t.v1.z + t.v2.z)/2, 0);
		m2 = new Vertex((t.v2.x + t.v3.x)/2, (t.v2.y + t.v3.y)/2, (t.v2.z + t.v3.z)/2, 0);
		m3 = new Vertex((t.v1.x + t.v3.x)/2, (t.v1.y + t.v3.y)/2, (t.v1.z + t.v3.z)/2, 0);

		result.add(new Triangle(t.v1, m1, m3, t.normalVector, t.color, t.sign));
		result.add(new Triangle(t.v2, m1, m2, t.normalVector, t.color, t.sign));
		result.add(new Triangle(t.v3, m2, m3, t.normalVector, t.color, t.sign));
		result.add(new Triangle(m1,   m2, m3, t.normalVector, t.color, t.sign));
	}

	/*
	 * Each surface will be drawn the way you get the circle's center to be far 
	 * from origin as value of rate while circle's radius is increased as length of that distance.
	 */
	double old = 0;
	for (Triangle t : result) {
		double l1 = Math.sqrt((t.v1.x + t.normalVector.x * rate * t.sign) * (t.v1.x + t.normalVector.x * rate * t.sign) + 
				(t.v1.y + t.normalVector.y * rate * t.sign) * (t.v1.y + t.normalVector.y * rate * t.sign) + 
				(t.v1.z + t.normalVector.z * rate * t.sign) * (t.v1.z + t.normalVector.z * rate * t.sign));
		double l2 = Math.sqrt((t.v2.x + t.normalVector.x * rate * t.sign) * (t.v2.x + t.normalVector.x * rate * t.sign) + 
				(t.v2.y + t.normalVector.y * rate * t.sign) * (t.v2.y + t.normalVector.y * rate * t.sign) + 
				(t.v2.z + t.normalVector.z * rate * t.sign) * (t.v2.z + t.normalVector.z * rate * t.sign));
		double l3 = Math.sqrt((t.v3.x + t.normalVector.x * rate * t.sign) * (t.v3.x + t.normalVector.x * rate * t.sign) + 
				(t.v3.y + t.normalVector.y * rate * t.sign) * (t.v3.y + t.normalVector.y * rate * t.sign) + 
				(t.v3.z + t.normalVector.z * rate * t.sign) * (t.v3.z + t.normalVector.z * rate * t.sign));
		double bi = (t.normalVector.x * rate * t.sign) * (t.normalVector.x * rate * t.sign) +
			(t.normalVector.y * rate * t.sign) * (t.normalVector.y * rate * t.sign) +
			(1+t.normalVector.z * rate * t.sign) * (1+t.normalVector.z * rate * t.sign);
		bi = Math.max(old, Math.sqrt(bi));
		old = bi;
		Vertex v1 = new Vertex((t.v1.x)/l1*bi, (t.v1.y)/l1*bi, (t.v1.z)/l1*bi, 0);
		Vertex v2 = new Vertex((t.v2.x)/l2*bi, (t.v2.y)/l2*bi, (t.v2.z)/l2*bi, 0);
		Vertex v3 = new Vertex((t.v3.x)/l3*bi, (t.v3.y)/l3*bi, (t.v3.z)/l3*bi, 0);
		dest.add(new Triangle(v1, v2, v3, t.normalVector, t.color, t.sign));
	}
	return dest;
}

/**
 * Function:
 * inflate plane from spiky tetrahedron to tetrahedron by value of rate.
 * range of rate is 1 to 2, 1 means tetrahedron and 2 means spiky tetrahedron.
 * 
 * @param triangles - triangle
 * @param rate - value that represent inflation
 * @param cnt  - value that represents depth, but it's not necessary for this method for outside morphing.
 * @return
 */
public List<Triangle> deflate(List<Triangle> triangles, double rate, int cnt)
{
	List<Triangle> result = new ArrayList<>();
	for (Triangle t : triangles) {
		Vertex m1 = new Vertex((t.v1.x + t.v2.x)/2.0f/rate, (t.v1.y + t.v2.y)/2.0f/rate, (t.v1.z + t.v2.z)/2.0f/rate, cnt + 1);
		Vertex m2 = new Vertex((t.v2.x + t.v3.x)/2.0f/rate, (t.v2.y + t.v3.y)/2.0f/rate, (t.v2.z + t.v3.z)/2.0f/rate, cnt + 1);
		Vertex m3 = new Vertex((t.v1.x + t.v3.x)/2.0f/rate, (t.v1.y + t.v3.y)/2.0f/rate, (t.v1.z + t.v3.z)/2.0f/rate, cnt + 1);

		Color color = t.color;
		int sign = t.sign;
		result.add(new Triangle(t.v1, m1, m3, null, color, sign));
		result.add(new Triangle(t.v2, m1, m2, null, color, sign));
		result.add(new Triangle(t.v3, m2, m3, null, color, sign));
		result.add(new Triangle(m1, m2, m3, null, color, sign));
	}

	ArrayList<Triangle> dest = new ArrayList<Triangle>();
	Vertex v1, v2, v3;

	/* 
	 * divide coordinate value of all vertices by rate, except origin vertex
	 * (4 vertices of starting tetrahedron) and new-generated vertices.
	 */
	for (Triangle t : result) {
		if (t.v1.deep !=0 && t.v1.deep != cnt+1) {
			v1 = new Vertex((t.v1.x)/rate, (t.v1.y)/rate, (t.v1.z)/rate, t.v1.deep);
		} else {
			v1 = new Vertex((t.v1.x), (t.v1.y), (t.v1.z), t.v1.deep);
		}
		if (t.v2.deep !=0 && t.v2.deep != cnt+1) {
			v2 = new Vertex((t.v2.x)/rate, (t.v2.y)/rate, (t.v2.z)/rate, t.v2.deep);
		} else {
			v2 = new Vertex((t.v2.x), (t.v2.y), (t.v2.z), t.v2.deep);
		}
		if (t.v3.deep !=0 && t.v3.deep != cnt+1) {
			v3 = new Vertex((t.v3.x)/rate, (t.v3.y)/rate, (t.v3.z)/rate, t.v3.deep);
		} else {
			v3 = new Vertex((t.v3.x), (t.v3.y), (t.v3.z), t.v3.deep);
		}
		dest.add(new Triangle(v1, v2, v3, t.normalVector, t.color, t.sign));

	}

	return dest;		
}

/////////////////////////////////////////////////////////////
}

class Vertex {
	double x; // x-coordinate 
	double y; // y-coordinate 
	double z; // z-coordinate 
	int deep = 0; // represent the number of inflate and used only for inside morphing.

	Vertex(double x, double y, double z, int deep) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.deep = deep;
	}

	Vertex vector(Vertex v) {
		double x = v.x - this.x;
		double y = v.y - this.y;
		double z = v.z - this.z;

		return new Vertex(x, y, z, this.deep);
	}

	// length from origin to vertex
	double length() {
		double len = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

		return len;
	}

	// outer product (cross product) between 2 vectors
	Vertex outer(Vertex other) {
		double x = this.y * other.z - this.z * other.y;
		double y = this.z * other.x - this.x * other.z;
		double z = this.x * other.y - this.y * other.x;

		return new Vertex(x, y, z, this.deep);
	}

	// normalize vector
	Vertex normalize() {
		double len = this.length();
		Vertex result = new Vertex(this.x / len, this.y / len, this.z / len, this.deep);

		return result;
	}

	// get normal vector of plane
	Vertex normalVector(Vertex v2, Vertex v3) {
		Vertex v12 = this.vector(v2);
		Vertex v13 = this.vector(v3);
		Vertex result = v12.outer(v13).normalize();

		return result;
	}
}

class Triangle {
	Vertex v1;
	Vertex v2;
	Vertex v3;
	Vertex normalVector; // normal vector of plane
	int sign = 1;		 // direction of normal vector, -1 means opposite direction of plane with normal vector 1.
	// sign indicates the direction of each plane's inflation.
	Color color;

	Triangle(Vertex v1, Vertex v2, Vertex v3, Vertex normal, Color color, int sign) {
		this.v1 = v1;
		this.v2 = v2;
		this.v3 = v3;
		this.normalVector = normal;
		this.color = color;
		this.sign = sign;
	}
}

class Matrix3 
{
	double[] values;
	Matrix3(double[] values) {
		this.values = values;
	}
	Matrix3 multiply(Matrix3 other) {
		double[] result = new double[9];
		for (int row = 0; row < 3; row++) {
			for (int col = 0; col < 3; col++) {
				for (int i = 0; i < 3; i++) {
					result[row * 3 + col] +=
						this.values[row * 3 + i] * other.values[i * 3 + col];
				}
			}
		}
		return new Matrix3(result);
	}
	Vertex transform(Vertex in) {
		return new Vertex(
				in.x * values[0] + in.y * values[3] + in.z * values[6],
				in.x * values[1] + in.y * values[4] + in.z * values[7],
				in.x * values[2] + in.y * values[5] + in.z * values[8],
				in.deep
				);
	}
}
