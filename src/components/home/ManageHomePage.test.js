import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { ManageHomePage } from './ManageHomePage';

describe('Manage Home Page', () => {
    it('Should render LeftPanel component', () => {
        const props = {
            isAuthorized: false,
            user: {},
            loadingUserProfile: false,
            loadingMap: false
        }

        const wrapper = shallow(<ManageHomePage {...props} />);
        expect(wrapper.children('LeftPanel').length).toBe(1);
    });

    it('Should render RightPanel component', () => {
        const props = {
            isAuthorized: false,
            user: {},
            loadingUserProfile: false,
            loadingMap: true
        }

        const wrapper = shallow(<ManageHomePage {...props} />);
        expect(wrapper.children('RightPanel').length).toBe(1);
    });

    it('Should set RightPanel loadingMap property with loadingMap property received from store.', () => {
        const props = {
            isAuthorized: false,
            user: {},
            loadingUserProfile: false,
            loadingMap: true
        }

        const wrapper = shallow(<ManageHomePage {...props} />);
        expect(wrapper.find('RightPanel').first().props().loadingMap).toBe(props.loadingMap);
    });

    it('Should set LeftPanel userIsAuthorized property with isAuthorized property received from store.', () => {
        const props = {
            isAuthorized: false,
            user: {},
            loadingUserProfile: false,
            loadingMap: true
        }

        const wrapper = shallow(<ManageHomePage {...props} />);
        expect(wrapper.find('LeftPanel').first().props().userIsAuthorized).toBe(props.isAuthorized);
    });

    it('Should set LeftPanel userInfo property with user property received from store.', () => {
        const props = {
            isAuthorized: false,
            user: {},
            loadingUserProfile: false,
            loadingMap: true
        }

        const wrapper = shallow(<ManageHomePage {...props} />);
        expect(wrapper.find('LeftPanel').first().props().userInfo).toBe(props.user);
    });

    it('Should set LeftPanel loadingUserProfile property with loadingUserProfile property received from store.', () => {
        const props = {
            isAuthorized: false,
            user: {},
            loadingUserProfile: false,
            loadingMap: true
        }

        const wrapper = shallow(<ManageHomePage {...props} />);
        expect(wrapper.find('LeftPanel').first().props().loadingUserProfile).toBe(props.loadingUserProfile);
    });
});