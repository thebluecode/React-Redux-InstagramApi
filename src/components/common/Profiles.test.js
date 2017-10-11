import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Profiles from './Profiles';
import Profile from './Profile';

describe('Profiles', () => {
    it('Should render 2 Profile components.', () => {
        const props = {
            profiles: [
                { id: 11, info: { id: 1111, profile_picture: 'first_picture', username: 'first_username', full_name: 'first_full_name'} },
                { id: 22, info: { id: 2222, profile_picture: 'second_picture', username: 'second_username', full_name: 'second_full_name'} }
            ],
            position: { lat: '', lng: '' }
        };

        const wrapper = shallow(<Profiles {...props} />);
        expect(wrapper.find('Profile').length).toBe(2);
    });

    it('Should render Profile component properly.', () => {
        const props = {
            profiles: [
                { id: 11, info: { id: 1111, profile_picture: 'first_picture', username: 'first_username', full_name: 'first_full_name'} },
                { id: 22, info: { id: 2222, profile_picture: 'second_picture', username: 'second_username', full_name: 'second_full_name'} }
            ],
            position: { lat: '', lng: '' }
        };

        const wrapper = shallow(<Profiles {...props} />);
        const firstProfile = wrapper.find('Profile').first();

        expect(firstProfile.props().info.profile_picture).toBe('first_picture');
        expect(firstProfile.props().info.username).toBe('first_username');
        expect(firstProfile.props().info.full_name).toBe('first_full_name');
    });

    it('Should render Link component properly.', () => {
        const props = {
            profiles: [
                { id: 11, info: { id: 1111, profile_picture: 'first_picture', username: 'first_username', full_name: 'first_full_name'} },
                { id: 22, info: { id: 2222, profile_picture: 'second_picture', username: 'second_username', full_name: 'second_full_name'} }
            ],
            position: { lat: '1234', lng: '5678' }
        };

        const wrapper = shallow(<Profiles {...props} />);
        const secondLink = wrapper.find('Link').get(1);

        expect(secondLink.props.to).toBe('/details/2222/1234/5678');
    });
});