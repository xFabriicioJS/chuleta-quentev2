package projeto.chuleta.quente.senac.security.services;

import java.util.Collection;
import java.util.List;
import java.util.Objects;

import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import projeto.chuleta.quente.senac.model.Usuario;

public class UserDetailsImpl implements UserDetails{
    
    private Long idUsuario;
    
    private String loginUsuario;

    @JsonIgnore
    private String senhaUsuario;

    private Collection<? extends GrantedAuthority> authorities;
    
    public UserDetailsImpl(Long idUsuario, String loginUsuario, String senhaUsuario, Collection<? extends GrantedAuthority> authorities){
        this.idUsuario = idUsuario;
        this.loginUsuario = loginUsuario;
        this.senhaUsuario = senhaUsuario;
        this.authorities = authorities;

    }

    public static UserDetailsImpl build(Usuario usuario) {
		List<GrantedAuthority> authorities = usuario.getRoles().stream().map(role -> new SimpleGrantedAuthority(role.getName().name()))
        .collect(Collectors.toList());

		return new UserDetailsImpl(
				usuario.getIdUsuario(), 
				usuario.getLoginUsuario(), 
				usuario.getSenhaUsuario(), 
				authorities);
	}

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public Long getId(){
        return idUsuario;
    }

    @Override
    public String getPassword() {
        return senhaUsuario;
    }

    @Override
    public String getUsername() {
        return loginUsuario;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;

    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		UserDetailsImpl usuario = (UserDetailsImpl) o;
		return Objects.equals(idUsuario, usuario.idUsuario);
	}

}
