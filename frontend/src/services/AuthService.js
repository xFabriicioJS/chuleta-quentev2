import axios from  'axios';


//URL da API Spring
const API_URL = 'http://localhost:8080/api/auth'


//Função para registrar usuário
const register = (nome, cpf, loginUsuario, senhaUsuario) => {
    return axios.post(API_URL + "/signup",{
        nome,
        cpf,
        loginUsuario,
        senhaUsuario,
    });
}

//Função para logar o usuário
const login = (loginUsuario, senhaUsuario) => {
    return axios.post(API_URL + '/signin', {
        loginUsuario,
        senhaUsuario
    }).then((response) => {
        
        if(response.data.token){
            localStorage.setItem("usuario", JSON.stringify(response.data))
        }
        return response.data
    })
}

//Função para fazer o logout do usuário
const logout = () => {
    localStorage.removeItem("usuario");
}

//Função para pegar dados do usuário logado
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("usuario"));
}

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser
};

export default AuthService;