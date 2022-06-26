import React from 'react';
import PopupWithForm from './PopupWithForm'

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
    
    const [cardName, setCardName] = React.useState('');
    const [cardLink, setCardLink] = React.useState('');

    const handleCardNameChange = (e) => setCardName(e.target.value);
    const handleCardLinkChange = (e) => setCardLink(e.target.value);

    const handleCardAddSubmit = (evt) => {
        evt.preventDefault();
        onAddPlace({
            name: cardName,
            link: cardLink
        });

    }

    return (
        <PopupWithForm
            name="card"
            title="Новое место"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleCardAddSubmit} >
                <label className="popup__form-group">
                    <input type="text"
                        name="name"
                        id="place-input"
                        placeholder="Название"
                        className="popup__form-field popup__form-field_field_name"
                        minLength="2"
                        maxLength="30"
                        value={cardName}
                        onChange={handleCardNameChange}
                        required />
                    <span className="popup__error-text place-input-error">Сообщение об ошибке</span>
                </label>
                <label className="popup__form-group">
                    <input type="url"
                        name="url"
                        id="url-input"
                        placeholder="Ссылка на картинку"
                        className="popup__form-field popup__form-field_field_url"
                        value={cardLink}
                        onChange={handleCardLinkChange}
                        required />
                    <span className="popup__error-text url-input-error">Сообщение об ошибке</span>
                </label>
        </PopupWithForm>
    );

}

export default AddPlacePopup;