//Classe para gerenciar as requisições de reservas
import axios from 'axios';
import AuthHeader  from './auth-header.js'

const URL_API = "http://localhost:8080/api/reservas";


const findAllReservas = () => {

    //Requisição para fazer o get de todas as reservas, UTILIZADO POR ADMINS
    return axios.get(URL_API, {headers : AuthHeader()});
}

const findAllReservasByUserId = (id) => {

    //Requisição para fazer o get de todas as reservas de um único usuário, UTILIZADO POR: CLIENTES
    return axios.get(`${URL_API}/usuario_reserva/${id}`, {headers : AuthHeader()});

}

const getReservaById = (id) => {
    //Requisição para fazer o get em uma única reserva UTIILIZADO POR : ADMINS // CLIENTES
    return axios.get(`${URL_API}/${id}`, {headers : AuthHeader()});
}

const addReserva = () => {

    //Requisição para fazer um post de uma única reserva
    return axios.post(URL_API, {headers : AuthHeader()});
}


 const ReservasService = {
        findAllReservas,
        findAllReservasByUserId,
        getReservaById,
        addReserva    
}

export default ReservasService;