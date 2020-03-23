/*
 * Eight-LED example #1.
 * This example takes a brute-force approach to making patterns appear on the 8 LEDs. 
 */
int delayMS = 100; // Variable to hold the time (in milliseconds) to delay between 
                               // parts of the LED pattern. 
void setup() { // Runs once to set up the pins as outputs 
   pinMode(6, OUTPUT);   // Define all 8 pins as outputs...
   pinMode(7, OUTPUT);
   pinMode(8, OUTPUT); 
   pinMode(9, OUTPUT);
   pinMode(10, OUTPUT); 
   pinMode(11, OUTPUT);
   pinMode(12, OUTPUT); 
   pinMode(13, OUTPUT);
   digitalWrite(6, HIGH); // Start with the LED on pin 6 HIGH (ON)
}
void loop() {
   // This set of digitalWrite() commands makes (half of) the "Cylon eye" behavior. 
   // Start by going from pin6 LED to pin13 LED.
   // Note that the first time through loop(), pin6 is already HIGH  
   delay(delayMS);         // Wait for delayMS milliseconds
   digitalWrite(6, LOW);   // set pin 2 LED OFF
   digitalWrite(7, HIGH);  // set pin 3 LED ON
   delay(delayMS);         // Wait for delayMS milliseconds
   digitalWrite(7, LOW);   // set pin 3 LED OFF
   digitalWrite(8, HIGH);  // set pin 4 LED ON
   delay(delayMS);         // Wait for delayMS milliseconds  
   digitalWrite(8, LOW);   // etc… 
   digitalWrite(9, HIGH);  
   delay(delayMS); 
   digitalWrite(9, LOW); 
   digitalWrite(10, HIGH); 
   delay(delayMS); 
   digitalWrite(10, LOW); 
   digitalWrite(11, HIGH); 
   delay(delayMS); 
   digitalWrite(11, LOW); 
   digitalWrite(12, HIGH); 
   delay(delayMS); 
   digitalWrite(12, LOW); 
   digitalWrite(13, HIGH); 
   delay(delayMS); 
   digitalWrite(13, LOW);
   // For the full “Cylon eye” you would need to light up the LEDs 
   // in reverse order here… 
}


