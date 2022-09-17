import axios from 'axios';
import AuthHeader  from './auth-header.js'

const URL_API = "http://localhost:8080/api/upload";

const uploadImage = (image) => {
    return axios.post(URL_API, image, {headers : AuthHeader()});
}




const UploadService = {
uploadImage
}

export default UploadService;
