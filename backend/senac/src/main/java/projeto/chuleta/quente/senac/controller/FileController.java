package projeto.chuleta.quente.senac.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import projeto.chuleta.quente.senac.model.FileDB;
import projeto.chuleta.quente.senac.services.FileService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/files")
public class FileController {
    
    @Autowired
    FileService fileService;

    @PostMapping("upload/{idProduto}")
    // @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file, @PathVariable(name = "idProduto", required = true) Long idProduto){
        FileDB arquivo = fileService.save(file, idProduto);

        return ResponseEntity.ok(ServletUriComponentsBuilder.fromCurrentContextPath().path("/downloadFile/").path(arquivo.getId().toString()).toString());

    }

    @PutMapping("upload/{idProduto}")
        public ResponseEntity<String> updateFile(@RequestParam("file") MultipartFile file, @PathVariable(name = "idProduto", required = true) Long idProduto){
            FileDB arquivo = fileService.save(file, idProduto);

            return ResponseEntity.ok(ServletUriComponentsBuilder.fromCurrentContextPath().path("/downloadFile/").path(arquivo.getId().toString()).toString());
        }

    }


