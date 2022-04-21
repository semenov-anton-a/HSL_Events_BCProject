package com.hsl.server;

import java.util.Map;

import org.springframework.web.bind.annotation.RequestParam;

public class APIOptions {
    
    private static final Number limitOfData = 5; // if value -1 onlimit get data
    private static final Number startOfData = 0;

    public static final String apiUrl1 = "http://open-api.myhelsinki.fi/v1/"; 
    public static final String apiUrl2 = "http://open-api.myhelsinki.fi/v2/"; 

    private static final String baseAPIUrl = "http://open-api.myhelsinki.fi/";



    public final static String getAPIUrlByVersion( Number version ) {
        return APIOptions.baseAPIUrl + "v" + version + "/"; 
    }

    /**
     * IF in a RequestParam &limit=?
     * @param limit
     * @return
     */
    public static String getLimit( @RequestParam Map<String,String> requestParams  ){  
        if( requestParams.containsKey(new String("limit")) ) {
            String n = requestParams.get( new String("limit") ) ;
            return new String( "&limit=" + n );
        }
        return ( limitOfData.intValue() == -1 ) ? "" : new String( "&limit=" + limitOfData );
        // return new String( "&limit=" + limitOfData ); 
    }


    /**
     * IF in a RequestParam &start=?
     * @param requestParams
     * @return
     */
    public static String getLimitStart( @RequestParam Map<String,String> requestParams  ){  
        if( requestParams.containsKey(new String("start")) ){
            String n = requestParams.get( new String("start") ) ;
            return new String( "&start=" + n );
        }
        return new String( "&start=" + startOfData ); 
    }
    
}
