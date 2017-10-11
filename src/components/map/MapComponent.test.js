import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import MapComponent from './MapComponent';

const defaultProperties = {
    activeMarkerPosition: { lat: '1234', lng: '5678' },
    markers: [
        { id: 11, info: {}, position: {} },
        { id: 22, info: {}, position: {} },
        { id: 33, info: {}, position: {} }
    ],
    onMarkerClick: jest.fn(),
    activeProfiles: [
        { id: 11, info: { id: 1111, profile_picture: 'first_picture', username: 'first_username', full_name: 'first_full_name'} },
        { id: 22, info: { id: 2222, profile_picture: 'second_picture', username: 'second_username', full_name: 'second_full_name'} }
    ]
};

describe('Map Component', () => {
    it('Should render Map component', () => {
        const wrapper = shallow(<MapComponent {...defaultProperties} />);
        expect(wrapper.find('Map').length).toBe(1);
    });

    it('Should render InfoWindow component', () => {
        const wrapper = shallow(<MapComponent {...defaultProperties} />);
        expect(wrapper.find('InfoWindow').length).toBe(1);
    });

    it('Should render Profiles component', () => {
        const wrapper = shallow(<MapComponent {...defaultProperties} />);
        expect(wrapper.find('Profiles').length).toBe(1);
    });

    it('Should render 3 Markers', () => {
        const wrapper = shallow(<MapComponent {...defaultProperties} />);
        expect(wrapper.find('Marker').length).toBe(3);
    });
});