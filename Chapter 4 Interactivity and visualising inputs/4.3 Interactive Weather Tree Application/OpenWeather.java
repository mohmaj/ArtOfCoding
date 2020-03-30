import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.InputStreamReader;
import java.net.ConnectException;
import java.net.URL;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class OpenWeather {
	//Default values in the instance of network error
	private String name = "Morphett Vale";
	private double temperature = 30;
	private double windSpeed = 15;
	private double windDirection;
	private boolean rain;
	private String weather = "clear";
	
	public OpenWeather(){
		requestWeather();
	}
	
	public void requestWeather(){
		requestWeather(name);
	}
	
	public void requestWeather(String name){
		JSONParser parser = new JSONParser();
		try {
			URL url = new URL("http://api.openweathermap.org/data/2.5/weather?q=" + name + "&APPID=6aa53a1629fb5048d8580c85869f94a2&units=metric");
			BufferedReader br = new BufferedReader(new InputStreamReader(url.openStream()));
			JSONObject response = (JSONObject) parser.parse(br.readLine());
			this.name = (String)response.get("name") + ", " + (String)((JSONObject)response.get("sys")).get("country");
			rain = false;
			weather = "";
			for(Object weatherTypes : (JSONArray)response.get("weather")){
				weather += ((JSONObject)weatherTypes).get("main").toString().toLowerCase() + " ";
				if(weather.contains("rain"))
					rain = true;
			}
			temperature = Double.parseDouble(((JSONObject)response.get("main")).get("temp").toString());
			windSpeed = Double.parseDouble(((JSONObject)response.get("wind")).get("speed").toString()) * 1.61;
			windDirection = Double.parseDouble(((JSONObject)response.get("wind")).get("deg").toString());
			
		} catch (Exception ex) {
			if(ex instanceof ConnectException) System.out.println("Network Error: Using default/previous weather object...");
			else if (ex instanceof FileNotFoundException) System.out.println("City Not Found Error: Using default/previous weather object...");
			else ex.printStackTrace();
		}
		System.out.println(this);
	}

	public String getName() {
		return name;
	}
	
	public double getTemperature() {
		return temperature;
	}

	public double getWindSpeed() {
		return windSpeed;
	}

	public double getWindDirection() {
		return windDirection;
	}
	
	public boolean isRaining(){
		return rain;
	}
	
	@Override
	public String toString(){
		return  "_____________________________________\n" +
				"Weather" 
				+ "\nLocation: " + name 
				+ "\nTemp: " + temperature 
				+ "\nWeather: " + weather
				+ "\nWindDirection:" + windDirection
				+"\n_____________________________________";
	}
}
