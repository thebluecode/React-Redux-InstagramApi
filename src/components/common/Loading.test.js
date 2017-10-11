import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Loading from './Loading';
import ReactLoading from 'react-loading';

describe('Loading', () => {
    it('Should render correct parent div style.', () => {
        const wrapper = shallow(<Loading />);
        const div = wrapper.find('div').first();
        const expectedStyle = { 'margin-top': '20%', 'margin-left': '20%' };

        expect(div.props().style).toEqual(expectedStyle);
    });

    it('Should render nested react-loading component.', () => {
        const wrapper = shallow(<Loading />);
        expect(wrapper.contains(<ReactLoading type={'bubbles'} color={'#444'} height='300px' width='300px' />)).toBe(true);
    });
});