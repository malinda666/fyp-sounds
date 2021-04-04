import axios from 'axios';

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