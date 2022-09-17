package projeto.chuleta.quente.senac.services;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import projeto.chuleta.quente.senac.Exceptions.ResourceNotFoundException;
import projeto.chuleta.quente.senac.model.FileDB;
import projeto.chuleta.quente.senac.model.Produto;
import projeto.chuleta.quente.senac.model.FileDB.FileBuilder;
import projeto.chuleta.quente.senac.repositories.FileDBRepository;
import projeto.chuleta.quente.senac.repositories.ProdutosRepository;



@Service
public class FileServiceImpl implements FileService {

    @Autowired
    FileDBRepository fileDBRepository;
    
    @Autowired
    ProdutosRepository produtosRepository;

    @Override
    public FileDB save(MultipartFile file, Long idProduto) {
        try {
           return uploadFile(file, idProduto);
        } catch (IOException e) {
            e.printStackTrace();
            
        }
        return null;

    }


    //Cria o upload
    private FileDB uploadFile(MultipartFile file, Long id) throws IOException {
        byte[] data = file.getBytes();

        //Nome original
        String fileName = file.getOriginalFilename();
        //Tipo do arquivo
        ValidateFileName(fileName);
        String type = file.getContentType();

        //Pegando o id do produto
        Produto produto = produtosRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("O id desse produto não existe, id: " + id));

        FileDB file2 = fileDBRepository.saveAndFlush(FileBuilder.newBuilder(data).withFileName(fileName).withType(type).withProduto(produto).build());

        produto.setImagemProduto(file2);
        produtosRepository.save(produto);
        return file2;
    }


    private void ValidateFileName(String fileName) throws IOException {
        if(fileName.contains("..")){
            throw new IOException("O nome do arquivo não pode conter ..");
        }
    }
    
}
