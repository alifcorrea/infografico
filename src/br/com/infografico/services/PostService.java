package br.com.infografico.services;

import java.util.ArrayList;
import java.util.List;

import com.google.gson.JsonElement;

import br.com.infografico.dto.ContaDTO;
import br.com.infografico.entidades.Conta;
import br.com.infografico.entidades.Pessoa;
import br.com.infografico.entidades.Post;
import br.com.infografico.repositories.ContaRepository;
import br.com.infografico.repositories.PessoaRepository;
import br.com.infografico.repositories.PostRepository;
import br.com.infografico.utils.MD5;

public class PostService {

	private PostRepository postRepository = new PostRepository();
	
	public boolean salvar(Post post) {

		postRepository.salvar(post);
		return true;

	}

	public List<Post> buscarTodos() {
		return postRepository.buscarTodos();
	}

}
