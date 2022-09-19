import axios from 'axios';
import AuthHeader  from './auth-header.js'



const URL_API = "http://localhost:8080/api/produtos";



const addProduto = (produto) => {
    return axios.post(URL_API, produto, {headers : AuthHeader()});
}

const listarProdutos = () => {
    return axios.get(URL_API, {headers : AuthHeader()});
}




const ProdutoService = {
addProduto,
listarProdutos
}


export default ProdutoService;
