import axios from "axios";

const BASE_URL = "http://localhost:8080/fields";
class FieldService{

    getField(){
        return axios.get(BASE_URL);
    }

    addField(field){
        return axios.post(BASE_URL, field)
    }

    deleteField(id){
        return axios.delete(BASE_URL+'/'+id)
    }

    updateField(id,field){
        return axios.put(BASE_URL+'/'+id, field);
    }
    
}

export default new FieldService();