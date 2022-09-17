package projeto.chuleta.quente.senac.services;

import org.springframework.web.multipart.MultipartFile;

import projeto.chuleta.quente.senac.model.FileDB;

public interface FileService {
    
    FileDB save(MultipartFile file, Long idProduto);

}
