package br.com.infografico.repositories;

import java.util.List;

import javax.persistence.Query;

import br.com.infografico.entidades.Indicador;

public class IndicadorRepository extends GenericRepository<Indicador>  {
	
	public IndicadorRepository() {
		super(Indicador.class);
	}
	
	public List<Indicador> buscarTodos(){
		Query query = getEntityManager().createQuery("select i from indicador i");
		return query.getResultList();
	}


}
