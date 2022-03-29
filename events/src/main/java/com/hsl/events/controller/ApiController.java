package com.hsl.events.controller;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Map;
import java.util.Scanner;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ApiController {

    // @CrossOrigin(origins = "http://localhost:4200")
    // @ResponseBody
    @GetMapping("/api")
    // @RequestMapping(value = "/api", headers = "Accept=application/json")
    public String getApi() throws IOException {

        // return "HELLO";

        // System.out.println( "HELLO" );
        // URL url = new URL("https://open-api.myhelsinki.fi/swagger.json");
        URL url = new URL("http://open-api.myhelsinki.fi/v2/places/?language_filter=en");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        
        conn.setRequestMethod("GET");
        conn.connect();

        if ( conn.getResponseCode() == 200 ) {
            Scanner scan = new Scanner( url.openStream() );
            while (scan.hasNext()) {
                var temp = scan.nextLine();
                return temp;
            }            
        }
        return null;
    }

}
