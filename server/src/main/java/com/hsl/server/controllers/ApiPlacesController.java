package com.hsl.server.controllers;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.hsl.server.APIOptions;
import com.hsl.server.JsonFetcher;
import com.hsl.server.services.APIMyHelsinkiService;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// @RequestMapping(headers = "Accept=application/json", produces = "text/plain;charset=UTF-8")
@RestController
public class ApiPlacesController {
    
    @Autowired
    APIMyHelsinkiService apiHelloService;

    private String categoryName = "places";

    

    @RequestMapping( value = "/api/places" )
    public String getApi( 
        HttpServletRequest request,
        @RequestParam Map<String,String> requestParams 
    ) throws IOException {
    
        APIMyHelsinkiService myhelsinki = new APIMyHelsinkiService();
        String apiHostUrl = myhelsinki.getApiURL_ver2();
        
        String queryString = this.categoryName + "/?" 
            + request.getQueryString() 
            + APIOptions.getLimit( requestParams ) // &limit= 
            + APIOptions.getLimitStart( requestParams ); // &start=
        
        JSONObject res = JsonFetcher.urlToJson( new URL( apiHostUrl + queryString ) );
        return res.toString();
    
    }

}
