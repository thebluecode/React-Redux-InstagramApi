import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import RightPanel from './RightPanel';
import ManageMapComponent from '../map/ManageMapComponent';
import Loading from '../common/Loading';

describe('Right Panel', () => {
    it('Should render Loading component when map data is loading.', () => {
        const props = {
            loadingMap: true
        }

        const wrapper = shallow(<RightPanel {...props} />);
        expect(wrapper.contains(<Loading />)).toBe(true);
    });

    it('Should render Loading component when map data is loaded.', () => {
        const props = {
            loadingMap: false
        }

        const wrapper = shallow(<RightPanel {...props} />);
        expect(wrapper.contains(<ManageMapComponent />)).toBe(true);
    });
});