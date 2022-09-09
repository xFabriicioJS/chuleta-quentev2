package projeto.chuleta.quente.senac.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import projeto.chuleta.quente.senac.Exceptions.ResourceNotFoundException;
import projeto.chuleta.quente.senac.model.Tipos;
import projeto.chuleta.quente.senac.repositories.TiposRepository;

@RestController
@RequestMapping ("/api/tipos")
public class TiposController {
    

    @Autowired
    TiposRepository tiposRepository;


    @GetMapping
    public ResponseEntity<List<Tipos>> listarTipos(){
        List<Tipos> tipos = tiposRepository.findAll();
        return ResponseEntity.ok(tipos);
    }


    @PostMapping
    public ResponseEntity<Tipos> adicionarTipo(@RequestBody @Valid Tipos tipo){
        tiposRepository.save(tipo);

        return ResponseEntity.ok(tipo);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tipos> getTipoById(@PathVariable Long id ){
        Optional<Tipos> tipo = tiposRepository.findById(id);
        
        if(tipo.isPresent()){
            return ResponseEntity.ok(tipo.get());
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Tipos> deletarTipo(@PathVariable Long id){
        Optional<Tipos> tipo = tiposRepository.findById(id);
        if(tipo.isPresent()){
            tiposRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        
        return ResponseEntity.notFound().build();
 
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tipos> atualizarTipo(@PathVariable Long id, @RequestBody Tipos detailsTipo){
        Tipos tipoASerAtualizado = tiposRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Tipo não existe! tipo = " + id));

        tipoASerAtualizado.setRotuloTipo(detailsTipo.getRotuloTipo());
        tipoASerAtualizado.setSiglaTipo(detailsTipo.getSiglaTipo());

        Tipos novoTipo = tiposRepository.save(tipoASerAtualizado);

        return ResponseEntity.ok(novoTipo);

    }

}
