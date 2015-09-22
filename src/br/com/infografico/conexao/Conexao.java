package br.com.infografico.conexao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Conexao {

	 private EntityManagerFactory conexao;

	    private EntityManagerFactory conectar() {

	        try {
	            if (conexao != null && conexao.isOpen()){
	                return conexao;
	            }
	        } catch (Exception e) {
	            e.printStackTrace();
	        }

	        conexao = Persistence.createEntityManagerFactory("infografico");
	        return conexao;

	    }

	    public EntityManager getEntityManager() {
	        return conectar().createEntityManager();
	    }
	
}
