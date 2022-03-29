package com.hsl.server.services;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.springframework.stereotype.Service;

@Service
public class APIMyHelsinkiService {
    

    // private String apiUrl = "http://open-api.myhelsinki.fi/";
    
    public String get( String url ) throws IOException 
    {    
        StringBuilder result = new StringBuilder();
        
        String line;

        HttpURLConnection urlConnection = (HttpURLConnection) new URL(url).openConnection();
        
        urlConnection.setReadTimeout(5000);
        urlConnection.setConnectTimeout(5000);
        // urlConnection.setUseCaches(true);

        try (
            InputStream is = new URL(url).openStream();
            BufferedReader br = new BufferedReader(new InputStreamReader(is)) 
        ){

            while ((line = br.readLine()) != null) {
                result.append(line);
            }

        }

        return result.toString();
    }
    // END

}
