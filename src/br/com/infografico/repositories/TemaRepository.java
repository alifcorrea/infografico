package br.com.infografico.repositories;

import java.util.List;

import javax.persistence.Query;

import br.com.infografico.entidades.Tema;

public class TemaRepository  extends GenericRepository<Tema>{

	public TemaRepository() {
		super(Tema.class);
	}
	
	public List<Tema> buscarTodos(){
		Query query = getEntityManager().createQuery("select t from Tema t");
		return query.getResultList();
	}

}