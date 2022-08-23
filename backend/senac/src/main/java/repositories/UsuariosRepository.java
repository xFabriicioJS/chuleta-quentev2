package repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import projeto.chuleta.quente.senac.model.Usuario;

public interface UsuariosRepository extends JpaRepository<Long, Usuario>{

}
