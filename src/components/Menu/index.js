import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className = "Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="chameoandreFlix logo" />
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu; // para poder importar em qualquer local da aplicação