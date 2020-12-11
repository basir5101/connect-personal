import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenu = () => {
    return (
        <div className = 'header-menu'>
            <div className="row text-center">
                <li className="col-4">
                    <Link to = '/'>MEDICAL</Link>
                </li>
                <li className="col-4">
                    <Link to = '/'>ENGINEERING / PROJECTS / OPERATIONS</Link>
                </li>
                <li className="col-4">
                    <Link to = '/'>CONSULTING</Link>
                </li>
            </div>
        </div>
    );
};

export default HeaderMenu;