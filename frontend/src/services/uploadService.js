import axios from 'axios';
import AuthHeader  from './auth-header.js'

const URL_API = "http://localhost:8080/api/files";

const uploadImage = (image, idProduto) => {
    return axios.post(URL_API + "/upload/" + idProduto, image, {headers : AuthHeader()});
}

const updateImage = (image, idProduto) => {
    return axios.put(URL_API + "/upload/" + idProduto, image, {headers : AuthHeader()});
}




const UploadService = {
uploadImage,
updateImage
}

export default UploadService;
