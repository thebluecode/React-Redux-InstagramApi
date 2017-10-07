import expect from 'expect';
import React from 'react';
import { mount } from 'enzyme';
import DetailsPage from './DetailsPage';

describe('Details Page', () => {
    it('Should render medias passed.', () => {
        const props = {
            medias: [
                { "id": "1605493590251016439_5880799840", "images": { "standard_resolution": { "url": "https://scontent.cdninstagram.com/t51.2885-15/e35/21827020_1821937284728249_8292599855843377152_n.jpg" } } },
                { "id": "1603831705520889869_5880799840", "images": { "standard_resolution": { "url": "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/21688948_155628758354962_2320554307289612288_n.jpg" } } },
                { "id": "1590876301518308804_5880799840", "images": { "standard_resolution": { "url": "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/21107881_299967850471814_2650059181716930560_n.jpg" } } },
                { "id": "1590374903336841543_5880799840", "images": { "standard_resolution": { "url": "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/21149525_172170806691110_8697328823307337728_n.jpg" } } }
            ]
        };

        const wrapper = mount(<DetailsPage {...props} />);
        const images = wrapper.find('img');
        expect(images.length).toBe(4);
    });

    it('Should render nothing if empty media array is passed.', () => {
        const props = {
            medias: []
        };

        const wrapper = mount(<DetailsPage {...props} />);
        const images = wrapper.find('img');
        expect(images.length).toBe(0);
    });

    it('Should render nothing if undefined medias is passed.', () => {
        const props = { medias: undefined };

        const wrapper = mount(<DetailsPage {...props} />);
        const images = wrapper.find('img');
        expect(images.length).toBe(0);
    });
});