package projeto.chuleta.quente.senac.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Table(name = "tbTipos")
public class Tipos {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Getter @Setter @NotNull @Size(max = 3)
	private String siglaTipo;
	
	@Getter @Setter @NotNull @Size(max = 15)
	private String rotuloTipo;
	
	
}
