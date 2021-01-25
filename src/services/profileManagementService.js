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

    static async get(email){
        let url = config.AWS_API;
        return await axios.get(url + 'Profile?email=' + email )
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }

    static async updateProfileImage(imageUrl){
        let url = config.AWS_API;
        let params = {type : 'ProfileImageUpdate' , profileImagePath : imageUrl};
        return await axios.put(url + 'Profile', params )
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }

}

export default ProfileManagementService;