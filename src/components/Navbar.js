import React from 'react';
import { NavLink } from 'react-router-dom';
import Lang from './Lang';
import Logo from './Logo';
import SwitchButton from './SwitchButton';

const Navbar = () => {
    return (
        <div className='row navbar py-3'>
            <div className="col-2">
                <Logo />
            </div>
            <div className="col-8">
                <ul className='d-flex justify-content-end m-0'>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''}>Education</NavLink>
                    </li>
                    <li>
                        <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>Experience</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="col-auto">
                <SwitchButton />
            </div>
            <div className="col-auto">
                <Lang />
            </div>
        </div>
    );
};

export default Navbar;