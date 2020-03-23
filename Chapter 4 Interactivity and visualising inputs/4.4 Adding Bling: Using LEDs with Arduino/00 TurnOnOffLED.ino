int myLEDPin = 10;                       // define a global integer (int) variable to hold the pin number
void setup() {
  pinMode(myLEDPin, OUTPUT);  // initialize digital pin 10 as an output.
}
void loop() {
    digitalWrite(myLEDPin, HIGH);   // turn the LED on (HIGH is the voltage level)
    delay(1000);                                // wait for a second
    digitalWrite(myLEDPin, LOW);    // turn the LED off by making the voltage LOW
   delay(1000);                                 // wait for a second
} // loop() will repeat forever 

