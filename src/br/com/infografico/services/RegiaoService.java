package br.com.infografico.services;

import java.util.ArrayList;
import java.util.List;

import br.com.infografico.dto.CidadeDTO;
import br.com.infografico.dto.ContaDTO;
import br.com.infografico.dto.RegiaoDTO;
import br.com.infografico.entidades.Cidade;
import br.com.infografico.entidades.Conta;
import br.com.infografico.entidades.Pessoa;
import br.com.infografico.entidades.Regiao;
import br.com.infografico.repositories.RegiaoRepository;

public class RegiaoService {

	RegiaoRepository regiaoRepository = new RegiaoRepository();
	
	public List<RegiaoDTO> buscaRegioes(){
		
		List<Regiao> regioes = regiaoRepository.buscarTodos();
		List<RegiaoDTO> regioesDTO = new ArrayList<RegiaoDTO>();
		
		if(regioesDTO != null){			
			for (Regiao regiao : regioes) {
				List<CidadeDTO> cidadesDTO = new ArrayList<CidadeDTO>();
				RegiaoDTO dto = new RegiaoDTO();
				dto.id = regiao.getId();
				dto.nome = regiao.getNome();
				//dto.conta = regiao.getConta();
				
				ContaDTO contadto = new ContaDTO();
				dto.conta = contadto;
				
				for (Cidade cidade : regiao.getCidades()) {
					CidadeDTO dtoCidade = new CidadeDTO();
					dtoCidade.id = cidade.getId();
					dtoCidade.nome = cidade.getNome();
					dtoCidade.uf = cidade.getUf();
					cidadesDTO.add(dtoCidade);
				}
				dto.cidades = cidadesDTO;
				regioesDTO.add(dto);
			}
		}
		
		return regioesDTO;	
	}

	public void salvar(RegiaoDTO dto) {

		Regiao regiao = new Regiao();
		
		regiao.setId(dto.id);
		regiao.setNome(dto.nome);
		//regiao.setConta(dto.conta);
		
		Conta conta = new Conta();
		ContaDTO contadto = dto.conta;
		conta.setId(contadto.id);
		conta.setEmail(contadto.email);
		conta.setSenha(contadto.senha);
		conta.setPermissao(contadto.permissao);
		conta.setPessoa(contadto.pessoa);
		regiao.setConta(conta);
		
		List<Cidade> cidades = new ArrayList<Cidade>();	
		for (CidadeDTO key : dto.cidades) {
			Cidade cidade = new Cidade();
			cidade.setId(key.id);
			cidade.setNome(key.nome);
			cidade.setUf(key.uf);
			cidade.setRegiao(regiao);
			cidades.add(cidade);
		}
		regiao.setCidades(cidades);
		
		if(regiao.getId() != 0){
			regiaoRepository.atualizar(regiao);
		}else{
			regiaoRepository.salvar(regiao);
		}
		
	}

	public RegiaoDTO buscarRegiaoPeloId(Long id) {
		
		Regiao regiao = regiaoRepository.findById(id);
		
		RegiaoDTO dto = new RegiaoDTO();
		dto.id = regiao.getId();
		dto.nome = regiao.getNome();
		
		ContaDTO contadto = new ContaDTO();
		
		contadto.id = regiao.getConta().getId();
		contadto.email = regiao.getConta().getEmail();
		contadto.senha = regiao.getConta().getSenha();		
		contadto.pessoa = new Pessoa();
		contadto.pessoa.id = regiao.getConta().getPessoa().getId();
		contadto.pessoa.nome = regiao.getConta().getPessoa().getNome();
		contadto.pessoa.cpf = regiao.getConta().getPessoa().getCpf();
		contadto.permissao = regiao.getConta().getPermissao();
		
		dto.conta = contadto;
		
		List<CidadeDTO> dtos = new ArrayList<CidadeDTO>();
		
		for (Cidade key : regiao.getCidades()) {
			CidadeDTO dtoCidade = new CidadeDTO();
			dtoCidade.id = key.getId();
			dtoCidade.nome = key.getNome();
			dtoCidade.uf = key.getUf();
			//dtoCidade.regiao = dto;
			dtos.add(dtoCidade);
		}
		
		dto.cidades = dtos;
		
		
		return dto;
	
	}

	public void deletar(Long id) {

		try {
			Regiao regiao = regiaoRepository.findById(id);
			regiaoRepository.deletar(regiao);
			
		} catch(Exception e) {
			e.printStackTrace();
		}
		
	}
	
}
