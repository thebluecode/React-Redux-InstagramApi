// import axios from 'axios';
import * as settings from './InstagramApiSettings';

class InstagramApi {  

    static getAuthorizationUrlTemplate() {
        return 'https://api.instagram.com/oauth/authorize/?client_id={0}&redirect_uri={1}&response_type=token&scope=basic+public_content+follower_list+comments+relationships+likes';
    }

    static getAuthorizationUrl(clientId, redirectUri) {
        return this.getAuthorizationUrlTemplate()
                .replace('{0}', clientId)
                .replace('{1}', redirectUri);
    }

    static redirectToAuthorizationPage(){
        window.location.href = this.getAuthorizationUrl(settings.getClientId(), settings.getRedirectUri());
    }
}

export default InstagramApi;

// export default {
//     loggedUserUrl: 'https://api.instagram.com/v1/users/self/',
//     locationsUrl: 'https://api.instagram.com/v1/locations/search',
//     recentMediaUrl: 'https://api.instagram.com/v1/locations/{location_id}/media/recent',
//     mediaUrl: 'https://api.instagram.com/v1/media/search'
// };