import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import LeftPanel from './LeftPanel';
import ManageLoginComponent from '../login/ManageLoginComponent';
import Profile from '../common/Profile';
import Loading from '../common/Loading';

describe('Left Panel', () => {
    it('Should render ManageLoginComponent component when user is logged off.', () => {
        const props = {
            userIsAuthorized: false,
            userInfo: {},
            loadingUserProfile: false
        }

        const wrapper = shallow(<LeftPanel {...props} />);
        expect(wrapper.contains(<ManageLoginComponent />)).toBe(true);
    });

    it('Should render Loading component when user is authorized and user profile is loading.', () => {
        const props = {
            userIsAuthorized: true,
            userInfo: {},
            loadingUserProfile: true
        }

        const wrapper = shallow(<LeftPanel {...props} />);
        expect(wrapper.contains(<Loading />)).toBe(true);
    });

    it('Should render Profile component when user is authorized and user profile is loaded.', () => {
        const props = {
            userIsAuthorized: true,
            userInfo: {},
            loadingUserProfile: false
        }

        const wrapper = shallow(<LeftPanel {...props} />);
        expect(wrapper.contains(<Profile info={props.userInfo} />)).toBe(true);
    });

    it('Should set Profile info property with userInfo property received as prop.', () => {
        const props = {
            userIsAuthorized: true,
            userInfo: {
                profile_picture: 'http://img.path',
                username: 'stefam.magnum',
                full_name: 'Stefam Magnum'
            },
            loadingUserProfile: false
        }

        const wrapper = shallow(<LeftPanel {...props} />);
        expect(wrapper.find('Profile').first().props().info).toBe(props.userInfo);
    });
});