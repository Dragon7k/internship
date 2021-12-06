import axios from "axios";

const BASE_URL = "http://localhost:8080/responses";
class ResponsesService{

    getResponse(){
        return axios.get(BASE_URL);
    }

    
}

export default new ResponsesService();