package br.com.infografico.dto;

import br.com.infografico.entidades.Pessoa;


public class ContaDTO {
	
	public Long id;
	public String email;
	public String senha;
	public Pessoa pessoa;
	public String permissao;
	public Long getId() {
		return id;
	}
}