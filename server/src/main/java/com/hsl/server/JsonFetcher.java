package com.hsl.server;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.zip.GZIPInputStream;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class JsonFetcher {

    private static final Logger LOGGER = LoggerFactory.getLogger(JsonFetcher.class);

    public static JSONObject urlToJson(URL urlString) {
        StringBuilder sb = null;
        URL url;
        System.out.println( urlString );
        URLConnection urlCon;
        try {
            url = urlString;
            urlCon = url.openConnection();
            BufferedReader in = null;
            if (urlCon.getHeaderField("Content-Encoding") != null
                    && urlCon.getHeaderField("Content-Encoding").equals("gzip")) {
                LOGGER.info("reading data from URL as GZIP Stream");
                // in = new BufferedReader(new InputStreamReader(new GZIPInputStream(urlCon.getInputStream())));
                in = new BufferedReader(new InputStreamReader( new GZIPInputStream(urlCon.getInputStream()),"utf-8") );
            } else {
                LOGGER.info("reading data from URL as InputStream");
                // in = new BufferedReader(new InputStreamReader(urlCon.getInputStream()));
                in = new BufferedReader(new InputStreamReader( urlCon.getInputStream(),"utf-8") );
            }
            String inputLine;
            sb = new StringBuilder();

            while ((inputLine = in.readLine()) != null) {
                sb.append(inputLine);
            }
            in.close();
        } catch (IOException e) {
            LOGGER.info("Exception while reading JSON from URL - {}", e);
        }
        if (sb != null) {
            return new JSONObject(sb.toString());
        } else {
            LOGGER.warn("No JSON Found in given URL");
            
            return new JSONObject("{'error':'Not Found'}");
        }
    }
}