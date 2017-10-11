import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from './Header';
import reactLogo from '../../images/logos/react.svg';
import reduxLogo from '../../images/logos/redux.svg';
import instaLogo from '../../images/logos/instagram.svg';
import '../App.css';

describe('Header', () => {
    it('Should render header', () => {
        const header = <div className="App-header row">
                            <img src={reactLogo} className="App-logo" alt="logo" />
                            <img src={reduxLogo} className="App-logo" alt="logo" />
                            <img src={instaLogo} className="App-logo App-logo-size" alt="logo" />
                        </div>

        const wrapper = mount(<Header />)
        expect(wrapper.contains(header)).toBe(true);
    });
});