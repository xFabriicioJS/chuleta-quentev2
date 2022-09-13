import axios from "axios";
import AuthHeader from "./auth-header";


const URL_API = "http://localhost:8080/api/tipos";


//Requisiçao para adicionar tipo 
const adicionarTipo = (tipo) => {
    return axios.post(URL_API, tipo, {headers: AuthHeader()})
}

//Requisição para listar todos os tipos
const listarTipos = () => {
    return axios.get(URL_API, {headers: AuthHeader()})
}

//Requisição para deletar tipo
const deletarTipo = (id) => {
    return axios.delete(URL_API + "/" + id, {headers: AuthHeader()})
}

//Requisição para atualizar tipo
const atualizarTipo = (id,tipo) => {
    return axios.put(URL_API + "/" + id, tipo, {headers: AuthHeader()})
}

const getTipoById = (id) => {
    return axios.get(URL_API + "/" + id, {headers: AuthHeader()})
}

const TiposService = {
    getTipoById,
    adicionarTipo,
    listarTipos,
    deletarTipo,
    atualizarTipo
}

export default TiposService;