package projeto.chuleta.quente.senac.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "tbarquivos")
public class FileDB {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    private String name;

    private String type;

    @Lob
    private byte[] data;

    @OneToOne(mappedBy = "imagemProduto")
    private Produto produto;

    

    public FileDB() {
    }
    
    public FileDB(String name, String type, byte[] data, Produto produto) {
        this.name = name;
        this.type = type;
        this.data = data;
        this.produto = produto;
    }







    public String getId() {
        return id;
    }



    public void setId(String id) {
        this.id = id;
    }



    public String getName() {
        return name;
    }



    public void setName(String name) {
        this.name = name;
    }



    public String getType() {
        return type;
    }



    public void setType(String type) {
        this.type = type;
    }



    public byte[] getData() {
        return data;
    }



    public void setData(byte[] data) {
        this.data = data;
    }

    //Builder para o FileDB

    public static class FileBuilder{
        private String filename;
        private byte[] data;
        private String type;
        private Produto produto;

        public FileBuilder(byte[] data) {
            this.data = data;
        }

        public static FileBuilder newBuilder(byte[] data){
            return new FileBuilder(data);
        }

        public FileBuilder withFileName(String fileName){
            this.filename = fileName;
            return this;
        }

        public FileBuilder withType(String type){
            this.type = type;
            return this;
        }

        public FileBuilder withProduto(Produto produto){
            this.produto = produto;
            return this;
        }

        public FileDB build(){
            return new FileDB(filename, type, data, produto);
        }
    }
    

}
