import axios from 'axios';
import config from "../config/index";

class ContactManagementService{
    static async send(data){
        let url = config.AWS_API;
       
        return await axios.post(url + 'Contact', data )
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }
}

export default ContactManagementService;