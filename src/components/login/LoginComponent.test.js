import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import LoginComponent from './LoginComponent';

describe('Login Component', () => {
    it('Should render Login component acordingly with props passed.', () => {
        var props = {
            onClick: () => Promise.resolve()
        }

        const login =   <div className="text-center">
                            <div>
                                <div>
                                    <img src="http://imgh.us/instagram-logo_4.jpg" alt="Instagram" />
                                </div>
                                <br />
                                <div>
                                    <button onClick={props.onClick} className="btn btn-primary btn-lg">
                                        Entrar com Instragram
                                    </button>
                                </div>
                            </div>
                            <br />
                            <div>
                                <div>
                                    Ainda não possui uma conta? <a href="https://www.instagram.com/"> Cadastre-se</a>
                                </div>
                            </div>
                        </div>

        const wrapper = mount(<LoginComponent {...props} />)
        expect(wrapper.contains(login)).toBe(true);
    });
});