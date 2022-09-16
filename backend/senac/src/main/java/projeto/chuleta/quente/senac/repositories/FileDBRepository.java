package projeto.chuleta.quente.senac.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import projeto.chuleta.quente.senac.model.FileDB;

@Repository
public interface FileDBRepository extends JpaRepository<FileDB, String> {

    

    
}
    

