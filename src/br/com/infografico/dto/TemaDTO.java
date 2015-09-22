package br.com.infografico.dto;

import java.util.List;

import br.com.infografico.entidades.Conta;

public class TemaDTO {

	public long id;
	public String nome;
	public Conta conta;
	public List<IndicadorDTO> indicadores;

}
