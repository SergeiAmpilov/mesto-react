import React from 'react';
import PopupWithForm from './PopupWithForm'


function EditProfilePopup({isOpen, onClose}) {
    return (
        <PopupWithForm
            name="title"
            title="Редактировать профиль"
            isOpen={isOpen}
            onClose={onClose} >
                <label className="popup__form-group">
                    <input type="text" name="name" placeholder="Имя" className="popup__form-field popup__form-field_field_name" required 
                    minLength="2" maxLength="40" id="name-input" />
                    <span className="popup__error-text name-input-error">Сообщение об ошибке</span>
                </label>
                <label className="popup__form-group">
                    <input type="text" name="position" placeholder="Должность"
                        className="popup__form-field popup__form-field_field_position" required
                        minLength="2" maxLength="200"
                        id="position-input" />
                    <span className="popup__error-text position-input-error">Сообщение об ошибке</span>
                </label>
        </PopupWithForm>
    );
}

export default EditProfilePopup;