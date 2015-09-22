/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.infografico.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 *
 * @author Ariel
 */
public class DateUtils {
    
    public static Date ConvertDate(String s) {
        if(s==null) {
            return null;
        }
        if(s.equals("")) {
            return null;
        }
        if(s.contains("Z")) {
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
            try {
                return df.parse(s);
            } catch (ParseException ex) {
                throw new RuntimeException(ex);
            }
        } else {
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
            try {
                return df.parse(s);
            } catch (ParseException ex) {
                throw new RuntimeException(ex);
            }
        }
    }

    public static Date ConvertDate(String s, Date defaultValue) {
        Date result = ConvertDate(s);
        if(result==null) {
            result = defaultValue;
        }
        return result;
    }
    
    public static Date ConvertDateDefaultToday(String s) {
        return ConvertDate(s, getToday());
    }
    
    public static Date ConvertDateNotNull(String s) {
        Date result = ConvertDate(s);
        if(result==null) {
            throw new RuntimeException("Data nao foi informada");
        }
        return result;
    }
    
    public static Date getToday() {
        Calendar cal =  Calendar.getInstance();
        cal.set(Calendar.HOUR, 0);
        cal.set(Calendar.MINUTE, 0);
        cal.set(Calendar.SECOND, 0);
        cal.set(Calendar.MILLISECOND, 0);
        return cal.getTime();
    }
    
    public static Date extractDate(Date d) {
        if(d==null) {
            return null;
        }
        Calendar cal = Calendar.getInstance();
        cal.setTime(d);
        cal.clear(Calendar.HOUR);
        cal.clear(Calendar.MINUTE);
        cal.clear(Calendar.SECOND);
        cal.clear(Calendar.MILLISECOND);
        return cal.getTime();
    }
}
