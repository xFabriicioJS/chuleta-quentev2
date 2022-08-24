package projeto.chuleta.quente.senac.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import projeto.chuleta.quente.senac.model.Usuario;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuario, Long>{

    Optional<Usuario> findByLoginUsuario(String loginUsuario);

    Boolean existsByLoginUsuario(String loginUsuario);


}
