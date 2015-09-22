package br.com.infografico.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import br.com.infografico.dto.ContaDTO;
import br.com.infografico.services.ContaService;

import com.google.gson.Gson;

@Path("conta")
public class ContaRest {
	
	private ContaService contaService = new ContaService();
	Gson gson = new Gson();

	@GET
	@Produces("application/json")
	public Response buscarTodos() {
		return Response.ok(gson.toJson(contaService.buscarTodos())).build();
	}
	
	@GET
	@Path("/{id}")
	@Produces("application/json")
	@Consumes("application/json")
	public Response buscarPorId(@PathParam("id") Long id) {
		
		ContaDTO contaDTO = contaService.buscaPeloId(id);
		return Response.ok(gson.toJson(contaDTO)).build();
	}

	@POST
	@Consumes("application/json") 
	@Produces("application/json")
	public Response salvar(String jsonConta) {
		
		ContaDTO dtoDeConta = gson.fromJson(jsonConta, ContaDTO.class);		
		boolean resposta = contaService.salvar(dtoDeConta);		
		if(resposta){			
			return Response.ok().build();		
		}else{
			return Response.serverError().build();
		}
	}

	@DELETE
	@Path("/{id}")
	@Produces("application/json")
	public Response excluir(@PathParam("id") Long id){
		
		contaService.deletar(id);
		return null;
		
	}
	
}
