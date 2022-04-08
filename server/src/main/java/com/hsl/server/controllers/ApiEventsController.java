package com.hsl.server.controllers;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.hsl.server.APIMyHelsinkiService;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// @RequestMapping(headers = "Accept=application/json", produces = "text/plain;charset=UTF-8")
@RestController
public class ApiEventsController {
    

    @RequestMapping( value = "/api/events" )
    public String getAllEvents( 
        HttpServletRequest request,
        @RequestParam Map<String,String> requestParams
    ) throws IOException {
        
        return APIMyHelsinkiService.getDataArrayByParams( "events", true, request, requestParams, 1 );
    
    }


    @RequestMapping( value = "/api/event/{id}" )
    public String getEventById( 
        @PathVariable("id") String id,
        HttpServletRequest request
    ) throws MalformedURLException  {
    
        System.out.println( "=================================" );
        System.out.println( id );
        System.out.println( "=================================" );
    
        return APIMyHelsinkiService.getOnceItem( "event/"+id, request, 1 );
    }


    // @RequestMapping( value = "/api/activities/{id}" )
    // public String getActivitiesById( 
    //     HttpServletRequest request,
    //     @RequestParam Map<String,String> requestParams 
    // ) throws IOException {
        

    //     System.out.println( "ok" );
    //     return APIMyHelsinkiService.getDataByCategoryAPIVersion2( "activities", false, request, requestParams );
    
    // }

}
