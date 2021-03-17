import axios from 'axios';
import config from "../config/index";

class PaymentManagementService{

    static async create(email, payPal){
        let url = config.AWS_API;
        let data = {
            email : email,
            receiver_email: payPal
        }
       
        return await axios.post(url + 'Payment', data )
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }
}

export default PaymentManagementService;