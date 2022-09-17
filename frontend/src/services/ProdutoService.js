import axios from 'axios';
import AuthHeader  from './auth-header.js'



const URL_API = "http://localhost:8080/api/produtos";



const addProduto = (produto) => {
    return axios.post(URL_API, produto, {headers : AuthHeader()});
}




const ProdutoService = {
addProduto
}


export default ProdutoService;
