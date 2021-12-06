import axios from "axios";

const BASE_URL = "http://localhost:8080/fields";
class FieldService{

    getField(){
        return axios.get(BASE_URL);
    }

    
}

export default new FieldService();