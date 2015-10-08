package br.com.infografico.repositories;

import java.util.List;

import javax.persistence.Query;

import br.com.infografico.entidades.Post;

public class PostRepository extends GenericRepository<Post> {

	public PostRepository() {
		super(Post.class);
	}
	
	
	@Override
	public List<Post> buscarTodos(){		
		Query query = getEntityManager().createQuery("select r from Post r");
		return query.getResultList();
	}
}