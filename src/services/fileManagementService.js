import axios from 'axios';
import config from "../config/index";

class FileManagementService{
    static async uploadProfileImage(fileName, fileType){
        let url = config.AWS_API;

        return await axios.post(url + 'FileUpload/ProfileImage', {
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

    static async uploadCoverImage(fileName, fileType){
            let url = config.AWS_API;
    
            return await axios.post(url + 'FileUpload/CoverImage', {
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

    static async uploadCreative(fileName, fileType){
                let url = config.AWS_API;
        
                return await axios.post(url + 'FileUpload/Creative', {
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

    static async downloadProfileImage(fileName){
        let url = config.AWS_API;

        return await axios.post(url + 'FileDownload/ProfileImage', {
            filePath : fileName
        })
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
        }

        static async downloadCoverImage(fileName){
            let url = config.AWS_API;
    
                return await axios.post(url + 'FileDownload/CoverImage', {
                    filePath : fileName
                })
                    .then(res => {
                    return res;
                    }).catch(err => {
                        throw err;
                    })
            }

            static async downloadCoverThumbnail(fileName){
                let url = config.AWS_API;
        
                return await axios.post(url + 'FileDownload/CoverThumbnail', {
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