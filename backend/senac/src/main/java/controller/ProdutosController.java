package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import projeto.chuleta.quente.senac.model.Produto;
import repositories.ProdutosRepository;


@RestController
@RequestMapping("/topicos")
public class ProdutosController {

	@Autowired
	ProdutosRepository produtosRepository;
	
	@GetMapping
	public Page<Produto> listarTodos(@PageableDefault(sort = "descriProduto", direction = Direction.ASC, page = 0, size = 10) Pageable paginacao ){
		Page<Produto> produtos = produtosRepository.findAll(paginacao);
		
		return produtos;
	}
	


}
