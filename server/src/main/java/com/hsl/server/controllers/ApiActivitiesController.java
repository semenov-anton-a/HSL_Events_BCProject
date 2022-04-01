package com.hsl.server.controllers;

import java.io.IOException;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.hsl.server.APIMyHelsinkiService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// @RequestMapping(headers = "Accept=application/json", produces = "text/plain;charset=UTF-8")
@RestController
public class ApiActivitiesController {
    

    @RequestMapping( value = "/api/activities" )
    public String getApi( 
        HttpServletRequest request,
        @RequestParam Map<String,String> requestParams 
    ) throws IOException {
        
        return APIMyHelsinkiService.getDataByCategoryAPIVersion2( "activities", request, requestParams );
    
    }

}
