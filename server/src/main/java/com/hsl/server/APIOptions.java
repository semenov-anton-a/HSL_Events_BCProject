package com.hsl.server;

import java.util.Map;

import org.springframework.web.bind.annotation.RequestParam;

public class APIOptions {
    
    private static final Number limitOfData = 100;
    private static final Number startOfData = 0;







    /**
     * IF in a RequestParam &limit=?
     * @param limit
     * @return
     */
    public static String getLimit( @RequestParam Map<String,String> requestParams  ){  
        if( requestParams.containsKey(new String("limit")) ){
            String n = requestParams.get( new String("limit") ) ;
            return new String( "&limit=" + n );
        }
        return new String( "&limit=" + limitOfData ); 
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
