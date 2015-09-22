package br.com.infografico.repositories;

import java.util.List;

import javax.persistence.Query;

import br.com.infografico.entidades.Pessoa;

public class PessoaRepository extends GenericRepository<Pessoa>{

	public PessoaRepository() {
		super(Pessoa.class);
	}
	
	public List<Pessoa> buscarTodos(){
		Query query = getEntityManager().createQuery("select p from pessoa p");
		return query.getResultList();
	}
}
