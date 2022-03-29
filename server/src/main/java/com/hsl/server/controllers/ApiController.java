package com.hsl.server.controllers;

import java.io.IOException;

import com.hsl.server.services.APIMyHelsinkiService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RequestMapping(headers = "Accept=application/json")
@RestController
public class ApiController {
    
    @Autowired
    APIMyHelsinkiService apiHelloService;
    

    @RequestMapping(value = "/api")
    public String getApi() throws IOException{
        String url = "http://open-api.myhelsinki.fi/v2/places/?language_filter=en";
        // String url = "https://open-api.myhelsinki.fi/v2/place/10084";
        APIMyHelsinkiService myhelsinki = new APIMyHelsinkiService();
        return myhelsinki.get(url);
    }


    @RequestMapping(value = "/api/test")
    public String getFoos(@RequestParam(defaultValue = "test") String id) {
        return "ID: " + id;
    }

}
