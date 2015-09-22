package br.com.infografico.dto;

import java.util.List;

import br.com.infografico.entidades.Indicador;
import br.com.infografico.entidades.Quadro;
import br.com.infografico.entidades.Tema;

public class IndicadorDTO {
	
	public Long id;
	public String nome;
	public Tema tema;
	public List<Quadro> quadros;
	public Indicador indicador;

}