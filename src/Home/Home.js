import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';
import profileImage from '../Images/myPhoto.png';
import Contact from '../Contact/Contact';

const Home = () => {

  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'he';

  return (
    <section id="homeSection" style={{ backgroundColor: "black", color: "#f6b41e" }}>
      <div className={`navBar ${isRtl ? 'rtl homeContent_reverse' : ''}`}>
        <div className="homeContent">
          <div className="homeText">
            <h6>{t('hello')}</h6>
            <div >
              <h1 style={{ color: "white" }}>{t('im')}<span style={{ color: "#f6b41e" }}> {t('michael')}</span> </h1>
            </div>
            <h1>{t('melezhyk')}</h1>
            <h5 style={{ color: "white", width: 300 }}>{t('freelance')}</h5>
            <div className="homeButtons">

              <Contact />

            </div>
          </div>
          <div className={`homeImage ${isRtl ? 'rtl homeImage_reverse' : ''}`}>
            <img src={profileImage} alt="Michael" />
          </div>
</div>
        </div>

    </section>
  );
};

export default Home;
