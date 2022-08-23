package repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import projeto.chuleta.quente.senac.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Long, Role>{
	
}
