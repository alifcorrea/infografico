package br.com.infografico.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import br.com.infografico.dto.IndicadorDTO;
import br.com.infografico.dto.TemaDTO;
import br.com.infografico.services.IndicadorService;

import com.google.gson.Gson;

@Path("indicador")
public class IndicadorRest {

	private static final TemaDTO TemaDTO = null;
	private IndicadorService indicadorService = new IndicadorService();
	Gson gson = new Gson();
	
	@GET
	@Produces("application/json")
	public Response buscarTodos() {
		return Response.ok(gson.toJson(indicadorService.buscarTodos())).build();
	}
	
	@GET
	@Path("/{id}")
	@Produces("application/json")
	@Consumes("application/json")
	public Response buscarPorId(@PathParam("id") Long id) {
		
		IndicadorDTO indicadorDTO = indicadorService.buscaPeloId(id);
		return Response.ok(gson.toJson(indicadorDTO)).build();
	}

	@POST
	@Consumes("application/json") 
	@Produces("application/json")
	public Response salvar(String jsonIndicador) {
		
		IndicadorDTO indicadorDTO  = gson.fromJson(jsonIndicador, IndicadorDTO.class);		
		boolean resposta = indicadorService.salvar(indicadorDTO);		
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
		
		indicadorService.deletar(id);
		return null;
		
	}
}
