package br.com.infografico.repositories;

import java.util.List;

import javax.persistence.Query;

import br.com.infografico.entidades.Quadro;

public class QuadroRepository extends GenericRepository<Quadro>{
		
		public QuadroRepository() {
			super(Quadro.class);
		}
		
		public List<Quadro> buscarTodos(){
			Query query = getEntityManager().createQuery("select q from Quadro q");
			return query.getResultList();
		}

}
