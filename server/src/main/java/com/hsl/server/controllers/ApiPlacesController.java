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
public class ApiPlacesController {
    



    @RequestMapping( value = "/api/places" )
    public String getAllPlaces( 
        HttpServletRequest request,
        @RequestParam Map<String,String> requestParams 
    ) throws IOException {

        return APIMyHelsinkiService.getDataArrayByParams( "places", true, request, requestParams, 2 );
    
    }


    @RequestMapping( value = "/api/place/{id}" )
    public String getPlaceById( 
        @PathVariable("id") int id,
        HttpServletRequest request
    ) throws MalformedURLException  {
        
        System.out.println( "=================================" );
        System.out.println( id  );
        System.out.println( "=================================" );
        

        return APIMyHelsinkiService.getOnceItem( "place/"+id, request, 2 );
        // return requestParams.toString();
        // return APIMyHelsinkiService.getDataByCategoryAPIVersion2( "places", true, request, requestParams );
    
    }

}
