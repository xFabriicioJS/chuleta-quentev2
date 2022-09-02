package projeto.chuleta.quente.senac.security.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import projeto.chuleta.quente.senac.Exceptions.UsuarioNotFoundException;
import projeto.chuleta.quente.senac.model.Usuario;
import projeto.chuleta.quente.senac.repositories.UsuariosRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{

    @Autowired
    UsuariosRepository usuariosRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuariosRepository.findByLoginUsuario(username)
        .orElseThrow(()-> new UsuarioNotFoundException("O usuário não foi encontrado, usuario = " + username));

        return UserDetailsImpl.build(usuario);
    }

    


}
