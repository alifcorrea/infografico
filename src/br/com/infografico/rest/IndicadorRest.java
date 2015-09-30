package br.com.infografico.rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.com.infografico.dto.IndicadorDTO;
import br.com.infografico.dto.RegiaoDTO;
import br.com.infografico.services.IndicadorService;
import br.com.infografico.utils.Json;

import com.google.gson.Gson;

@Path("indicador")
public class IndicadorRest {

	private IndicadorService indicadorService = new IndicadorService();
	Gson gson = new Gson();
	
	@GET
	@Produces("application/json")
	public Response buscarTodos() {
		List<IndicadorDTO> indicadoresDTO = indicadorService.buscarTodos();
		return Response.ok(Json.toJson(indicadoresDTO)).build();
	}
	
	
	@GET
	@Path("/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarPorId(@PathParam("id") Long id){
	
		IndicadorDTO indicadorDTO = indicadorService.buscaPeloId(id);
		return Response.ok(Json.toJson(indicadorDTO)).build();
	}


	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response salvar(String json){
			
		IndicadorDTO dto = Json.fromJson(json, IndicadorDTO.class);
		indicadorService.salvar(dto);
		return Response.ok().build();

			
	}

	@DELETE
	@Path("/{id}")
	@Produces("application/json")
	public Response excluir(@PathParam("id") Long id){
		
		indicadorService.deletar(id);
		return null;
		
	}
}
