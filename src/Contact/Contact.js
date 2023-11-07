import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PhoneVerification from "../Chat/PhoneVerification";
import ProfileImage from '../Images/myPhoto.png';

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const storedFullName = localStorage.getItem('userName') || "";
    const storedPhoneNumber = localStorage.getItem('userPhone') || '';
    setFullName(storedFullName);
    setPhoneNumber(storedPhoneNumber);
  }, []);

  useEffect(() => {
    if (showChat && phoneNumber && fullName) {
      navigate('/chat', { state: { phoneNumber, fullName, showChat } });
    }
  }, [showChat, phoneNumber, fullName, navigate]);

  const toggleChat = () => {
    setShowChat(!showChat);
    navigate('/', { state: { phoneNumber, fullName, showChat } });

  };

  return (
    <section  style={{ marginBottom: 200 }}>
      {showChat ? (
        phoneNumber && fullName ? (
          <div style={{ backgroundColor: "black", color: "#f6b41e" }}>
            <button className="homeButton" style={{ color: "black" }} onClick={toggleChat}>
              {t('chatMe')}
            </button>
          </div>
        ) : (
          <div className="chat-modal">
            <div className="profile-container" style={{ justifyContent: "flex-start" }}>

              <img src={ProfileImage} alt="Profile" className="profile-image" />
              <div style={{ display: "block" }}>
                <p className="profile-name">{t("michael")}</p>
                <p className="profile-status">online</p>
              </div>

            </div>

            <PhoneVerification />
          </div>
        )
      ) : (
        null
      )}
      <div>

      </div>
      <div style={{ backgroundColor: "black", color: "#f6b41e" }}>
        <button className="homeButton" style={{ color: "black" }} onClick={toggleChat}>
          {t('chatMe')}
        </button>
      </div>
    </section>
  );
};

export default Contact;
