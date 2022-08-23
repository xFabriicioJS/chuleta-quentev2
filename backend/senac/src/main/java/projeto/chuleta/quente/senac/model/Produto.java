package projeto.chuleta.quente.senac.model;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;
import projeto.chuleta.quente.senac.enums.DestaqueProduto;

@Entity
@Table (name = "tbprodutos")
public class Produto {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Getter @Setter @NotNull
	private Long idTipoProduto;
	
	@Getter @Setter @NotNull @Size(max = 100)
	private String descriProduto;
	
	@Getter @Setter @Size(max = 1000)
	private String resumoProduto;

	@Getter @Setter
	private BigDecimal valorProduto;
	
	//@Getter @Setter
	//private String imagemProduto;
	
	@Enumerated(EnumType.STRING) @NotNull
	private DestaqueProduto destaqueProduto = DestaqueProduto.NAO;
	
	
}
