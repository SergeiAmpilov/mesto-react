import React from 'react';

import logo from '../logo.svg';
import '../index.css' 

/* import images */

import custoLogo from '../images/custo-logo.jpg';
import trashLogo from '../images/trash-vector.svg';

/* import components */
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'


function App() {

    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

    const handleEditAvatarClick = (event) => {
        setIsEditAvatarPopupOpen(true)
    }

    const handleEditProfileClick = (event) => {
        setIsEditProfilePopupOpen(true)
    }

    const handleAddPlaceClick =  (event) => {
        setIsAddPlacePopupOpen(true);
    }

    const handleConfirmPopupOpen = () => setIsConfirmPopupOpen(true);
    const handleImagePopupOpen = () => setIsImagePopupOpen(true);

    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsConfirmPopupOpen(false)
        setIsImagePopupOpen(false)

    };

    return (
        <>   
            <Header />
            <Main 
                onEditProfile = {handleEditProfileClick}
                onAddPlace = {handleAddPlaceClick}
                onEditAvatar = {handleEditAvatarClick}
            />
            <Footer />

            <PopupWithForm name="card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <label className="popup__form-group">
                    <input type="text" name="name" id="place-input" placeholder="Название" className="popup__form-field popup__form-field_field_name"  minLength="2" maxLength="30" required />
                    <span className="popup__error-text place-input-error">Сообщение об ошибке</span>
                </label>
                <label className="popup__form-group">
                    <input type="url" name="url" id="url-input" placeholder="Ссылка на картинку" className="popup__form-field popup__form-field_field_url" required />
                    <span className="popup__error-text url-input-error">Сообщение об ошибке</span>
                </label>
            </PopupWithForm>

            <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <label className="popup__form-group">
                    <input type="url" name="url" id="avatar-input" placeholder="Ссылка на картинку" className="popup__form-field popup__form-field_field_url" required />
                    <span className="popup__error-text avatar-input-error">Сообщение об ошибке</span>
                </label>
            </PopupWithForm>

            <PopupWithForm name="title" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
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
            <PopupWithForm name="confirm" title="Вы уверены ?" isOpen={isConfirmPopupOpen} onClose={closeAllPopups} />
            <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} />


            <template className="item-template">
                <li className="element">
                    <img src={custoLogo} alt="Карачаевск" className="element__image" />
                    <div className="element__content">
                        <h2 className="element__title">Карачаевск</h2>
                        <div className="element__like-group">
                            <button className="element__like" type="button" title="Нравится"></button>
                            <p className="element__like-count">0</p>
                        </div>
                    </div>
                    <img src={trashLogo} alt="Удалить карточку" className="element__trash" />            
                </li>
            </template>
        </>
    );
}

export default App;
