import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LoginInstagram extends Component {

    componentWillMount() {
        var arr = window.location.href.split('#')
        var token = arr[arr.length - 1].split('=')[1];
        this.props.onSuccess(token);
    }

    render() {

        var url = 'https://api.instagram.com/oauth/authorize/?client_id='+this.props.clientId+'&redirect_uri='+this.props.redirectUri+'&response_type=token&scope=basic+public_content+follower_list+comments+relationships+likes';

        function autheticateUser() {
            window.location.href = url;
        }

        return (
            <div className="text-center">
                <div>
                    <div>
                        <img src="http://imgh.us/instagram-logo_4.jpg" alt="Instagram" />
                    </div>
                    <br />
                    <div>
                        <button onClick={autheticateUser} className="btn btn-primary btn-lg">
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
}

LoginInstagram.propTypes = {
    clientId: PropTypes.string.isRequired,
    redirectUri: PropTypes.string.isRequired,
    onSuccess: PropTypes.func.isRequired
};

export default LoginInstagram;