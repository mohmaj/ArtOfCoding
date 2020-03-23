/* 
 * This example uses a separate function to set the LED outputs. This function can be called 
 * by the user each time the LED should be set. This example uses a relatively advanced low-level 
 * technique. It codes the LED values in a single byte with each bit of the byte being the 1 or 0 
 * that determines the LED ON/OFF state. This requires the setLEDs() function to pick off each 
 * bit of the byte in turn. */
/* Define the array to hold the LED pin numbers. It's defined here
 * outside all the functions so that it's a "global" variable 
 * and can be seen by all functions. */
int delayMS = 100;  // Variable to hold the time (in milliseconds)
                    // to delay between parts of the LED pattern. 
int ledPins[] = {6,7,8,9,10,11,12,13}; // An array to hold the Arduino
                                   // pin numbers that each LED is connected to.

void setup() {
  // Define all 8 pins as outputs...
  // The pins are referenced through the ledPins array
  for (int i = 0; i<8; i++){                   // loop eight times
     pinMode(ledPins[i], OUTPUT);  // set each LED pin to OUTPUT
  }
} // end of setup()



void loop() {
  // This set of setLED() commands makes the "Cylon eye" behavior. This version takes a 
  // single byte as an argument to tell setLEDs what the ON/OFF state is in each step of the 
  // pattern. The Arduino syntax for this is B10101010 for a single byte value. 
  setLEDs(B00000001, delayMS);
  setLEDs(B00000010, delayMS);
  setLEDs(B00000100, delayMS);
  setLEDs(B00001000, delayMS);
  setLEDs(B00010000, delayMS);
  setLEDs(B00100000, delayMS);
  setLEDs(B01000000, delayMS);
  setLEDs(B10000000, delayMS);
  setLEDs(B01000000, delayMS);
  setLEDs(B00100000, delayMS);
  setLEDs(B00010000, delayMS);
  setLEDs(B00001000, delayMS);
  setLEDs(B00000100, delayMS);
  setLEDs(B00000010, delayMS);
  setLEDs(B00000001, delayMS);
  // This is the end of the "cylon" pattern. Remember that loop()
  // starts over after it's done, so the pattern repeats. 
} // end of loop() - go back and start again

// This is the function that actually applies the pattern to the LED and then delays for the 
// specified amount of time. This version takes a single byte as input that holds the ON/OFF 
// values for the LEDs. It loops through each bit of that byte to set the LED values. The LED 
// pin numbers are held in the global LEDPins array. 
void setLEDs(byte LEDvalues, int delayMS) {
  // You can access each bit of the LEDvalues byte using the 
  // Arduino syntax: bitRead(number, whichBit); 
  for(int i=0; i<8; i++) { // loop 8 times - i = 0,1,2,3,4,5,6,7
     digitalWrite(ledPins[i], bitRead(LEDvalues, i)); 
  }
  delay(delayMS); //wait for delayMS milliseconds so you can see the change
} // end of setLEDs()


