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

function App() {

    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

    const handleEditAvatarClick = (event) => {
        setIsEditAvatarPopupOpen(true)
    }

    const handleEditProfileClick = (event) => {
        setIsEditProfilePopupOpen(true)
    }

    const handleAddPlaceClick =  (event) => {
        setIsAddPlacePopupOpen(true);
    }

    return (
        <div className="page">      

            <Header />
            <Main 
                onEditProfile = {handleEditProfileClick}
                onAddPlace = {handleAddPlaceClick}
                onEditAvatar = {handleEditAvatarClick}
            />
            <Footer />

            <PopupWithForm
                name="card"
                title="Новое место"
                isOpen={isAddPlacePopupOpen}
            />

            <PopupWithForm
                name="avatar"
                title="Новый аватар"
                isOpen={isEditAvatarPopupOpen}
            />

            <PopupWithForm
                name="title"
                title="Редактировать профиль"
                isOpen={isEditProfilePopupOpen}
            />


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
        </div>
    );
}

export default App;
