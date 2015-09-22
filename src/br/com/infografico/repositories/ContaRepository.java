package br.com.infografico.repositories;

import java.util.List;

import javax.persistence.Query;

import br.com.infografico.entidades.Conta;

/**
 * @author Rodrigo, Vinicius, Alif
 */

public class ContaRepository extends GenericRepository<Conta> {

	public ContaRepository() {
		super(Conta.class);
	}
	
	public List<Conta> buscarTodos(){
		Query query = getEntityManager().createQuery("select c from Conta c");
		return query.getResultList();
	}
	
	
}
