package com.hsl.server.services;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import lombok.Getter;
import org.springframework.stereotype.Service;

@Getter
@Service
public class APIMyHelsinkiService {

    // private String currentHost = ""
    private String apiURL_ver1 = "http://open-api.myhelsinki.fi/v1/"; 
    private String apiURL_ver2 = "http://open-api.myhelsinki.fi/v2/"; 

    // private String apiUrl = "http://open-api.myhelsinki.fi/";
    
    public String get( String url ) throws IOException 
    {    
        StringBuilder result = new StringBuilder();
        
        /**
         * https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-json/2.6.5
         * 
         *  */ 

        String line;

        HttpURLConnection urlConnection = (HttpURLConnection) new URL(url).openConnection();
        urlConnection.setRequestProperty("Cache-Control", "no-cache");
        urlConnection.setRequestProperty("Content-Type", "application/json;charset=utf-8");
        urlConnection.setRequestProperty("Accept-Encoding", "gzip,deflate");
        urlConnection.setRequestProperty("Accept", "*/*");
        
        urlConnection.setDoOutput(true);


        urlConnection.setReadTimeout(5000);
        urlConnection.setConnectTimeout(5000);
        // urlConnection.setCharacterEncoding("UTF");
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
