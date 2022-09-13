package projeto.chuleta.quente.senac.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import projeto.chuleta.quente.senac.Exceptions.ResourceNotFoundException;
import projeto.chuleta.quente.senac.model.Reserva;
import projeto.chuleta.quente.senac.repositories.ReservasRepository;

@RestController
@CrossOrigin( origins = "http://localhost:3000")
@RequestMapping("/api/reservas")
public class ReservasController {
    

    @Autowired
    ReservasRepository reservasRepository;

    @GetMapping
    public ResponseEntity<List<Reserva>> listarReservas(){
        List<Reserva> reservas = reservasRepository.findAll();
        
        return ResponseEntity.ok(reservas);
    }

    @PostMapping
    public Reserva adicionarReserva(@RequestBody Reserva reserva ){
        return reservasRepository.save(reserva);

    }

    @PutMapping("/{id}")
    public ResponseEntity<Reserva> atualizarReserva(@PathVariable Long id, @Valid @RequestBody Reserva detailsReserva) {
        Reserva reservaAserAtualizada = reservasRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Essa reserva não foi encontrada, id da reserva = " + id));

        reservaAserAtualizada.setStatusReserva(detailsReserva.getStatusReserva());

        Reserva reserva = reservasRepository.save(reservaAserAtualizada);

        return ResponseEntity.ok(reserva);
    }

    //Listando Reservas por usuário
    @GetMapping ("/usuario_reserva/{id}")
    public ResponseEntity<List<Reserva>> findAllReservasByUsuarioId(@PathVariable Long id){

        List<Reserva> lista = reservasRepository.findAllReservasByidClienteReservaIdUsuario(id);

        return ResponseEntity.ok(lista);
    }

    @GetMapping ("/{id}")
    public ResponseEntity<Reserva> findById(@PathVariable Long id){

        Reserva reserva = reservasRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Essa reserva não existe"));

        return ResponseEntity.ok(reserva);
    }



}
