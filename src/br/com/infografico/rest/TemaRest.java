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

import br.com.infografico.dto.TemaDTO;
import br.com.infografico.services.TemaService;
import br.com.infografico.utils.Json;

@Path("tema")
public class TemaRest {
	
	TemaService temaService = new TemaService();
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response get(){
		List<TemaDTO> temasDTO = temaService.buscaTemas();
		return Response.ok(Json.toJson(temasDTO)).build();
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response salvar(String json){
			
		TemaDTO dto = Json.fromJson(json, TemaDTO.class);
		temaService.salvar(dto);
		return Response.ok().build();
			
	}
	
/*	@GET
	@Path("/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarTemaPorId(@PathParam("id") Long id){
	
		TemaDTO temaDTO = temaService.buscarTemaPeloId(id);
		return Response.ok(Json.toJson(temaDTO)).build();
	}*/

	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response excluir(@PathParam("id") Long id){		
		temaService.deletar(id);
		return Response.ok().build();
	}
}