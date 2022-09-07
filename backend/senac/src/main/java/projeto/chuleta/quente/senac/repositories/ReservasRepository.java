package projeto.chuleta.quente.senac.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import projeto.chuleta.quente.senac.model.Reserva;

@Repository
public interface ReservasRepository extends JpaRepository<Reserva, Long>{
    
}
