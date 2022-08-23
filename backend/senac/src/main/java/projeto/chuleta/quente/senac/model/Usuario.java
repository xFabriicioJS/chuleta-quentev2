package projeto.chuleta.quente.senac.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "tbusuarios", uniqueConstraints = {
		@UniqueConstraint(columnNames = "loginUsuario")
})
@NoArgsConstructor @AllArgsConstructor
public class Usuario {

	@Id  @Getter @NotNull @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull @Getter @Setter @Size(max = 20)
	private String loginUsuario;
	
	@NotNull @Getter @Size(max = 20)
	private String senha;

	public Usuario(@NotNull Long id, @NotNull String loginUsuario, @NotNull String senha) {
		this.id = id;
		this.loginUsuario = loginUsuario;
		this.senha = senha;
	}
	
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "usuario_roles",
        joinColumns = @JoinColumn(name = "usuario_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<Role>();
	
	
}
