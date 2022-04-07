// package com.hsl.server.controllers;

// import java.io.IOException;
// import java.net.URL;
// import java.net.URLDecoder;
// import java.util.HashMap;
// import java.util.Iterator;
// import java.util.Map;

// import javax.servlet.http.HttpServletRequest;

// import com.hsl.server.APIMyHelsinkiService;
// import com.hsl.server.JsonFetcher;

// import org.apache.catalina.util.URLEncoder;
// import org.apache.tomcat.util.json.JSONParser;
// import org.json.JSONArray;
// import org.json.JSONObject;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.ResponseBody;
// import org.springframework.web.bind.annotation.RestController;
// // @CrossOrigin(origins = "*")
// // @RequestMapping( headers = {"Content-type=application/json" })

// @RestController
// public class ApiTestController {
    
//     @Autowired
//     APIMyHelsinkiService apiHelloService;

//     // @RequestMapping(value = "/api")
//     // public String getApi() throws IOException {
//     //     String url = "http://open-api.myhelsinki.fi/v2/places/?language_filter=en";
//     //     // String url = "https://open-api.myhelsinki.fi/v2/place/10084";
//     //     APIMyHelsinkiService myhelsinki = new APIMyHelsinkiService();
//     //     // return myhelsinki.get(url);
//     // }


//     @ResponseBody()
//     @RequestMapping(value = "/api/test", headers = {"Content-type=application/json" })
//     public String getFoos(
//         HttpServletRequest request,
//         @RequestParam Map<String,String> requestParams
//     ) throws Exception {
//         // // String url_str = "http://open-api.myhelsinki.fi/v2/places/?language_filter=en";
//         // String url_str = "http://open-api.myhelsinki.fi/v2/place/2287";

//         // URL url = new URL(url_str);

//         // JSONObject res = JsonFetcher.urlToJson( url );
//         // System.out.println( res );


//         // return res.toString();

//         // return "";
//         // return "";
//         Iterator<String> i =  requestParams.keySet().iterator();
//         // APIMyHelsinkiService myhelsinki = new APIMyHelsinkiService();

//         // return myhelsinki.getApiURL_ver2();

//         // String str = "123";

//         // // String regex = "^(\/api\/)";

//         // // return "?" + request.getQueryString();
//         // if( requestParams.containsKey(new String("language_filter")) ){
            
//         //     return requestParams.get( requestParams.get( new String("language_filter")) );
//         //     // return "ok";
//         // }

//         String s = "";
//         return s = requestParams.get( new String("language_filter")) ;

//         // return "";
//         // String str = "";
//         // while( i.hasNext() ){
//         //     String key = i.next();

//         //     str += key + " : " + requestParams.get(key) + "\n";

//         //     // System.out.println(key + " : " + requestParams.get(key) );
//         // }


//         // return str;
//     }

// }
