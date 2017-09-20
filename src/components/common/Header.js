import react from 'react';
import reactLogo from '../images/logos/react.svg';
import reduxLogo from '../images/logos/redux.svg';
import instaLogo from '../images/logos/instagram.svg';
import './App.css';

const Header = () => {
    return (
        <div className="App-header row">
            <img src={reactLogo} className="App-logo" alt="logo" />
            <img src={reduxLogo} className="App-logo" alt="logo" />
            <img src={instaLogo} className="App-logo App-logo-size" alt="logo" />
        </div>
    );
}

export default Header;