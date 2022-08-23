import axios from "axios";
import { login } from "../../config";


const apiEndPoint = login + 'token';

export function setLogin(user){
    return axios.post(apiEndPoint, {
        username : user.username,
        password : user.password,
    });
}