package projeto.chuleta.quente.senac.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
        //Verificando se o usu??rio j?? existe na base de dados, caso exista retornar?? 401
        if(usuariosRepository.existsByLoginUsuario(signupRequest.getLoginUsuario())){
            return ResponseEntity.badRequest().body(new MessageResponse("Ocorreu um erro, esse usu??rio j?? existe na nossa base de dados."));
        }
        if(usuariosRepository.existsByCpf(signupRequest.getCpf())){
            return ResponseEntity.badRequest().body(new MessageResponse("Este CPF j?? existe em nossa base de dados."));
        }
        
        
        //Criando novo usu??rio
        Usuario usuario = new Usuario(signupRequest.getNome(), signupRequest.getCpf(), signupRequest.getLoginUsuario(), encoder.encode(signupRequest.getSenhaUsuario()));
        
        Set<String> strRoles = signupRequest.getRole();
        System.out.println("------> LOGANDO ROLE DO USU??RIO <----" + strRoles);
        Set<Role> roles = new HashSet<>();

        if(strRoles == null){
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
            .orElseThrow(()-> new RuntimeException("Erro: esse n??vel n??o foi encontrado // Error: this role was not found"));

            roles.add(userRole);
        }else{
            System.out.println(strRoles);
            strRoles.forEach(role ->{
                            
                if(role.toString().equals("admin")){
                    Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                    .orElseThrow(()-> new RuntimeException("Erro: esse n??vel n??o foi encontrado // Error: this role was not found"));
                    System.out.println("teste");
                    roles.add(adminRole);
                }
                Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                .orElseThrow(()-> new RuntimeException("Erro: esse n??vel n??o foi encontrado // Error: this role was not found"));
                roles.add(userRole);

            });
        }
        
        
        usuario.setRoles(roles);
            usuariosRepository.save(usuario);
            return ResponseEntity.ok(new MessageResponse("Usu??rio foi criado com sucesso! , N??veis do usu??rio criado: " + usuario.getRoles().stream().map(role -> role.getName().toString()).collect(Collectors.joining(", "))));        
    }

}
