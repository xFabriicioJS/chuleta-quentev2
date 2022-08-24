package projeto.chuleta.quente.senac.payload.request.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


public class JwtResponse {

    @Getter
    @Setter
    private String token;

    @Getter
    @Setter
    private String type = "Bearer";

    @Getter
    @Setter
    private Long idUsuario;

    @Getter
    @Setter
    private String loginUsuario;

    @Getter
    @Setter
    private List<String> roles;


    public JwtResponse(String accessToken, Long id, String loginUsuario, List<String> roles){
        this.token = accessToken;
        this.idUsuario = id;
        this.loginUsuario = loginUsuario;
        this.roles = roles;
    }

}
