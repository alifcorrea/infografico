package br.com.infografico.services;

import java.util.ArrayList;
import java.util.List;

import br.com.infografico.dto.IndicadorDTO;
import br.com.infografico.dto.TemaDTO;
import br.com.infografico.entidades.Indicador;
import br.com.infografico.entidades.Tema;
import br.com.infografico.repositories.IndicadorRepository;
import br.com.infografico.repositories.TemaRepository;

public class IndicadorService {

	private IndicadorRepository indicadorRepository = new IndicadorRepository();
	private TemaRepository temaRepository = new TemaRepository();

	public List<IndicadorDTO> buscarTodos() {

		List<Indicador> indicadores = indicadorRepository.buscarTodos();
		List<Tema> temas = temaRepository.buscarTodos();
		List<IndicadorDTO> indicadorDTO = new ArrayList<IndicadorDTO>();
		List<TemaDTO> temaDTO = new ArrayList<TemaDTO>();

	if(indicadorDTO != null){

			IndicadorDTO dto = new IndicadorDTO();
			TemaDTO dtoTema = new TemaDTO();

			for (Indicador indicador : indicadores) {
				dto.id = indicador.getId();
				dto.nome = indicador.getNome();
					Tema tema = new Tema();
					tema.id = indicador.getTema().getId();
					tema.nome = indicador.getTema().getNome();
					dto.tema = tema;

					}

			for (Tema tema : temas) {
				dtoTema.id = tema.getId();
				dtoTema.nome = tema.getNome();
			}
			temaDTO.add(dtoTema);
			indicadorDTO.add(dto);
		}
		return indicadorDTO;
	}

	/*private TemaRepository temaRepository = new TemaRepository();
	public List<TemaDTO> buscaTemas(){


		List<Tema> temas = temaRepository.buscarTodos();
		List<TemaDTO> temaDTO = new ArrayList<TemaDTO>();

		if(temaDTO != null){
			for (Tema tema : temas) {

				TemaDTO dto = new TemaDTO();
				dto.id = tema.getId();
				dto.nome = tema.getNome();
				dto.conta = tema.getConta();

				temas.add(tema);
			}
		}
		return temaDTO;
	}*/

	public boolean salvar(IndicadorDTO dto) {

		IndicadorDTO indicador = new IndicadorDTO();

		/*indicador.setId(dto.id);
		indicador.setNome(dto.nome);
		indicador.setTema(dto.tema.id);

		if(indicador.getId() != 0){
			indicadorRepository.atualizar(indicador);
		}else{
			indicadorRepository.salvar(indicador);
		}*/
		return true;
	}

	public void deletar(Long id){
		try {
			Indicador indicador = indicadorRepository.findById(id);
			indicadorRepository.deletar(indicador);
		} catch(Exception e) {
			e.printStackTrace();
		}
	}

	public IndicadorDTO buscaPeloId(Long id) {

		Indicador indicador = indicadorRepository.findById(id);

		IndicadorDTO dto = new IndicadorDTO();
		dto.id = indicador.getId();
		dto.nome = indicador.getNome();
			Tema tema = new Tema();
			tema.id = indicador.getTema().getId();
			tema.nome = indicador.getTema().getNome();
		dto.tema = tema;
		return dto;
	}
}
