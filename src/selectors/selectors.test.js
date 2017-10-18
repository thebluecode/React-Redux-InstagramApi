import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import * as selectors from './selectors';



describe('Selectors', () => {
    it('Should return medias formated for map markers.', () => {
        const medias = [
            { id: 111, user: { id: 111111, profile_picture: 'http://img.path.1', username: 'stefam.magnum', full_name: 'Stefam Magnum' }, location: { latitude: 1.1, longitude: 2.2 } },
            { id: 222, user: { id: 222222, profile_picture: 'http://img.path.2', username: 'elvis.magnum', full_name: 'Elvis Magnum' }, location: { latitude: 3.3, longitude: 4.4 } },
            { id: 333, user: { id: 333333, profile_picture: 'http://img.path.3', username: 'chris.magno', full_name: 'Cristhofer Magno' }, location: { latitude: 5.5, longitude: 6.6 } }
        ];

        const markers = selectors.mediasFormatedForMapMarkers(medias);
        
        expect(markers[0].id).toEqual(111);
        expect(markers[0].info).toEqual({ id: 111111, profile_picture: 'http://img.path.1', username: 'stefam.magnum', full_name: 'Stefam Magnum' });
        expect(markers[0].position).toEqual({ lat: 1.1, lng: 2.2 });

        expect(markers[1].id).toEqual(222);
        expect(markers[1].info).toEqual({ id: 222222, profile_picture: 'http://img.path.2', username: 'elvis.magnum', full_name: 'Elvis Magnum' });
        expect(markers[1].position).toEqual({ lat: 3.3, lng: 4.4 });

        expect(markers[2].id).toEqual(333);
        expect(markers[2].info).toEqual({ id: 333333, profile_picture: 'http://img.path.3', username: 'chris.magno', full_name: 'Cristhofer Magno' });
        expect(markers[2].position).toEqual({ lat: 5.5, lng: 6.6 });

    });

    it('Should filter medias by user id and position.', () => {
        const medias = [
            { id: 111, user: { id: 111111, profile_picture: 'http://img.path.1', username: 'stefam.magnum', full_name: 'Stefam Magnum' }, location: { latitude: 1.1, longitude: 2.2 } },
            { id: 222, user: { id: 222222, profile_picture: 'http://img.path.2', username: 'elvis.magnum', full_name: 'Elvis Magnum' }, location: { latitude: 3.3, longitude: 4.4 } },
            { id: 333, user: { id: 333333, profile_picture: 'http://img.path.3', username: 'chris.magno', full_name: 'Cristhofer Magno' }, location: { latitude: 5.5, longitude: 6.6 } }
        ];

        const filteredMedias = selectors.filterMedias(medias, { userId: 222222, lat: 3.3, lng: 4.4 });

        expect(filteredMedias.length).toBe(1);
        expect(filteredMedias[0].id).toEqual(222);
        expect(filteredMedias[0].user).toEqual({ id: 222222, profile_picture: 'http://img.path.2', username: 'elvis.magnum', full_name: 'Elvis Magnum' });
        expect(filteredMedias[0].location).toEqual({ latitude: 3.3, longitude: 4.4 });
    });

    it('Should filter markers by position.', () => {
        const markers = [
            { id: 111, info: { id: 111111, profile_picture: 'http://img.path.1', username: 'stefam.magnum', full_name: 'Stefam Magnum' }, position: { lat: 1.1, lng: 2.2 } },
            { id: 222, info: { id: 222222, profile_picture: 'http://img.path.2', username: 'elvis.magnum', full_name: 'Elvis Magnum' }, position: { lat: 3.3, lng: 4.4 } },
            { id: 333, info: { id: 333333, profile_picture: 'http://img.path.3', username: 'chris.magno', full_name: 'Cristhofer Magno' }, position: { lat: 3.3, lng: 4.4 } }
        ];
        
        const filteredMarkers = selectors.filterMarkersByPosition(markers, { lat: 3.3, lng: 4.4 });

        expect(filteredMarkers.length).toBe(2);

        expect(filteredMarkers[0].id).toEqual(222);
        expect(filteredMarkers[0].info).toEqual({ id: 222222, profile_picture: 'http://img.path.2', username: 'elvis.magnum', full_name: 'Elvis Magnum' });
        expect(filteredMarkers[0].position).toEqual({ lat: 3.3, lng: 4.4 });

        expect(filteredMarkers[1].id).toEqual(333);
        expect(filteredMarkers[1].info).toEqual({ id: 333333, profile_picture: 'http://img.path.3', username: 'chris.magno', full_name: 'Cristhofer Magno' });
        expect(filteredMarkers[1].position).toEqual({ lat: 3.3, lng: 4.4 });
    });

    it('Should group markers by user_id/info_id.', () => {
        const markers = [
            { id: 234, info: { id: 111111 }, position: { lat: 1.1, lng: 2.2 } },
            { id: 545, info: { id: 222222 }, position: { lat: 343, lng: 4.4 } },
            { id: 654, info: { id: 222222 }, position: { lat: 3.3, lng: 54 } },
            { id: 734, info: { id: 333333 }, position: { lat: 5.5, lng: 4.4 } },
            { id: 564, info: { id: 333333 }, position: { lat: 52.5, lng: 53.53 } },
            { id: 898, info: { id: 333333 }, position: { lat: 52.5, lng: 53.53 } }
        ];
        
        const groupedMarkers = selectors.groupMarkersByUser(markers);

        expect(groupedMarkers.length).toBe(3);
    });

    it('Should format medias to grouped profiles by active position', () => {
        const medias = [
            { id: 111, user: { id: 111111, profile_picture: 'http://img.path.1', username: 'user_name_1' }, location: { latitude: 1.23, longitude: 4.56 } },
            { id: 222, user: { id: 222222, profile_picture: 'http://img.path.2', username: 'user_name_2' }, location: { latitude: 1.3, longitude: 1.4 } },
            { id: 333, user: { id: 333333, profile_picture: 'http://img.path.3', username: 'user_name_3' }, location: { latitude: 2.5, longitude: 2.6 } },
            { id: 444, user: { id: 444444, profile_picture: 'http://img.path.4', username: 'user_name_4' }, location: { latitude: 1.23, longitude: 4.56 } },
            { id: 555, user: { id: 444444, profile_picture: 'http://img.path.4', username: 'user_name_4' }, location: { latitude: 1.23, longitude: 4.56 } },
            { id: 666, user: { id: 444444, profile_picture: 'http://img.path.4', username: 'user_name_4' }, location: { latitude: 3.5, longitude: 3.6 } },
            { id: 777, user: { id: 111111, profile_picture: 'http://img.path.1', username: 'user_name_1' }, location: { latitude: 4.5, longitude: 4.6 } },
            { id: 888, user: { id: 777777, profile_picture: 'http://img.path.7', username: 'user_name_7' }, location: { latitude: 5.4, longitude: 5.6 } },
            { id: 999, user: { id: 777777, profile_picture: 'http://img.path.7', username: 'user_name_7' }, location: { latitude: 1.23, longitude: 4.56 } },
            { id: 234, user: { id: 777777, profile_picture: 'http://img.path.7', username: 'user_name_7' }, location: { latitude: 1.23, longitude: 4.56 } }
        ];
        
        const formatedMarkers = selectors.formatMediasToGroupedProfilesByActivePosition(medias, { lat: 1.23, lng: 4.56 });

        console.log(formatedMarkers);

        expect(formatedMarkers.length).toBe(3);
        expect(formatedMarkers[0]).toEqual({ id: 111111, info: { id: 111111, profile_picture: 'http://img.path.1', username: 'user_name_1' } });
        expect(formatedMarkers[1]).toEqual({ id: 444444, info: { id: 444444, profile_picture: 'http://img.path.4', username: 'user_name_4' } });
        expect(formatedMarkers[2]).toEqual({ id: 777777, info: { id: 777777, profile_picture: 'http://img.path.7', username: 'user_name_7' } });
    });
});