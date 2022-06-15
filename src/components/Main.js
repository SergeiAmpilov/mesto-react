import React from 'react';

import Card from './Card'
import api from '../utils/Api.js'

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);
    const [isEditButtonHovered, setIsEditButtonHovered] = React.useState(false);

    const cardsElements = cards.map( el => <Card element={el} key={el._id} onCardClick={onCardClick}/> )
    

    React.useEffect(() => {
        api.getProfileInfo()
            .then((profileData) => {
                setUserName(profileData.name);
                setUserDescription(profileData.about);
                setUserAvatar(profileData.avatar);
            })
            .catch(err => console.log(`Ошибка.....: ${err}`));

        api.getCards()
            .then((cardList) => {
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
                            src={userAvatar}
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
                        <h1 className="profile__title">{userName}</h1>
                        <p className="profile__subtitle">{userDescription}</p>
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