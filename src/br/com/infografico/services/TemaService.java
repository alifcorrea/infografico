package br.com.infografico.services;

import java.util.ArrayList;
import java.util.List;

import br.com.infografico.dto.RegiaoDTO;
import br.com.infografico.dto.TemaDTO;
import br.com.infografico.entidades.Regiao;
import br.com.infografico.entidades.Tema;
import br.com.infografico.repositories.TemaRepository;

public class TemaService {

	TemaRepository temaRepository = new TemaRepository();
	
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

	public void salvar(TemaDTO dto) {

		Tema tema = new Tema();		
		tema.setId(dto.id);
		tema.setNome(dto.nome);
		
		Regiao regiao = new Regiao();		
		RegiaoDTO regiaodto = dto.regiao;
		regiao.setId(regiaodto.id);
		regiao.setNome(regiaodto.nome);		
		tema.setRegiao(regiao);	
		
		if(tema.getId() != 0){
			temaRepository.atualizar(tema);
		}else{			
			temaRepository.salvar(tema);
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
