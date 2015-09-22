package br.com.infografico.repositories;

import java.util.List;

import javax.persistence.Query;

import br.com.infografico.entidades.Regiao;

public class RegiaoRepository  extends GenericRepository<Regiao>{

	public RegiaoRepository() {
		super(Regiao.class);
	}
	
	public List<Regiao> buscarTodos(){		
		Query query = getEntityManager().createQuery("select r from Regiao r");
		return query.getResultList();
	}

}
