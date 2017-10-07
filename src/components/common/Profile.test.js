import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Profile from './Profile';

describe('Pofile', () => {
    it('Should render Profile component acordingly with props passed.', () => {
        var props = {
            info: {
                profile_picture: 'http://img.path',
                username: 'stefam.magnum',
                full_name: 'Stefam Magnum'
            }
        }

        const profile = <div className={'text-center'}>
                            <img src={'http://img.path'} alt={'profile'} className={'img-circle'} />
                            
                            <br />
                            <br />
                            
                            <a href={'https://www.instagram.com/' + 'stefam.magnum' }>@{'stefam.magnum'}</a>
                            
                            <br />
                            
                            <p>{'Stefam Magnum'}</p>
                        </div>

        const wrapper = mount(<Profile {...props} />)
        expect(wrapper.contains(profile)).toBe(true);
    });
});