import axios from 'axios';
import AuthHeader  from './auth-header.js'



const URL_API = "http://localhost:8080/api/produtos";



const addProduto = (produto) => {
    return axios.post(URL_API, produto, {headers : AuthHeader()});
}

const listarProdutos = () => {
    return axios.get(URL_API, {headers : AuthHeader()});
}

//Remove o produto do banco de dados! E não apenas o desativa
const removerProduto = (id) => {
    return axios.delete(URL_API + "/" + id, {headers : AuthHeader()});
}

const buscarProduto = (id) => {
    return axios.get(URL_API + "/" + id, {headers : AuthHeader()});
}

const atualizarProduto = (produto, id) => {
    return axios.put(URL_API + "/" + id, produto, {headers : AuthHeader()});
} 




const ProdutoService = {
addProduto,
listarProdutos,
removerProduto,
buscarProduto,
atualizarProduto
}


export default ProdutoService;
