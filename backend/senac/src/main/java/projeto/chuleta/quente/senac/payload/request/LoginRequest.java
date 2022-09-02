package projeto.chuleta.quente.senac.payload.request;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

public class LoginRequest {
    @NotBlank
    @Getter
    @Setter
    private String loginUsuario;

    @NotBlank
    @Getter
    @Setter
    private String senhaUsuario;

}
