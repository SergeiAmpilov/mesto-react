import React from 'react';


/* import images */

import custoLogo from '../images/custo-logo.jpg';
import trashLogo from '../images/trash-vector.svg';

/* import components */
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'


import api from '../utils/api.js'
import { currentUserContext } from '../contexts/CurrentUserContext';


function App() {

    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    const handleEditAvatarClick = (event) => {
        setIsEditAvatarPopupOpen(true)
    }

    const handleEditProfileClick = (event) => {
        setIsEditProfilePopupOpen(true)
    }

    const handleAddPlaceClick =  (event) => {
        setIsAddPlacePopupOpen(true);
    }

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setIsImagePopupOpen(true);
    }

    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsConfirmPopupOpen(false)
        setIsImagePopupOpen(false)
    };

    const handleUpdateUser = (user) => {
        api.updateProfileInfo(user)
            .then( (result) => {
                setCurrentUser(result);
                closeAllPopups();
            })
            .catch(err => console.log(`Ошибка.....: ${err}`));
    }

    const handleUpdateAvatar = ({avatar}) => {
        
        api.updateAvatar(avatar)
            .then( (res) => {
                setCurrentUser({
                    ...currentUser,
                    avatar
                })
                closeAllPopups();
            })
            .catch(err => console.log(`Ошибка.....: ${err}`));
    }

    const handleAddPlaceSubmit = (cardData) => {
        api.addCard(cardData)
            .then( (newCard) => {
                setCards([newCard, ...cards]); 
                closeAllPopups();
            })
            .catch(err => console.log(`Ошибка.....: ${err}`));
    };

    React.useEffect(() => {
        api.getProfileInfo()
            .then((profileData) => {
                setCurrentUser(profileData)
            })
            .catch(err => console.log(`Ошибка.....: ${err}`));
        
        api.getCards()
            .then((cardList) => {
                setCards(cardList);
            })
            .catch(err => console.log(`Ошибка.....: ${err}`));
    }, []);

    const handleCardLike = (card) => {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        if (isLiked) {
            api.unlike(card._id)
                .then( (newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                })
                .catch(err => console.log(`Ошибка.....: ${err}`));;
        } else {
            api.like(card._id)
                .then( (newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                })
                .catch(err => console.log(`Ошибка.....: ${err}`));;
        }
    }

    const handleCardDelete = (card) => {
        api.deleteCard(card._id)
            .then( () => {
                setCards(
                    cards.slice().filter( (c) => c._id !== card._id )
                )
            })
            .catch(err => console.log(`Ошибка.....: ${err}`));;
    }

    return (
        <currentUserContext.Provider value={currentUser}>   
            <Header />
            <Main 
                onEditProfile = {handleEditProfileClick}
                onAddPlace = {handleAddPlaceClick}
                onEditAvatar = {handleEditAvatarClick}
                onCardClick = {handleCardClick}
                cards = {cards}
                onCardLike = {handleCardLike}
                onCardDelete = {handleCardDelete}
            />
            <Footer />

            <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                onAddPlace={handleAddPlaceSubmit}
            />
            
            <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar}
            />

            <EditProfilePopup 
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
            />

            <PopupWithForm name="confirm" title="Вы уверены ?" isOpen={isConfirmPopupOpen} onClose={closeAllPopups} />
            <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard}/>

        </currentUserContext.Provider>
    );
}

export default App;
