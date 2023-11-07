import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { useTranslation } from 'react-i18next';
import { Events, Link } from 'react-scroll';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('/home');

    console.log(activeLink,'activeLink');

    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const isRtl = i18n.language === 'he';

    const handleNavLinkClick = (path) => {
        setActiveLink(path);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    useEffect(() => {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    return (
        <nav className={`navBar ${isRtl ? 'rtl' : ''}`}>
            <div className="navContent">
                <div className="name"> {t('m.m.')}</div>
                <div>
                    <Link
                        to="homeSection"
                        className={activeLink === 'home' ? 'navLinkActive' : 'navLink'}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => handleNavLinkClick('home')}
                    >
                        {t('home')}
                    </Link>
                    <Link
                        to="aboutSection"
                        className={activeLink === 'about' ? 'navLinkActive' : 'navLink'}
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={100}
                        onClick={() => handleNavLinkClick('about')}
                    >
                        {t('about')}
                    </Link>
                    <Link
                        to="skillsSection"
                        className={activeLink === 'skills' ? 'navLinkActive' : 'navLink'}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => handleNavLinkClick('skills')}
                    >
                        {t('skills')}
                    </Link>
                    <Link
                        to="projectsSection"
                        className={activeLink === 'projects' ? 'navLinkActive' : 'navLink'}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => handleNavLinkClick('projects')}
                    >
                        {t('projects')}
                    </Link>
                    <Link
                        to="contactSection"
                        className={activeLink === 'contact' ? 'navLinkActive' : 'navLink'}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => handleNavLinkClick('contact')}
                    >
                        {t('contact')}
                    </Link>
                </div>
                <div className="flags">
                    <button className="languageButton" onClick={() => changeLanguage('ua')} title="Українська">
                        🇺🇦
                    </button>
                    <button className="languageButton" onClick={() => changeLanguage('he')} title="עִברִית">
                        🇮🇱
                    </button>
                    <button className="languageButton" onClick={() => changeLanguage('ru')} title="Русский">
                        🇷🇺
                    </button>
                    <button className="languageButton" onClick={() => changeLanguage('en')} title="English">
                        🇺🇸
                    </button>
                </div>
            </div>
        </nav>
    );

}
export default NavBar;
