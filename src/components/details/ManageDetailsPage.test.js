import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { ManageDetailsPage } from './ManageDetailsPage';
import * as api from '../../api/InstagramApi';
import * as detailsActions from '../../actions/detailsActions';
import DetailsPage from './DetailsPage';

describe('Manage Details Page', () => {
    beforeEach(() => {
        spyOn(api, 'getAccessToken').and.returnValue = 'anything';
    });

    it('Should call fetchMedias action while mounting.', () => {
        const props = {
            medias: undefined,
            actions: { fetchMedias: jest.fn() },
            match: { params: { lat: '', lng: '' } }
        };

        const wrapper = mount(<ManageDetailsPage {...props} />);
        expect(props.actions.fetchMedias).toHaveBeenCalledTimes(1);
    });

    it('Should render DetailsPage component.', () => {
        const props = {
            medias: undefined,
            actions: { fetchMedias: jest.fn() },
            match: { params: { lat: '', lng: '' } }
        };

        const wrapper = shallow(<ManageDetailsPage {...props} />);
        expect(wrapper.contains(<DetailsPage />)).toBe(true);
    });
});