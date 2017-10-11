import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import * as api from './InstagramApi';
import * as apiSettings from './InstagramApiSettings';

class LocalStorageMock {
    constructor() {
      this.store = {}
    }
  
    clear() {
      this.store = {}
    }
  
    getItem(key) {
      return this.store[key] || null
    }
  
    setItem(key, value) {
      this.store[key] = value
    }
  
    removeItem(key) {
      delete this.store[key]
    }
  }
  
global.localStorage = new LocalStorageMock


describe('Instagram Api', () => {
    beforeEach(() => {
        spyOn(apiSettings, 'getClientId').and.returnValue = 'MYCLIENTID';
        spyOn(apiSettings, 'getRedirectUri').and.returnValue = 'MYREDIRECTURI';
    });

    it('Should return instagram api authorization request template.', () => {
        expect(api.getAuthorizationUrlTemplate()).toBe('https://api.instagram.com/oauth/authorize/?client_id={0}&redirect_uri={1}&response_type=token&scope=basic+public_content+follower_list+comments+relationships+likes');
    });

    it('Should return authorization request url acordingly with passed parameters.', () => {
        const expectedUrl = 'https://api.instagram.com/oauth/authorize/?client_id=MYCLIENTID&redirect_uri=MYREDIRECTURI&response_type=token&scope=basic+public_content+follower_list+comments+relationships+likes';
        expect(api.getAuthorizationUrl('MYCLIENTID', 'MYREDIRECTURI')).toBe(expectedUrl);
    });

    // it('Should redirect to authorization request page acordingly with client_id and redirect_url settings.', () => {
    //     api.redirectToAuthorizationPage();
    //     expect(global.window.location.href).toBe('https://api.instagram.com/oauth/authorize/?client_id=MYCLIENTID&redirect_uri=MYREDIRECTURI&response_type=token&scope=basic+public_content+follower_list+comments+relationships+likes');
    // });

    it('Should store access token in localStorage.', () => {
        api.setAccessToken('MYTOKEN');
        expect(global.localStorage.getItem('access_token')).toBe('MYTOKEN');
    });

    it('Should retrieve stored access token in localStorage;', () => {
        global.localStorage.setItem('access_token', 'MYNEWTOKEN');
        expect(api.getAccessToken()).toBe('MYNEWTOKEN');
    });
});