/* Use analogWrite() to fade an LED */
int ledPin = 10;       // LED on pin 10 (like Figure 4)
int fadeDelay = 30; // short delay to see the effect of the fading
void setup()  { 
  pinMode(ledPin, OUTPUT); // set pin 10 to be an output
 } 
void loop()  { 
  // fade LED from min to max in increments of 5 steps
  for(int val=0; val<256; val+=5) { 
     analogWrite(ledPin, val); // sets the value (from 0 to 255)
     delay(fadeDelay);            // wait a bit to see the effect
  }
  // fade LED from max to min in increments of 5 steps
  for(int val=255; val>=0; val-=5) {
     analogWrite(ledPin, val); // sets the value (from 0 to 255)
     delay(fadeDelay);            // wait a bit to see the effect
  }
}

