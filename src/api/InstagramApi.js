
class InstagramApi {  

    static accessToken = '';

    static setAccessToken(token){
        InstagramApi.accessToken = token;
    }
    
    static getAccessToken() {
        return InstagramApi.accessToken;
    }
}




export default InstagramApi;