package com.hsl.server.controllers;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.hsl.server.APIMyHelsinkiService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// @RequestMapping(headers = "Accept=application/json", produces = "text/plain;charset=UTF-8")
@RestController
public class ApiPlacesController {
    



    @RequestMapping( value = "/api/places" )
    public String getApi( 
        HttpServletRequest request,
        @RequestParam Map<String,String> requestParams 
    ) throws IOException {

        return APIMyHelsinkiService.getDataByCategoryAPIVersion2( "places", true, request, requestParams );
    
    }

}
