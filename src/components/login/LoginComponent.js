import React from 'react';
import PropTypes from 'prop-types';


const LoginComponent = ({onClick}) => {

    return (
        <div className="text-center">
            <div>
                <div>
                    <img src="http://imgh.us/instagram-logo_4.jpg" alt="Instagram" />
                </div>
                <br />
                <div>
                    <button onClick={onClick} className="btn btn-primary btn-lg">
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
    );
}

LoginComponent.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default LoginComponent;