package br.com.infografico.utils;

import java.io.Serializable;

public class Jsonable implements Serializable {
    public String toJson() {
        return Json.toJson(this);
    }
}
