package br.com.infografico.utils;

import java.text.SimpleDateFormat;

public class SimpleDateFormatFactory {
    
    public static SimpleDateFormat newInstance() {
        return new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
    }
    
}
