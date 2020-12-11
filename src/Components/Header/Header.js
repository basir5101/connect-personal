import React from 'react';
import HeaderTop from './HeaderTop';
import './Header.css';
import HeaderMenu from './HeaderMenu';

const Header = () => {
    return (
        <header>
            <HeaderTop />
            <HeaderMenu />
        </header>
    );
};

export default Header;