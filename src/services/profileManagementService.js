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

    static async updateProfileImage(imageUrl, email){
        let url = config.AWS_API;
        let params = {type : 'ProfileImageUpdate' , profileImagePath : imageUrl, email : email};
        return await axios.put(url + 'Profile', params )
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }

    static async updateProfile(email, name, dateOfBirth, payPal, tikTokUser){
        let url = config.AWS_API;
        let params = {type : 'ProfileUpdate' , name : name, email : email , dateOfBirth : dateOfBirth, payPal : payPal, tikTokUser : tikTokUser};
        return await axios.put(url + 'Profile', params )
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }

}

export default ProfileManagementService;