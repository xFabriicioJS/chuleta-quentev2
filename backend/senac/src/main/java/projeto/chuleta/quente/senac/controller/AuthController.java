package projeto.chuleta.quente.senac.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import projeto.chuleta.quente.senac.enums.ERole;
import projeto.chuleta.quente.senac.model.Role;
import projeto.chuleta.quente.senac.model.Usuario;
import projeto.chuleta.quente.senac.payload.request.LoginRequest;
import projeto.chuleta.quente.senac.payload.request.SignupRequest;
import projeto.chuleta.quente.senac.payload.request.response.JwtResponse;
import projeto.chuleta.quente.senac.payload.request.response.MessageResponse;
import projeto.chuleta.quente.senac.repositories.RoleRepository;
import projeto.chuleta.quente.senac.repositories.UsuariosRepository;
import projeto.chuleta.quente.senac.security.jwt.JwtUtils;
import projeto.chuleta.quente.senac.security.services.UserDetailsImpl;

@CrossOrigin( origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
	AuthenticationManager authenticationManager;
	@Autowired
	UsuariosRepository usuariosRepository;
	@Autowired
	RoleRepository roleRepository;
	@Autowired
	PasswordEncoder encoder;
	@Autowired
	JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> autenticarUsuario(@Valid @RequestBody LoginRequest loginRequest){
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(loginRequest.getLoginUsuario(), loginRequest.getSenhaUsuario())
        );

        
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        
        List<String> roles = userDetails.getAuthorities().stream()
        .map(item -> item.getAuthority())
        .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(),roles));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registrarUsuario(@Valid @RequestBody SignupRequest signupRequest){
        //Verificando se o usuário já existe na base de dados, caso exista retornará 401
        if(usuariosRepository.existsByLoginUsuario(signupRequest.getLoginUsuario())){
            return ResponseEntity.badRequest().body(new MessageResponse("Ocorreu um erro, esse usuário já existe na nossa base de dados."));
        }
        
        //Criando novo usuário
        Usuario usuario = new Usuario(signupRequest.getNome(), signupRequest.getCpf(), signupRequest.getLoginUsuario(), encoder.encode(signupRequest.getSenhaUsuario()));
        
        Set<String> strRoles = signupRequest.getRole();
        Set<Role> roles = new HashSet<>();

        if(strRoles == null){
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
            .orElseThrow(()-> new RuntimeException("Erro: esse nível não foi encontrado // Error: this role was not found"));

            roles.add(userRole);
        }else{
            strRoles.forEach(role ->{
                if(role == "admin"){
                    Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                    .orElseThrow(()-> new RuntimeException("Erro: esse nível não foi encontrado // Error: this role was not found"));

                    roles.add(adminRole);
                }
                Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                .orElseThrow(()-> new RuntimeException("Erro: esse nível não foi encontrado // Error: this role was not found"));
                roles.add(userRole);

            });
        }
        
        usuario.setRoles(roles);
            usuariosRepository.save(usuario);
            return ResponseEntity.ok(new MessageResponse("Usuário foi criado com sucesso!"));        
    }

}
