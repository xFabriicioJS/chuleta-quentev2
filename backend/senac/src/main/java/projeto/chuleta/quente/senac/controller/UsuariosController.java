package projeto.chuleta.quente.senac.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import projeto.chuleta.quente.senac.Exceptions.ResourceNotFoundException;
import projeto.chuleta.quente.senac.model.Usuario;
import projeto.chuleta.quente.senac.repositories.UsuariosRepository;

@RestController
@RequestMapping("/api/usuarios")
public class UsuariosController {
    
    @Autowired
    UsuariosRepository usuariosRepository;


    @GetMapping
    public List<Usuario> listarUsuarios(){
                return usuariosRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Usuario> adicionarUsuario(@Valid @RequestBody Usuario usuario){
        usuariosRepository.save(usuario);

        return ResponseEntity.ok(usuario);

    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> atualizarUsuario(@PathVariable Long id, @Valid @RequestBody Usuario detailsUsuario) {
        Usuario usuarioASerAtualizado = usuariosRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Usuário não encontrado, id do usuário = " + id));

        usuarioASerAtualizado.setLoginUsuario(detailsUsuario.getLoginUsuario());
        usuarioASerAtualizado.setRoles(detailsUsuario.getRoles());

        Usuario usuario = usuariosRepository.save(usuarioASerAtualizado);

        return ResponseEntity.ok(usuario);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarUsuario(@PathVariable Long id ){
        Optional<Usuario> optional = usuariosRepository.findById(id);

        if(optional.isPresent()){
            usuariosRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();

    }

    




}
