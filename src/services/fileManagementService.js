import axios from 'axios';
import config from "../config/index";

class FileManagementService{
    static async uploadFile(fileName, fileType){
        let url = config.AWS_API;

        return await axios.post(url + 'FileUpload', {
            fileName : fileName,
            fileType : fileType
        })
            .then(res => {
                localStorage.setItem(fileName,res)
                return res;
            }).catch(err => {
                throw err;
            })
        }

    static async downloadFile(fileName){
        let url = config.AWS_API;

        return await axios.post(url + 'FileDownload', {
            filePath : fileName
        })
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
        }

}

export default FileManagementService;