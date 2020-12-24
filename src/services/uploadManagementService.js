import axios from 'axios';
import config from "../config/index";

class UploadManagementService{
    static async upload(signedRequest,file, fileType){
        var options = {
            headers: {
              'content-type': fileType
            }
          };
        return await axios.put(signedRequest, file, options )
          .then(res => {
            return res;
          }).catch(err => {
              throw err;
          })
    }

}

export default UploadManagementService;