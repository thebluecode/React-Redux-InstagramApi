import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { ManageMapComponent } from './ManageMapComponent';
import MapComponent from './MapComponent';

const defaultProperties = {
    activeMarkerPosition: { lat: '1234', lng: '5678' },
    markers: [
        { id: 11, info: {}, position: {} },
        { id: 22, info: {}, position: {} },
        { id: 33, info: {}, position: {} }
    ],
    initialCenter: {},
    showingInfoWindow: false,
    onMarkerClick: jest.fn(),
    activeProfiles: [
        { id: 11, info: { id: 1111, profile_picture: 'first_picture', username: 'first_username', full_name: 'first_full_name'} },
        { id: 22, info: { id: 2222, profile_picture: 'second_picture', username: 'second_username', full_name: 'second_full_name'} }
    ],
    actions: { selectMarker: jest.fn() }
};

describe('Manage Map Component', () => {
    it('Should render Map component', () => {
        const wrapper = shallow(<ManageMapComponent {...defaultProperties} />);
        expect(wrapper.find('MapComponent').length).toBe(1);
    });

    it('Should call selectMarker action.', () => {
        const wrapper = mount(<ManageMapComponent {...defaultProperties} />);

        const marker = wrapper.find('Marker').first();

        const params = {
            propsParam: { info: 'info', position: 'position' },
            markerParam: {},
            eParam: {}
        };

        const expectedParams = {
            activeMarker: params.markerParam,
            showingInfoWindow: true,
            activeMarkerInfo: params.propsParam.info,
            activeMarkerPosition: params.propsParam.position
        };

        marker.props().onClick(params.propsParam, params.markerParam, params.eParam);

        expect(defaultProperties.actions.selectMarker).toHaveBeenCalledWith(expectedParams);
    });
});