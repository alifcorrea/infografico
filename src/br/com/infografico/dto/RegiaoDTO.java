package br.com.infografico.dto;

import java.util.List;

import br.com.infografico.entidades.Conta;

public class RegiaoDTO {

	public long id;
	public String nome;
	//public Conta conta;
	public ContaDTO conta;
	public List<CidadeDTO> cidades;

}
