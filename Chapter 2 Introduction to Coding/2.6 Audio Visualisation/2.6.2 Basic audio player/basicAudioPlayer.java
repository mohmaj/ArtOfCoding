import java.io.*;
import javax.sound.sampled.*;


public class basicAudioPlayer {
   public static void main(String[] args) {
      SourceDataLine soundLine = null;
      int BUFFER_SIZE = 64*1024;  // 64 KB
   
      try {
         File soundFile = new File("pop.wav");
         AudioInputStream audioInputStream = AudioSystem.getAudioInputStream(soundFile);
         AudioFormat audioFormat = audioInputStream.getFormat();
         DataLine.Info info = new DataLine.Info(SourceDataLine.class, audioFormat);
         soundLine = (SourceDataLine) AudioSystem.getLine(info);
         soundLine.open(audioFormat);
         soundLine.start();
         int nBytesRead = 0;
         byte[] sampledData = new byte[BUFFER_SIZE];
         while (nBytesRead != -1) {
            nBytesRead = audioInputStream.read(sampledData, 0, sampledData.length);
            if (nBytesRead >= 0) {

               soundLine.write(sampledData, 0, nBytesRead);
            }
         }
      } catch (UnsupportedAudioFileException ex) {
         ex.printStackTrace();
      } catch (IOException ex) {
         ex.printStackTrace();
      } catch (LineUnavailableException ex) {
         ex.printStackTrace();
      } finally {
         soundLine.drain();
         soundLine.close();
      }
   }
}