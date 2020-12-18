import axios from 'axios';
import config from "../config/index";

class ProfileManagementService{
    static async create(email){
        let url = config.AWS_API;
        let params = {email : email};
        return await axios.post(url + 'Profile', params )
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }
}

export default ProfileManagementService;