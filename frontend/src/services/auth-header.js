//Classe responsável por "pegar" o token do usuário logado

export default function AuthHeader(){

    const user = JSON.parse(localStorage.getItem('usuario'));

    if(user && user.token){

        return { Authorization: `Bearer ${user.token}`};

    }else {
        return {};
    }

}