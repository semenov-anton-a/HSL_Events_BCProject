package com.hsl.events.controllers;

import java.io.IOException;

import com.hsl.events.services.APIMyHelsinki;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

// @CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "*")

@RestController
public class ApiController {

    // @Autowired
    // APIMyHelsinki myhelsinki;

    @RequestMapping(value = "/api", headers = "Accept=application/json")
    public String getTest() {

        return "HELLO";

        // String url = "http://open-api.myhelsinki.fi/v2/places/?language_filter=en";
        // // String url = "https://open-api.myhelsinki.fi/v2/place/10084";
        // APIMyHelsinki myhelsinki = new APIMyHelsinki();
        // return myhelsinki.get(url);
    }

    // @ResponseBody()
    // @GetMapping("/foos")
    // public String getFoos(@RequestParam(defaultValue = "test") String id) {
    // return "ID: " + id;
    // }
}
