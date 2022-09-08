package projeto.chuleta.quente.senac.payload.request;

import java.util.Set;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

public class SignupRequest {

    @NotBlank @Getter @Setter
    private String nome;

    @NotBlank @Getter @Setter
    private String cpf;

    @NotBlank @Getter @Setter
    private String loginUsuario;

    @NotBlank @Getter @Setter
    private String senhaUsuario;

    @Getter @Setter
    private Set<String> role;

}
