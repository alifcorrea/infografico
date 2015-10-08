package br.com.infografico.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;

import br.com.infografico.dto.ContaDTO;
import br.com.infografico.entidades.Post;
import br.com.infografico.services.PostService;

@Path("post")
public class PostRest {
	
	Gson gson = new Gson();
	
	private PostService postService = new PostService();
	
	@POST
	@Consumes("application/json") 
	@Produces("application/json")
	public Response salvar(String jsonPost) {
		
		Post post = gson.fromJson(jsonPost, Post.class);		
		boolean resposta = postService.salvar(post);		
		if(resposta){			
			return Response.ok().build();		
		}else{
			return Response.serverError().build();
		}
	}
	
	@GET
	@Produces("application/json")
	public Response buscarTodos() {
		return Response.ok(gson.toJson(postService.buscarTodos())).build();
	}

}
