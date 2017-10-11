import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { ManageLoginComponent } from './ManageLoginComponent';
import Login from './LoginComponent';
import * as loginActions from '../../actions/loginActions';
import * as api from '../../api/InstagramApi';
import toastr from 'toastr';

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

describe('Manage Login Component', () => {
    it('Should render Login component', () => {
        const props = {
            isAuthorized: false,
            accessNotAllowd: true,
            actions: {
                grantAccess: jest.fn(),
                requiresUserCurrentPositionSuccess: jest.fn(),
            }
        };

        const wrapper = mount(<ManageLoginComponent {...props} />);
        expect(wrapper.find('LoginComponent').length).toBe(1);
    });

    it('Should call redirectToAuthorizationPage api method when clicking on login button.', () => {
        spyOn(api, 'redirectToAuthorizationPage');

        const props = {
            isAuthorized: false,
            accessNotAllowd: false,
            actions: {
                grantAccess: jest.fn(),
                requiresUserCurrentPositionSuccess: jest.fn(),
            }
        };

        const wrapper = mount(<ManageLoginComponent {...props} />);

        const loginButton = wrapper.find('button').first();
        loginButton.simulate('click');

        expect(api.redirectToAuthorizationPage).toHaveBeenCalledTimes(1);
    });

    it('Should display an error if user is authorized but not allowd to access Instagram api.', () => {
        spyOn(toastr, 'error');

        const props = {
            isAuthorized: true,
            accessNotAllowd: true,
            actions: {
                grantAccess: jest.fn(),
                requiresUserCurrentPositionSuccess: jest.fn(),
            }
        };

        const wrapper = mount(<ManageLoginComponent {...props} />);

        expect(toastr.error).toHaveBeenCalledTimes(1);
    });

    it('Should call setAccessToken api method if user is not authorized yet and url has access token and user is allowed to access Instagram api.', () => {
        spyOn(api, 'urlHasAccessToken').and.returnValue(true);
        spyOn(api, 'setAccessToken');

        const mockGeolocation = {
            getCurrentPosition: jest.fn(),
            watchPosition: jest.fn()
          };
          
        global.navigator.geolocation = mockGeolocation;

        const props = {
            isAuthorized: false,
            accessNotAllowd: false,
            actions: {
                grantAccess: jest.fn(),
                requiresUserCurrentPositionSuccess: jest.fn(),
            }
        };

        const wrapper = mount(<ManageLoginComponent {...props} />);

        expect(api.setAccessToken).toHaveBeenCalledTimes(1);
    });

    it('Should call grantAccess action if user is not authorized yet and url has access token and user is allowed to access Instagram api.', () => {
        spyOn(api, 'urlHasAccessToken').and.returnValue(true);

        const mockGeolocation = {
            getCurrentPosition: jest.fn(),
            watchPosition: jest.fn()
          };
          
        global.navigator.geolocation = mockGeolocation;

        const props = {
            isAuthorized: false,
            accessNotAllowd: false,
            actions: {
                grantAccess: jest.fn(),
                requiresUserCurrentPositionSuccess: jest.fn(),
            }
        };

        const wrapper = mount(<ManageLoginComponent {...props} />);

        expect(props.actions.grantAccess).toHaveBeenCalledTimes(1);
    });

    it('Should requires user current position if user is not authorized yet and url has access token and user is allowed to access Instagram api.', () => {
        spyOn(api, 'urlHasAccessToken').and.returnValue(true);

        const mockGeolocation = {
            getCurrentPosition: jest.fn(),
            watchPosition: jest.fn()
          };
          
        global.navigator.geolocation = mockGeolocation;

        const props = {
            isAuthorized: false,
            accessNotAllowd: false,
            actions: {
                grantAccess: jest.fn(),
                requiresUserCurrentPositionSuccess: jest.fn(),
            }
        };

        const wrapper = mount(<ManageLoginComponent {...props} />);

        expect(global.navigator.geolocation.getCurrentPosition).toHaveBeenCalledTimes(1);
    });
});