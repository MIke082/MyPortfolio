import React from "react";

import { ImMobile } from 'react-icons/im'; 
import { MdEmail } from 'react-icons/md'; 
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { SiWhatsapp } from 'react-icons/si';
import { BsFacebook } from 'react-icons/bs';

import './ContactMe.css'
import { useTranslation } from "react-i18next";

const ContactMe = () => {
    const { t, i18n } = useTranslation();
    const direction = i18n.language === 'he' ? 'rtl' : 'ltr';

    return (
        <div id="contactSection"  style={{ backgroundColor: "black", color: "#f6b41e", direction: direction }}>

            <div className="contact-info-container" style={{ direction: direction }}>
                <h5>{t('contactInfo')}</h5>
                <div className="contact-info-row">
                    <ImMobile className="contact-info-icon"  />
                    <span style={direction === "rtl" ? { marginRight: '5px' } : {}}>+972522355320</span>
                </div>

                <div className="contact-info-row">
                    <MdEmail className="contact-info-icon" />
                    <a href="mailto:michaelmelezhyk@gmail.com" style={direction === "rtl" ? { marginRight: '5px' } : {}}> michaelmelezhyk@gmail.com</a>
                </div>
                <div className="contact-info-row contact-link">
                    <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEZm1zGShBuogAAAYuj5lBwLrh_zwC98J08t_2s50Kua_IvQ5bG_SRb3fd6j66eBevVzkErEAU_y3sx9C67zV--adab5lQ78V2HPKhnHtyoOJXqahlVpVP22kheVij081xSCZ0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmichael-melezhyk-885b331bb%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app" target="_blank" rel="noopener noreferrer">
                        <TiSocialLinkedinCircular size="32" />
                    </a>
                    <a href="https://wa.me/972522355320" target="_blank" rel="noopener noreferrer">
                        <SiWhatsapp size="24" />
                    </a>

                    <a href="https://www.facebook.com/melezhik/" target="_blank" rel="noopener noreferrer">
                        <BsFacebook size="24" style={{ [direction === 'rtl' ? 'marginRight' : 'marginLeft']: 4 }} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;