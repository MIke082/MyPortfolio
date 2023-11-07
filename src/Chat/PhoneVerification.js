import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PhoneVerification.css'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

import { useTranslation } from "react-i18next";
import OTPInput from "otp-input-react";


const PhoneVerification = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState("+972");
    const [verificationCode, setVerificationCode] = useState('');
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [userId, setUserId] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    console.log(errorMessage, 'errorMessage');
    console.log(userId, 'userId');

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n?.language;

    useEffect(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            size: 'invisible',
        });
    }, []);

    const validatePhoneNumber = () => {
        const phoneNumberRegex = /^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}-\d{4}$/;
        return phoneNumberRegex.test(phoneNumber);
    };

    const onSubmit = e => {
        e.preventDefault();
        setIsLoading(true);

        if (fullName.trim() === '' || phoneNumber.trim() === '') {
            setErrorMessage("Please fill in all fields");
            alert("Please fill in all fields");
            setIsLoading(false);
            return;
        }

        if (!validatePhoneNumber()) {
            const appVerifier = window.recaptchaVerifier;
            firebase
                .auth()
                .signInWithPhoneNumber(phoneNumber, appVerifier)
                .then(confirmationResult => {
                    setConfirmationResult(confirmationResult);
                    console.log("Code has been sent");
                })
                .catch(error => {
                    setErrorMessage(error.message);
                    console.error("SMS not sent", error);
                });
        } else {
            setErrorMessage(t("phone_no_corectly"));
            alert(t("phone_no_corectly"));
        }
        setIsLoading(false);
    };

    const handleVerifyCode = e => {
        e.preventDefault();
        setIsLoading(true);
        confirmationResult
            .confirm(verificationCode)
            .then((result) => {
                const user = result.user;
                setUserId(user.uid);
                localStorage.setItem('userPhone', phoneNumber,);
                localStorage.setItem('userName', fullName);
                navigate('/chat', { state: { phoneNumber, fullName } });
            })
            .catch((error) => {
                setErrorMessage(error.message);
                console.error("Verification failed", error);
            });

        setIsLoading(false);
    };

    return (
        <>
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <div className="container_phoneVerification">
                    <form onSubmit={confirmationResult ? handleVerifyCode : onSubmit} className="form-container">
                        {!isLoading && confirmationResult === null && (
                            <div className="input-group">
                                <div className="title">{t("login_with_phone")}</div>
                                <input
                                    type="text"
                                    placeholder={t("full_name")}
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="input-field"
                                    dir={currentLanguage === "he" ? "rtl" : "ltr"}
                                    required
                                />
                                <div style={{ direction: 'ltr' }}>
                                    <PhoneInput
                                        defaultCountry="il"
                                        value={phoneNumber}
                                        onChange={(phone) => setPhoneNumber(phone)}
                                        inputClassName="phone-input"
                                    />
                                </div>

                                <div className="button-container">
                                    <button className="submit-button" type="submit" id="recaptcha-container">
                                        {t("sendcode")}
                                    </button>
                                </div>
                            </div>
                        )}
                        {confirmationResult && (
                            <>
                                <div className="input-container">
                                <div className="title">{t("enter_your_verification_code")}</div>

                                    <OTPInput
                                        value={verificationCode}
                                        onChange={setVerificationCode}
                                        autoFocus
                                        OTPLength={6}
                                        otpType="number"
                                        
                                    />

                                    <div className="button-container">
                                        <button className="submit-button">
                                            {t("verification_code")}
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            )}
        </>
    );
}

export default PhoneVerification;
