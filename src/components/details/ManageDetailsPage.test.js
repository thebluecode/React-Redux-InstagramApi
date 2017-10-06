import expect from 'expect';
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { ManageDetailsPage } from './ManageDetailsPage';
import * as api from '../../api/InstagramApi';
import * as detailsActions from '../../actions/detailsActions';

Enzyme.configure({ adapter: new Adapter() });

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
});