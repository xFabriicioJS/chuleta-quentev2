package projeto.chuleta.quente.senac.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import projeto.chuleta.quente.senac.message.ResponseFile;
import projeto.chuleta.quente.senac.message.ResponseMessage;
import projeto.chuleta.quente.senac.model.FileDB;
import projeto.chuleta.quente.senac.repositories.FileDBRepository;

@Controller
@CrossOrigin("http://localhost:3000")
public class FilesController {
    
    @Autowired
    private FileDBRepository fileDBRepository;

    @PostMapping("/upload")
    public ResponseEntity<ResponseMessage> uploadArquivo(@RequestParam("file") MultipartFile file){
        String message = "";
        try{
            //Pegando o nome do arquivo, limpando, instanciando FileDB e salvando no banco
                String fileName = StringUtils.cleanPath(file.getOriginalFilename());
                FileDB fileDB = new FileDB(fileName, file.getContentType(), file.getBytes());
                
                fileDBRepository.save(fileDB);
                message = "O arquivo foi enviado com sucesso";
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));

        }catch (Exception error){
            message = "Falha ao enviar o arquivo " + file.getOriginalFilename();

            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    } 

    @GetMapping("/files")
    public ResponseEntity<List<ResponseFile>> getListFiles(){
        List<ResponseFile> files = fileDBRepository.findAll().stream().map(dbFile -> {
            String fileDownloadUri = ServletUriComponentsBuilder
                .fromCurrentContextPath()
                .path("/files")
                .path(dbFile.getId())
                .toUriString();

                return new ResponseFile(dbFile.getName(), fileDownloadUri, dbFile.getType(), dbFile.getData().length);
        }).collect(Collectors.toList());
    
        return ResponseEntity.status(HttpStatus.OK).body(files);
    } 

    @GetMapping("/files/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable String id){
        FileDB fileDB = fileDBRepository.findById(id).get();

        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDB.getName() + "\"")
            .body(fileDB.getData());
    }

}
