import React from 'react';
import './Connection.css';
import medical from '../../images/Sock Photos/medical.jpg';
import engineer from '../../images/Sock Photos/engeeneer.jpg';
import consult from '../../images/Sock Photos/consult.jpg';
import { Link } from 'react-router-dom';

const Connection = () => {
    return (
        <div>
        <section className = 'connection py-5'>
            <div className = 'categories'>
                <p className = 'text-center'>Find the right <span><strong>connect</strong>ion</span></p>
                <div className = 'row container m-auto w-100 justify-content-center'>
                        <li className = 'col-md-3'>
                            <input type="text" className = 'form-control' defaultValue = 'Keyword' />
                        </li>
                        <li className = 'col-md-3'>
                            <input type="text" className =  'form-control' defaultValue = 'Industry' />
                        </li>
                        <li className = 'col-md-3'>
                            <input type="text" className = 'form-control' defaultValue = 'Location' />
                        </li>
                        <li className = 'col-md-3'>
                            <input type="submit" className = 'submit-btn' value = 'Search Jobs' />
                        </li>
                </div>
            </div>
        </section>
        
        <div className="row">
            <div className="col-md-4 doctors">
                <div>
                    <img className = 'w-100' src={medical} alt=""/>
                    <div className = 'doctors-details p-4'>
                        <h3>H3 MEDICAL</h3>
                        <p><Link to = '/'>Junior Doctors</Link></p>
                        <p><Link to = '/'>Middle Grade Doctors</Link></p>
                        <p><Link to = '/'>Specialist Doctors</Link></p>
                        <p><Link to = '/'>Medical Directors</Link></p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 engineer">
                    <img className = 'w-100' src={engineer} alt=""/>
                    <div className = 'engineer-details p-4'>
                        <h3>H3 MEDICAL</h3>
                        <p><Link to = '/'>Junior Doctors</Link></p>
                        <p><Link to = '/'>Middle Grade Doctors</Link></p>
                        <p><Link to = '/'>Specialist Doctors</Link></p>
                        <p><Link to = '/'>Medical Directors</Link></p>
                </div>
            </div>

            <div className="col-md-4 consult">
                    <img className = 'w-100' src={consult} alt=""/>
                    <div className = 'consult-details p-4'>
                        <h3>H3 MEDICAL</h3>
                        <p><Link to = '/'>Junior Doctors</Link></p>
                        <p><Link to = '/'>Middle Grade Doctors</Link></p>
                        <p><Link to = '/'>Specialist Doctors</Link></p>
                        <p><Link to = '/'>Medical Directors</Link></p>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default Connection;