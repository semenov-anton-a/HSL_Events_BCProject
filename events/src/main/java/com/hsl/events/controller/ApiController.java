package com.hsl.events.controller;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URI;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import javax.persistence.Entity;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// @CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "*")
@RestController
public class ApiController {

    @GetMapping(path = "/hello", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity sayHello() {
        // Get data from service layer into entityList.

        // List<JSONObject> entities = new ArrayList<JSONObject>();
        // for (Entity n : entityList) {
        // JSONObject entity = new JSONObject();
        // entity.put("aa", "bb");
        // entities.add(entity);
        // }
        String link = "http://open-api.myhelsinki.fi/v2/places/?language_filter=en";
        return ResponseEntity.ok(link);
        // return new ResponseEntity<Object>(link, HttpStatus.OK);
    }

    // @CrossOrigin(origins = "http://localhost:4200")
    // @ResponseBody
    // @GetMapping("/api")
    @RequestMapping(value = "/api", headers = "Accept=application/json")
    public String getApi() throws IOException {
        // URL url = new URL("https://open-api.myhelsinki.fi/swagger.json");
        URL url = new URL("http://open-api.myhelsinki.fi/v2/places/?language_filter=en");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.connect();

        try (BufferedInputStream in = new BufferedInputStream(url.openStream())) {
            byte dataBuffer[] = new byte[1024];
            int bytesRead;
            while ((bytesRead = in.read(dataBuffer, 0, 1024)) != -1) {

                // fileOutputStream.write(dataBuffer, 0, bytesRead);
            }
        } catch (IOException e) {
            // handle exception
        }
        // if ( conn.getResponseCode() == 200 )
        // {
        // System.out.println( url.openStream().read() );
        // // Scanner scan = new Scanner( url.openStream() );
        // // while ( scan.hasNext() )
        // // {
        // // String temp = scan.nextLine();
        // // return temp;
        // // }
        // }

        return "{}";
    }

    @RequestMapping(value = "/test", headers = "Accept=application/json")
    public String getTest() throws IOException {
        StringBuilder result = new StringBuilder();
        String line;

        String url = "http://open-api.myhelsinki.fi/v2/places/?language_filter=en"; 
        // add user agent
        HttpURLConnection urlConnection = (HttpURLConnection) new URL(url).openConnection();
        // urlConnection.addRequestProperty("User-Agent", "Mozilla");
        urlConnection.setReadTimeout(5000);
        urlConnection.setConnectTimeout(5000);

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
}
