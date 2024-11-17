import React from "react";

export default function AddPostPopup({ isOpen, isSuccess, onClose }: { isOpen: boolean, isSuccess: boolean, onClose: () => void }) {

  return (
    <section className={`popup ${isOpen ? `popup_active` : ""}`}>
      <div className="popup__container">
        <div className={`popup__image ${isSuccess ? `popup__image_ok` : `popup__image_bad`}`}></div>
        <h3 className="popup__title">
          {isSuccess ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}
        </h3>
        <button type="button" className="popup__close-button" onClick={onClose}></button>
      </div>
    </section>
  )
}