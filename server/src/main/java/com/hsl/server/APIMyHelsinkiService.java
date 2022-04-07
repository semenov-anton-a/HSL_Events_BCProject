package com.hsl.server;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestParam;

public class APIMyHelsinkiService {


    
    public static String getDataByCategoryAPIVersion2(
        String category,
        HttpServletRequest request,
        @RequestParam Map<String,String> requestParams  
    ) throws MalformedURLException {

        String queryString = category + "/?" 
        + request.getQueryString() 
        + APIOptions.getLimit( requestParams ) // &limit= 
        + APIOptions.getLimitStart( requestParams ); // &start=

        JSONObject res = JsonFetcher.urlToJson( new URL( APIOptions.apiUrl2 + queryString ) );
        return res.toString();
    }

}
