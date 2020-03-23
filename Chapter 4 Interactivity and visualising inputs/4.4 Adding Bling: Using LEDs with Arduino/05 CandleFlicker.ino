// A program to simulate a candle flickering effect on an LED. 
// Use the random function to vary both the brightness and the time
// between changes to that brightness to simulate the random flickering
// of a candle. 
int myLEDpin = 10; // define a global integer (int) variable to hold the pin number
void setup() {
  pinMode(myLEDpin, OUTPUT);  // initialize digital pin 10 as an output.
}
void loop() {
   // write a random value for the brightness using analogWrite to get different brightness
   // and the random function to choose a different brightness value each time through the loop
   analogWrite(myLEDpin, random(100, 256));  // random value from 100 to 255
   delay(random(50, 151));                                 // delay for a random time from 50ms to 150ms
} // loop() will repeat forever 

