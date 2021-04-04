import axios from 'axios';
import config from "../config/index";

class NeosAPIManagementService{
    static async create(data, type){
        let url = config.NEOS_BASE_URL;
        var bodyFormData = new FormData();
        if(type === 'sound'){
                url = config.NEOS_BASE_URL + 'fypsoundv1';
                bodyFormData.append('creator', data.creator );
                bodyFormData.append('title', data.title );
                bodyFormData.append('category', data.category );
                bodyFormData.append('content', data.content );
                bodyFormData.append('stores', data.stores );
                bodyFormData.append('audiofile', data.audiofile );
                bodyFormData.append('albumcover', data.albumcover );

        }
        else{
            url = config.NEOS_BASE_URL + 'fypsongv1';
            bodyFormData.append('creator', data.creator );
            bodyFormData.append('title', data.title );
            bodyFormData.append('category', data.category );
            bodyFormData.append('content', data.content );
            bodyFormData.append('stores', data.stores );
            bodyFormData.append('audiofile', data.audiofile );
            bodyFormData.append('albumcover', data.albumcover );

            bodyFormData.append('author', data.author );
            bodyFormData.append('producer', data.producer );
            bodyFormData.append('featured_artist', data.featured_artist );

        }

        let options = {
            headers: {
              "X-ACCESS-KEY": 'dash-15r7jhz3er8q5re-0akdn'
            }
          }
        
        
        
        return await axios.post(url, bodyFormData, options )
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }
}

export default NeosAPIManagementService;