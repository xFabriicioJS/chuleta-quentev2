package projeto.chuleta.quente.senac.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import projeto.chuleta.quente.senac.model.Tipos;


@Repository
public interface TiposRepository extends JpaRepository<Tipos, Long>{

}
