import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LangContext } from '../context/LangContext';
import { ThemeContext } from '../context/ThemeContext';
import language from '../Lang/lang';
import Lang from './Lang';
import SwitchButton from './SwitchButton';
import '../style/_setting.scss';

const Navbar = () => {
    const { theme } = useContext(ThemeContext)
    const { lang } = useContext(LangContext)
    const themeColor = theme ? 'dark' : 'light'
    const bgColor = theme ? '' : 'bg-white'
    const selectedLang = lang ? language.FR.navbar : language.EN.navbar


    return (
        <nav className="navbar navbar-expand-lg navbar-light p-4 mb-5">
            <div className="container-fluid">
                <div></div>
                <button className={`navbar-toggler ${bgColor}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className='nav-link px-4'><span className={`theme-title-${themeColor}`}>{selectedLang.home}</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/education" className='nav-link px-4'><span className={`theme-title-${themeColor}`}>{selectedLang.education}</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/experience" className='nav-link px-4'><span className={`theme-title-${themeColor}`}>{selectedLang.experience}</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" className='nav-link px-4'><span className={`theme-title-${themeColor}`}>{selectedLang.projects}</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className='nav-link px-4'><span className={`theme-title-${themeColor}`}>{selectedLang.contact}</span></NavLink>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-center">
                        <SwitchButton />
                        <Lang />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;