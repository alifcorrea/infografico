package br.com.infografico.repositories;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;


public abstract class GenericRepository<T>  {

	
	private EntityManagerFactory conexao;

	private Class<T> classe;
	
	
	public GenericRepository(Class<T> classe) {
		this.classe = classe;
	}
	
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

    public void atualizar(T t) {

        EntityManager em = getEntityManager();
        em.getTransaction().begin();
        em.merge(t);
        em.getTransaction().commit();
        em.close();
    
    }

    public void salvar(T t){

        EntityManager em = getEntityManager();
        em.getTransaction().begin();
        em.persist(t);
        em.getTransaction().commit();
        em.close();
    }
	
	public void deletar(T t){

        EntityManager em = getEntityManager();
        em.getTransaction().begin();
        em.remove(em.merge(t));
        em.getTransaction().commit();
        em.close();
    	
    }
	
	public List<T> buscarTodos(){		
		Query query = getEntityManager().createQuery("select r from "+classe.getClass().getName()+ " r");
		return query.getResultList();
	}
    
    public T findById(Object id){
    	return (T) getEntityManager().find(classe, id);
    }
	

}
