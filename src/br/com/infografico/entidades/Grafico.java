package br.com.infografico.entidades;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Grafico {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private long id;

	@Column(name = "fonte")
	private String fonte;
	
	@Column(name = "titulo")
	private String titulo;
	
	private List<ValorGrafico> valoresGrafico;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getFonte() {
		return fonte;
	}

	public void setFonte(String fonte) {
		this.fonte = fonte;
	}

	public List<ValorGrafico> getValoresGrafico() {
		return valoresGrafico;
	}

	public void setValoresGrafico(List<ValorGrafico> valoresGrafico) {
		this.valoresGrafico = valoresGrafico;
	}

}
