package projeto.chuleta.quente.senac.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import projeto.chuleta.quente.senac.message.ResponseMessage;

public class FileUploadExceptionAdvice extends ResponseEntityExceptionHandler{
    

    @ExceptionHandler
    public ResponseEntity<ResponseMessage> handleMaxSizeException(MaxUploadSizeExceededException error){
        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage("O arquivo excedeu o limite de tamanho."));
    }

}