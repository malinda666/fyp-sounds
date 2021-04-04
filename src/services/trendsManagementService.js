import axios from 'axios';
import config from "../config/index";

class TrendsManagementService{
    
        static async get(email, month, year){
        let url = config.AWS_API;
        return await axios.get(url + 'Trend/' + encodeURIComponent(email)+ '/' + month + '/' + year)
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }

}

export default TrendsManagementService;