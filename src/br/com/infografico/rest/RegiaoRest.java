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

import br.com.infografico.dto.RegiaoDTO;
import br.com.infografico.services.RegiaoService;
import br.com.infografico.utils.Json;

@Path("regiao")
public class RegiaoRest {

	
	RegiaoService regiaoService = new RegiaoService();
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response get(){
		List<RegiaoDTO> regioesDTO = regiaoService.buscaRegioes();
		return Response.ok(Json.toJson(regioesDTO)).build();
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response salvar(String json){
			
		RegiaoDTO dto = Json.fromJson(json, RegiaoDTO.class);
		regiaoService.salvar(dto);
		return Response.ok().build();

			
	}
	
	@GET
	@Path("/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarRegiaoPorId(@PathParam("id") Long id){
	
		RegiaoDTO regiaoDTO = regiaoService.buscarRegiaoPeloId(id);
		return Response.ok(Json.toJson(regiaoDTO)).build();
	}

	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response excluir(@PathParam("id") Long id){
		
		regiaoService.deletar(id);
		return Response.ok().build();
	}
}
