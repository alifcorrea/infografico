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

import br.com.infografico.dto.QuadroDTO;
import br.com.infografico.services.QuadroService;
import br.com.infografico.utils.Json;

import com.google.gson.Gson;

@Path("quadro")
public class QuadroRest {

QuadroService quadroService = new QuadroService();
Gson gson = new Gson();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response get(){
		List<QuadroDTO> quadrosDTO = quadroService.buscaQuadros();
		return Response.ok(Json.toJson(quadrosDTO)).build();
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response salvar(String json){
			
		QuadroDTO dto = Json.fromJson(json, QuadroDTO.class);
		quadroService.salvar(dto);
		return Response.ok().build();
			
	}
	
	@GET
	@Path("/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarQuadroPorId(@PathParam("id") Long id){
	
		QuadroDTO quadroDTO = quadroService.buscarQuadroPeloId(id);
		return Response.ok(Json.toJson(quadroDTO)).build();
	}

	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response excluir(@PathParam("id") Long id){		
		quadroService.deletar(id);
		return Response.ok().build();
	}
}
