import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import * as apiSettings from './InstagramApiSettings';

describe('Instagram Api Settings', () => {
    it('Should return instagram api\'s client id.', () => {
        expect(apiSettings.getClientId()).toBe('bb71d6570d1c48c7af64917c7be7d992');
    });

    it('Should return instagram api\'s redirect uri.', () => {
        expect(apiSettings.getRedirectUri()).toBe('http://localhost:3000/');
    });
});