package projeto.chuleta.quente.senac.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import javax.validation.constraints.NotBlank;

import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "tbusuarios", uniqueConstraints = {
		@UniqueConstraint(columnNames = "login_usuario")
})
@NoArgsConstructor
@AllArgsConstructor 
public class Usuario {

	@Id @Getter @GeneratedValue(strategy = GenerationType.IDENTITY) @Column(name = "id_usuario")
	private Long idUsuario;
	
	@NotBlank @Getter @Setter @Column(name = "login_usuario")
	private String loginUsuario;
	
	@NotBlank @Getter @Setter @Column(name = "nome_usuario") @Size(max = 55)
	private String nome;

	@NotBlank @Getter @Size(max = 255)
	@Column(name = "senha_usuario")
	private String senhaUsuario;

	
    @ManyToMany(fetch = FetchType.LAZY)
	@Getter @Setter
    @JoinTable(
        name = "usuario_roles",
        joinColumns = @JoinColumn(name = "id_usuario"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<Role>();

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "idClienteReserva")
	private List<Reserva> reservas = new ArrayList<Reserva>();


	public Usuario(@NotBlank String loginUsuario, @NotBlank String senhaUsuario) {
		this.loginUsuario = loginUsuario;
		this.senhaUsuario = senhaUsuario;
	}


	

	
	
}
