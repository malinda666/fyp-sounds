import axios from 'axios';
import config from "../config/index";

class CreativeManagementService{
    static async create(data){
        let url = config.AWS_API;
       
        return await axios.post(url + 'Creative', data )
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }

    static async updateCreativeStatus(status, albumId, upc, isrc, creativeId, email){
        let url = config.AWS_API;
        let params = {type : 'CreativeStatusUpdate' , status : status, albumId : albumId, upc : upc, isrc: isrc, creativeId : creativeId, email : email};
        return await axios.put(url + 'Creative', params )
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }

    static async updateCreative(data, type){
        let url = config.AWS_API;
        data.type  = type;
       
        return await axios.put(url + 'Creative', data )
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }

    static async get(email){
        let url = config.AWS_API;
       
        return await axios.get(url + 'Creative?email=' + email)
         .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }

    static async getById(id){
        let url = config.AWS_API;
       
        return await axios.get(url + 'Creative/' + encodeURIComponent(id))
         .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }
}

export default CreativeManagementService;