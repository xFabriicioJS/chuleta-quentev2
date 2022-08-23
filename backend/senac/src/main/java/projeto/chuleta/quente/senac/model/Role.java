package projeto.chuleta.quente.senac.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import projeto.chuleta.quente.senac.enums.ERole;

@Entity
@Table(name = "tbroles")
@NoArgsConstructor
public class Role {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter @Setter
	private Long id;
	
	@Enumerated(EnumType.STRING)
	@Column
	@Getter @Setter
	private ERole role;
	
	public Role(ERole role) {
		this.role = role;
	}
	
}
