package com.hsl.server.controllers;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import com.hsl.server.services.APIMyHelsinkiService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// @RequestMapping(headers = "Accept=application/json", produces = "text/plain;charset=UTF-8")
@RestController
public class ApiPlacesController {
    
    @Autowired
    APIMyHelsinkiService apiHelloService;

    private String categoryName = "places";

    @RequestMapping( value = "/api/places" )
    public String getApi( HttpServletRequest request ) throws IOException {
        APIMyHelsinkiService myhelsinki = new APIMyHelsinkiService();
        String apiHostUrl = myhelsinki.getApiURL_ver2();
        String queryString = this.categoryName + "/?" + request.getQueryString();
        return myhelsinki.get( apiHostUrl + queryString );
    }

}
