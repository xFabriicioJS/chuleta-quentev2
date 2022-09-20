package projeto.chuleta.quente.senac.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;
import projeto.chuleta.quente.senac.enums.DestaqueProduto;

@Entity
@Table (name = "tbprodutos")
public class Produto {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) @Column(name = "id_produto")
	@Getter
	private Long id;

	
	@Getter @Setter @NotNull @Size(max = 100) @Column(name = "descri_produto")
	private String descriProduto;
	
	@Getter @Setter @Size(max = 1000) @Column(name = "resumo_produto")
	private String resumoProduto;

	@Getter @Setter @Column(name = "valor_produto")
	private BigDecimal valorProduto;
	

	
	@Enumerated(EnumType.STRING) @NotNull @Column(name = "destaque_produto")
	@Getter @Setter
	private DestaqueProduto destaqueProduto = DestaqueProduto.NAO;
	
	@ManyToOne
	@Getter @Setter 
	@JoinColumn(name="id_tipo_produto", nullable=false)
	private Tipos tipoProduto; 

	@OneToOne
	@Getter @Setter
	@JoinColumn(name="id_imagem_produto")
	private FileDB imagemProduto;

}
