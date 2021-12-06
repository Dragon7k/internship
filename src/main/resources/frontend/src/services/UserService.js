import axios from "axios";

const BASE_URL = "http://localhost:8080/login";
//const BASE_URL1 = "http://localhost:8080/signUp";
class UserService{

    getUserPass(email){
        return axios.get(BASE_URL+'/'+email);
    }

    addUser(user){
        return axios.post(BASE_URL, user);
    }
}

export default new UserService();