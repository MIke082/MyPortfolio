import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="aboutSection" style={{ backgroundColor: "#0a0a0a", color: "#f6b41e", padding: "4em", fontFamily: "Arial, sans-serif" }}>
      <div>
      <h1 className="aboutTitle">{t('about_me_title')}</h1>
      <p className="aboutText">
        {t('about_me_description')}
      </p>
      
      <h2 className="whatIDoTitle">{t('whatIDo')}</h2>
      <ul className="whatIDoList">
        <li>{t('react_redux_description')}</li>
        <li>{t('react_native_description')}</li>
        <li>{t('node_js_description')}</li>
        <li>{t('firebase_description')}</li>
        <li>{t('rest_api_description')}</li>
        <li>{t('modern_frontend_description')}</li>
      </ul>
    </div>
    </section>
  );
};

export default About;
