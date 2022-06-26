import React from 'react';

import Card from './Card'
import api from '../utils/Api.js'

import { currentUserContext } from '../contexts/CurrentUserContext';


function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

    const [cards, setCards] = React.useState([]);
    const [isEditButtonHovered, setIsEditButtonHovered] = React.useState(false);

    const handleCardLike = (card) => {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        
        // Отправляем запрос в API и получаем обновлённые данные карточки
        if (isLiked) {
            api.unlike(card._id)
                .then( (newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                });
        } else {
            api.like(card._id)
                .then( (newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                });
        }
    }

    const handleCardDelete = (card) => {
        api.deleteCard(card._id)
            .then( () => {
                setCards(
                    cards.slice().filter( (c) => c._id !== card._id )
                )
            })
    }

    const cardsElements = cards.map( el => <Card 
        element={el}
        key={el._id}
        onCardClick={onCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        /> )

    const currentUser = React.useContext(currentUserContext);

       

    React.useEffect(() => {

        api.getCards()
            .then((cardList) => {
                console.log('cardlist');
                console.log(cardList);
                setCards(cardList);
            })
            .catch(err => console.log(`Ошибка.....: ${err}`));

    }, []);


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__content">
                    <div className="profile__avatar-group">
                        <img
                            src={currentUser.avatar}
                            alt="Логотип пользователя"
                            className="profile__avatar"
                            onMouseOver={ () => setIsEditButtonHovered(true)}
                            />
                        <button
                            title="Загрузить новый аватар"
                            className="profile__avatar-button"
                            onClick={onEditAvatar}
                            onMouseOut={ () => setIsEditButtonHovered(false) }
                            style={{
                                visibility: isEditButtonHovered ? 'visible' : 'hidden' 
                            }}
                            ></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">{currentUser.name}</h1>
                        <p className="profile__subtitle">{currentUser.about}</p>
                        <button className="profile__pen" type="button" title="Редактировать" onClick={onEditProfile}></button>
                    </div>
                </div>
                <button className="profile__add-button" type="button" title="Добавить" onClick={onAddPlace}></button>
            </section>
            <section>
                <ul className="elements">
                    { cardsElements }
                </ul>
            </section>
        </main>
    );
}

export default Main;