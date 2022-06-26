import React from 'react';
import PopupWithForm from './PopupWithForm'

function AddPlacePopup({isOpen, onClose}) {

    return (
        <PopupWithForm
            name="card"
            title="Новое место"
            isOpen={isOpen}
            onClose={onClose} >
                <label className="popup__form-group">
                    <input type="text" name="name" id="place-input" placeholder="Название" className="popup__form-field popup__form-field_field_name"  minLength="2" maxLength="30" required />
                    <span className="popup__error-text place-input-error">Сообщение об ошибке</span>
                </label>
                <label className="popup__form-group">
                    <input type="url" name="url" id="url-input" placeholder="Ссылка на картинку" className="popup__form-field popup__form-field_field_url" required />
                    <span className="popup__error-text url-input-error">Сообщение об ошибке</span>
                </label>
        </PopupWithForm>
    );

}

export default AddPlacePopup;