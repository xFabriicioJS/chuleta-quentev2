package projeto.chuleta.quente.senac.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import projeto.chuleta.quente.senac.enums.ERole;
import projeto.chuleta.quente.senac.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{
	
    Optional<Role> findByName(ERole name);

}
