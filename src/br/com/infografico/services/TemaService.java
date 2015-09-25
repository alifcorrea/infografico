package br.com.infografico.services;

import java.util.ArrayList;
import java.util.List;

import br.com.infografico.dto.IndicadorDTO;
import br.com.infografico.dto.RegiaoDTO;
import br.com.infografico.dto.TemaDTO;
import br.com.infografico.entidades.Indicador;
import br.com.infografico.entidades.Regiao;
import br.com.infografico.entidades.Tema;
import br.com.infografico.repositories.RegiaoRepository;
import br.com.infografico.repositories.TemaRepository;

public class TemaService {

	TemaRepository temaRepository = new TemaRepository();
	RegiaoRepository regiaoRepository = new RegiaoRepository();
	
	public List<TemaDTO> buscaTemas(){		
		
		List<Tema> temas = temaRepository.buscarTodos();
		List<TemaDTO> temasDTO = new ArrayList<TemaDTO>();

		if(temasDTO != null){			
			for (Tema tema : temas) {
		
				TemaDTO dto = new TemaDTO();
				dto.id = tema.getId();
				dto.nome = tema.getNome();		
				
				RegiaoDTO regiaoDTO = new RegiaoDTO();
				regiaoDTO.id = tema.getRegiao().getId();
				regiaoDTO.nome = tema.getRegiao().getNome();
				dto.regiao = regiaoDTO;

				temasDTO.add(dto);
				System.out.println(dto);
			}
		}
		
		return temasDTO;		
	}

	public boolean salvar(TemaDTO dto) {

	
		try{
				Tema tema = null;
		
				if(dto.id != null) {
					tema = temaRepository.findById(dto.id);
					tema.setId(dto.id);
				}else {
						tema = new Tema();
					  }
				tema.setNome(dto.nome);
				
				Regiao regiao = null;
				if(dto.regiao.id != null){
					regiao = regiaoRepository.findById(dto.regiao.id);
				}
	
				regiao.setId(dto.regiao.id);
				regiao.setNome(dto.regiao.nome);		
				tema.setRegiao(regiao);	
				
				if(tema.getId()!= 0){
					temaRepository.atualizar(tema);
				}else{			
						temaRepository.salvar(tema);
					 }
			return true;
		
		}catch(Exception e){
			e.printStackTrace();
			return false;
		}	
	}

	public TemaDTO buscarTemaPeloId(Long id) {
		
		Tema tema = temaRepository.findById(id);
		TemaDTO dto = new TemaDTO();			
		dto.id = tema.getId();
		dto.nome = tema.getNome();
		
		RegiaoDTO regiaoDTO = new RegiaoDTO();
		regiaoDTO.id = tema.getRegiao().getId();
		regiaoDTO.nome = tema.getRegiao().getNome();		
		dto.regiao = regiaoDTO;
	
		List<IndicadorDTO> indicadoresDTO = new ArrayList<IndicadorDTO>();		
		for (Indicador indicador : tema.getIndicadores()) {
			IndicadorDTO indicadorDTO = new IndicadorDTO();
			indicadorDTO.id = indicador.getId();
			indicadorDTO.nome = indicador.getNome();
			indicadoresDTO.add(indicadorDTO);
		}		
		dto.indicadores = indicadoresDTO;
			
		return dto;
	}

	public void deletar(Long id) {

		try {
			Tema tema = temaRepository.findById(id);
			temaRepository.deletar(tema);
			
		} catch(Exception e) {
			e.printStackTrace();
		}
		
	}
	
}
