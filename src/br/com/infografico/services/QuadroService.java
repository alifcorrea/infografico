package br.com.infografico.services;

import java.util.ArrayList;
import java.util.List;

import br.com.infografico.dto.QuadroDTO;
import br.com.infografico.entidades.Indicador;
import br.com.infografico.entidades.Quadro;
import br.com.infografico.repositories.QuadroRepository;

public class QuadroService {

private QuadroRepository quadroRepository = new QuadroRepository();

	public List<QuadroDTO> buscaQuadros(){

		List<Quadro> quadros = quadroRepository.buscarTodos();
		List<QuadroDTO> quadrosDTO = new ArrayList<QuadroDTO>();

		if(quadrosDTO != null){
			for (Quadro quadro : quadros) {

				QuadroDTO dto = new QuadroDTO();
				dto.id = quadro.getId();
				dto.nome = quadro.getNome();
				Indicador indicador = new Indicador();
				indicador.id = quadro.getIndicador().getId();
				indicador.setNome(quadro.getIndicador().getNome());
				dto.indicador = indicador;
				quadrosDTO.add(dto);
			}
		}
		return quadrosDTO;
	}

	public void salvar(QuadroDTO dto) {

		Quadro quadro = new Quadro();

		quadro.setId(dto.id);
		quadro.setNome(dto.nome);
		Indicador indicador = new Indicador();
		indicador.id = quadro.getIndicador().getId();
		//indicador.nome = quadro.getIndicador().getNome();
		System.out.println(indicador);
		quadro.setIndicador(indicador);
		if(quadro.getId() != 0){
			quadroRepository.atualizar(quadro);
		}else{
			quadroRepository.salvar(quadro);
		}
	}

	public QuadroDTO buscarQuadroPeloId(Long id) {

		Quadro quadro = quadroRepository.findById(id);
		QuadroDTO dto = new QuadroDTO();

		dto.id = quadro.getId();
		dto.nome = quadro.getNome();
		Indicador indicador = new Indicador();
		indicador.id = quadro.getIndicador().getId();
		dto.indicador = indicador;
		return dto;
	}

	public void deletar(Long id) {

		try {
			Quadro quadro = quadroRepository.findById(id);
			quadroRepository.deletar(quadro);

		} catch(Exception e) {
			e.printStackTrace();
		}

	}
}
