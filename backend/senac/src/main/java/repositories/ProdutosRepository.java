package repositories;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import projeto.chuleta.quente.senac.model.Produto;

@Repository
public interface ProdutosRepository extends JpaRepository<Produto, Long>{


    
    Page<Produto> findByProdutoDescriProduto(String nomeProduto, Pageable paginacao);


}
