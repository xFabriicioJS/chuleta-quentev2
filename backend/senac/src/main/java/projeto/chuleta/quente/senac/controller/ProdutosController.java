package projeto.chuleta.quente.senac.controller;

import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import projeto.chuleta.quente.senac.Exceptions.ResourceNotFoundException;
import projeto.chuleta.quente.senac.model.Produto;
import projeto.chuleta.quente.senac.repositories.ProdutosRepository;


@RestController
@RequestMapping("/topicos")
public class ProdutosController {


	//Injeção de dependências com o repositorio de produtos
	@Autowired
	ProdutosRepository produtosRepository;
	

	//Método get para retornar uma página. Caso o cliente não forneça nenhum parâmetro na requisição, ele irá retornar uma página padrão com dez elementos ordenados pela descrição do produto.
	@GetMapping
	public Page<Produto> listarTodos(@RequestParam(required = false) String nomeProduto, @PageableDefault(sort = "descriProduto", direction = Direction.ASC, page = 0, size = 10) Pageable paginacao ){

		if(nomeProduto == null){
			
		Page<Produto> produtos = produtosRepository.findAll(paginacao);
		
		return produtos;
		}

		Page<Produto> produtos = produtosRepository.findByDescriProduto(nomeProduto, paginacao);

		return produtos;


	}


	//Método Post, para inserir um produto
	@PostMapping
	@Transactional
	public ResponseEntity<Produto> adicionarProduto(@RequestBody @Valid Produto produto){

		produtosRepository.save(produto);

		return ResponseEntity.ok(produto);

	}

	@GetMapping("/{id}")
	public ResponseEntity<Produto> getProdutoById(@PathVariable Long id){
		Optional<Produto> optional = produtosRepository.findById(id);

		if(optional.isPresent()){
			return ResponseEntity.ok(optional.get());
		}
		return ResponseEntity.notFound().build();
	}


	//Método Delete, o cliete deve fornceer um id no parâmetro da URL. Caso o cliente forneçã um id inválido, ira retornar 404.
	@DeleteMapping("/{id}")
	@Transactional
	public ResponseEntity<Void> deletarProduto(@PathVariable Long id){
		Optional <Produto> optional = produtosRepository.findById(id);

		if(optional.isPresent()){
			produtosRepository.deleteById(id);
			return ResponseEntity.ok().build();
		}

		return ResponseEntity.notFound().build();
	}

	@PutMapping("/{id}")
	public ResponseEntity<Produto> atualizarProduto(@PathVariable Long id,@RequestBody @Valid Produto detailsProduto){
		Produto produtoAserAtualizado = produtosRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Produto não encontrado! produto = "+ id));

		produtoAserAtualizado.setDescriProduto(detailsProduto.getDescriProduto());
		produtoAserAtualizado.setIdTipoProduto(detailsProduto.getIdTipoProduto());
		produtoAserAtualizado.setResumoProduto(detailsProduto.getResumoProduto());
		produtoAserAtualizado.setValorProduto(detailsProduto.getValorProduto());

		Produto novoProduto = produtosRepository.save(produtoAserAtualizado);
		
		return ResponseEntity.ok(novoProduto);
	}
	


}
