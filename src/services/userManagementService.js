import axios from 'axios';
import config from "../config/index";

class UserManagementService{

    static async signUp(username, password){
        let url = config.AWS_API;
        let auth = {Username : username, Password:password , ClientId: config.CLIENT_ID, type:'SignUp'};
        return await axios.post(url + 'SignUp', auth )
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }

    static async confirmUser(email, confirmationCode){
        let url = config.AWS_API;
        
        let authObject = { type:'confirmSignUp', 
        ConfirmationCode: confirmationCode,
        Username: email 
        };
        return await axios.post(url + 'SignUp', authObject )
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }

    static async resendConfirmationCode(email){
        let url = config.AWS_API;
        
        let authObject = { type:'resendConfirmationCode',
        Username: email 
        };
        return await axios.post(url + 'SignUp', authObject )
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }

    static async signIn(username, password)
    {
            let url = config.AWS_API;
            let auth = {Username : username, Password:password};
            return await axios.post(url + 'SignIn', auth )
            .then(res => {
                return res;
            }).catch(err => {
                throw err;
            })
    }

    static async validate(email)
    {
            let url = config.AWS_API;
             let auth = { Username: email }
            return await axios.post(url + 'ValidateUser', auth )
            .then(res => {
                return res;
            }).catch(err => {
                throw err;
            })
    }

    static async changePassword(auth){
        let url = config.AWS_API;
        return await axios.post(url + 'ForgetPassword', auth )
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }

    static async resetPassword(auth){
        let url = config.AWS_API;
        return await axios.put(url + 'ResetPassword', auth )
            .then(res => {
            return res;
            }).catch(err => {
                throw err;
            })
    }

    static async userPoolData(){
        let url = config.AWS_API;
        return await axios.get(url + 'UserPoolData')
          .then(res => {
            return res;
          }).catch(err => {
              throw err;
          })
      }
}

export default UserManagementService;