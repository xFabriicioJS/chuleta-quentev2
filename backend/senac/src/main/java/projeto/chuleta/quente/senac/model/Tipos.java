package projeto.chuleta.quente.senac.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tbtipos")
public class Tipos {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) @Column(name = "id_tipo")
	private Long id;
	
	@Getter @Setter @NotNull @Size(max = 3) @Column(name = "sigla_tipo")
	private String siglaTipo;
	
	@Getter @Setter @NotNull @Size(max = 15) @Column(name = "rotulo_tipo")
	private String rotuloTipo;
	
	
}
