package br.com.infografico.services;

import java.util.ArrayList;
import java.util.List;

import br.com.infografico.dto.ContaDTO;
import br.com.infografico.entidades.Conta;
import br.com.infografico.entidades.Pessoa;
import br.com.infografico.repositories.ContaRepository;
import br.com.infografico.repositories.PessoaRepository;
import br.com.infografico.utils.MD5;

public class ContaService {

	private ContaRepository contaRepository = new ContaRepository();
	private PessoaRepository pessoaRepository = new PessoaRepository();
	public boolean salvar(ContaDTO dto) {
		
		//CriptoGrafia
		String senhaCriptografada = MD5.criptografar(dto.senha);
		
		try {
			Conta conta = null;
			
			if (dto.id != null) {
				conta = contaRepository.findById(dto.id);
				conta.setId(dto.id);
			} else {
				conta = new Conta();
			}
			conta.setEmail(dto.email);
			conta.setSenha(senhaCriptografada);
			conta.setPermissao(dto.permissao);
			
			Pessoa pessoa = null;
			
			if(dto.pessoa.id != null){
				pessoa = pessoaRepository.findById(dto.pessoa.id);
			}else{			
				pessoa = new Pessoa();
			} 
			
			pessoa.setNome(dto.pessoa.nome);
			pessoa.setCpf(dto.pessoa.cpf);
			pessoa.setConta(conta);
			conta.setPessoa(pessoa);
			
			if(conta.getId() != 0){				
				contaRepository.atualizar(conta);
			}else{
				contaRepository.salvar(conta);
			}
			return true;

		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

	}

	public List<ContaDTO> buscarTodos() {
		List<Conta> contas = contaRepository.buscarTodos();
		List<ContaDTO> dtos = new ArrayList<ContaDTO>();
		for (Conta conta : contas) {
			ContaDTO dto = new ContaDTO();
			dto.email = conta.getEmail();
			dto.id = conta.getId();
			dto.senha = conta.getSenha();
			Pessoa pessoa = new Pessoa();
			pessoa.id = conta.getPessoa().getId();
			pessoa.nome = conta.getPessoa().getNome();
			pessoa.cpf = conta.getPessoa().getCpf();
			dto.pessoa = pessoa;
			dto.permissao = conta.getPermissao();
			dtos.add(dto);
		}
		return dtos;
	}
	
	public void deletar(Long id){
		try {
			Conta conta = contaRepository.findById(id);
			contaRepository.deletar(conta);
		} catch(Exception e) {
			e.printStackTrace();
		}
	}

	public ContaDTO buscaPeloId(Long id) {

		Conta conta = contaRepository.findById(id);
		
		ContaDTO dto = new ContaDTO();
		dto.id = conta.getId();
		dto.email = conta.getEmail();
		dto.permissao = conta.getPermissao();
			Pessoa pessoa = new Pessoa();
			pessoa.id = conta.getPessoa().getId();
			pessoa.nome = conta.getPessoa().getNome();
			pessoa.cpf = conta.getPessoa().getCpf();
		dto.pessoa = pessoa;
		//dto.senha = conta.getSenha();
		return dto;
	}
}
