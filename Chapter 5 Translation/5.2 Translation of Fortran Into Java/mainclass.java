import java.awt.Graphics;
import java.awt.Graphics2D;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;

class Surface extends JPanel {

	private void doDrawing(Graphics g) {

		double[] XM = { 11.3, 12.1, 12.6, 14.5, 15.2, 16.0, 17.0, 19.0, 20.2,
				20.8, 21.4, 32.0, 21.4, 20.8, 21.5, 22.5, 23.8, 26.3, 28.5,
				28.5, 29.5, 29.5, 30.5, 30.5, 31.3, 31.0, 32.0, 32.5, 32.0,
				32.0, 34.6, 38.5, 37.0, 38.5, 37.5, 38.0, 37.5, 38.0, 37.0,
				37.7, 38.0, 40.5, 39.7, 40.5, 39.0, 34.5, 32.0, 29.0, 27.0,
				29.0, 32.0, 32.5, 31.3, 29.7, 29.0, 27.0, 23.5, 23.0, 22.5,
				20.0, 22.5, 22.9, 22.4, 20.0, 17.0, 15.0, 14.0, 13.0, 12.0,
				12.5, 11.5, 11.3 };

		double[] YM = { 22.1, 22.8, 22.9, 23.9, 24.0, 24.2, 24.1, 24.9, 25.1,
				25.7, 25.0, 25.0, 25.0, 25.7, 26.0, 28.0, 27.0, 26.4, 26.5,
				26.0, 26.5, 26.0, 26.5, 26.0, 26.1, 25.6, 26.0, 26.1, 25.3,
				25.0, 25.0, 28.0, 27.0, 27.0, 26.7, 26.8, 26.0, 25.5, 25.0,
				24.0, 23.5, 22.7, 22.0, 21.5, 21.7, 23.0, 21.7, 20.0, 20.0,
				20.0, 21.7, 21.1, 20.7, 19.5, 18.0, 20.0, 19.1, 19.0, 19.0,
				19.4, 19.0, 18.0, 18.0, 19.4, 19.2, 19.6, 20.0, 20.8, 21.4,
				21.8, 22.0, 22.1 };

		Graphics2D g2d = (Graphics2D) g;

		for (int i = 0; i < 71; i++) {

			g2d.drawLine((int) XM[i] * 10, (int) YM[i] * 10,
					(int) XM[i + 1] * 10, (int) YM[i + 1] * 10);

			// g2d.drawLine(30, 30+(int)XM[i]*10, 200, 30+i);
			// g2d.drawLine(30, 100, 300, 100);
			// g2d.drawLine(30, 200, 200, 200);
			// g2d.drawLine(200, 200, 30, 30);
		}
	}

	@Override
	public void paintComponent(Graphics g) {

		super.paintComponent(g);
		doDrawing(g);
	}
}

public class mainclass extends JFrame {

	public mainclass() {

		initUI();
	}

	private void initUI() {

		setTitle("Lines");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		add(new Surface());

		setSize(500, 500);
		setLocationRelativeTo(null);
	}

	public static void main(String[] args) {

		SwingUtilities.invokeLater(new Runnable() {

			@Override
			public void run() {

				mainclass lines = new mainclass();
				lines.setVisible(true);
			}
		});
	}
}
