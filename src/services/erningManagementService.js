import axios from 'axios';
import config from "../config/index";

class EarningManagementService{
    
        static async get(email){
        let url = config.AWS_API;
        return await axios.get(url + 'Earning/' + encodeURIComponent(email) )
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }

}

export default EarningManagementService;