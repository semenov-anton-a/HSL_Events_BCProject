package com.hsl.server.controllers;

import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.hsl.server.services.APIMyHelsinkiService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// @CrossOrigin(origins = "*")
@RequestMapping(headers = "Accept=application/json", produces = "application/json;charset=UTF-8")
@RestController
public class ApiTestController {
    
    @Autowired
    APIMyHelsinkiService apiHelloService;

    @RequestMapping(value = "/api")
    public String getApi() throws IOException {
        String url = "http://open-api.myhelsinki.fi/v2/places/?language_filter=en";
        // String url = "https://open-api.myhelsinki.fi/v2/place/10084";
        APIMyHelsinkiService myhelsinki = new APIMyHelsinkiService();
        return myhelsinki.get(url);
    }


    @RequestMapping(value = "/api/test")
    public String getFoos(HttpServletRequest request) throws Exception {
        
        return "";
        // Iterator<String> i =  requestParams.keySet().iterator();
        // APIMyHelsinkiService myhelsinki = new APIMyHelsinkiService();

        // return myhelsinki.getApiURL_ver2();

        // String str = "123";

        // // String regex = "^(\/api\/)";

        // return "?" + request.getQueryString();
        // if( requestParams.containsKey( new String("language_filter") ) ){
        //     return "ok";
        // }


        // while( i.hasNext() ){
        //     String key = i.next();

        //     str += key + " : " + requestParams.get(key) + "\n";

        //     // System.out.println(key + " : " + requestParams.get(key) );
        // }


        // return str;
    }

}
