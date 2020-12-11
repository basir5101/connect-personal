import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/1x/logo.png';

const HeaderTop = () => {
    return (
        <div className = 'container header-top'>
            <div className="d-flex justify-content-around">
                <div>
                    <img src= {logo} alt=""/>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link>CONNECT PERSONNEL HOME</Link>
                        </li>
                        <li>
                            <Link>TIMESHEET</Link>
                        </li>
                        <li>
                            <Link>JOBS</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;