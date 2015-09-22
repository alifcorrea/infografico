package br.com.infografico.services;

import java.util.ArrayList;
import java.util.List;

import br.com.infografico.dto.TemaDTO;
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
				dto.conta = tema.getConta();
				dto.conta.getPessoa().setConta(null);				
				dto.conta.setTemas(null);
				
				temasDTO.add(dto);
			}
		}
		
		return temasDTO;
			
	}

	public void salvar(TemaDTO dto) {

		Tema tema = new Tema();
		
		tema.setId(dto.id);
		tema.setNome(dto.nome);
		tema.setConta(dto.conta);
		
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
		dto.conta = tema.getConta();
		dto.conta.getPessoa().setConta(null);
		dto.conta.getTemas().add(null);
		
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
