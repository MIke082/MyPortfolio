
import React from 'react';
import './LogOutModalWindow.css'; // Создайте соответствующий CSS файл для стилизации
import { useTranslation } from 'react-i18next';

const LogOutModalWindow = ({ isOpen, onClose, onConfirm }) => {
  const { t,} = useTranslation();

  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{t("confirm")}</h2>
        </div>
        <div className="modal-body">
          <p>{t("doYouWantToLeaveTheChat")}</p>
        </div>
        <div className="modal-footer">
          <button onClick={onConfirm}>{t("yes")}</button>
          <button onClick={onClose}>{t("no")}</button>
        </div>
      </div>
    </div>
  );
};

export default LogOutModalWindow;
