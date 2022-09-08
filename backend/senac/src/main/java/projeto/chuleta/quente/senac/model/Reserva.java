package projeto.chuleta.quente.senac.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import projeto.chuleta.quente.senac.enums.StatusReserva;

@Entity
@Table(name = "tbreservas")
@NoArgsConstructor
@AllArgsConstructor
public class Reserva {
    
    @Id
    @Getter @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reserva")
    @NotNull
    private Long id;

    
    @ManyToOne
    @Getter 
    @JoinColumn(name="id_cliente_reserva", nullable=false)
    private Usuario idClienteReserva;

    @NotNull
    @Getter 
    @JsonFormat (pattern = "dd/MM/yyyy HH:mm")
    @Column(name = "dataReservada_reserva")
    private LocalDateTime dataReservada;

    @NotNull
    @Getter 
    @JsonFormat (pattern = "dd/MM/yyyy")
    @Column(name = "dataAbertura_reserva")
    private LocalDate dataAbertura = LocalDate.now();

    @Getter 
    @Column(name = "nomeCliente_reserva")
    @NotNull
    private String nomeClienteReserva;

    @Getter @Setter
    @Column(name = "status_reserva")
    private StatusReserva statusReserva = StatusReserva.EM_ANALISE;




}
