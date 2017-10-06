import * as settings from './InstagramApiSettings';

export function getAuthorizationUrlTemplate() {
    return 'https://api.instagram.com/oauth/authorize/?client_id={0}&redirect_uri={1}&response_type=token&scope=basic+public_content+follower_list+comments+relationships+likes';
}

export function getAuthorizationUrl(clientId, redirectUri) {
    return getAuthorizationUrlTemplate()
            .replace('{0}', clientId)
            .replace('{1}', redirectUri);
}

export function redirectToAuthorizationPage(){
    window.location.href = getAuthorizationUrl(settings.getClientId(), settings.getRedirectUri());
}

export function setAccessToken(token) {
    localStorage.setItem('access_token', token);
}

export function getAccessToken() {
    return localStorage.getItem('access_token');
}