import React from 'react';

import custoLogo from '../images/custo-logo.jpg';
import PopupWithForm from './PopupWithForm.js';
import trashButtonImg from '../images/trash-vector.svg';
import api from '../utils/Api.js'

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);
    

    React.useEffect(() => {
        api.getProfileInfo()
            .then((profileData) => {
                setUserName(profileData.name);
                setUserDescription(profileData.about);
                setUserAvatar(profileData.avatar);
            });

        api.getCards()
            .then((cardList) => {
                console.log(cardList);
                setCards(cardList);
            })
    }, []);


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__content">
                    <div className="profile__avatar-group">
                        <img src={userAvatar} alt="Логотип пользователя" className="profile__avatar" />
                        <button title="Загрузить новый аватар" className="profile__avatar-button" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">{userName}</h1>
                        <p className="profile__subtitle">{userDescription}</p>
                        <button className="profile__pen" type="button" title="Редактировать" onClick={props.onEditProfile}></button>
                    </div>
                </div>
                <button className="profile__add-button" type="button" title="Добавить" onClick={props.onAddPlace}></button>
            </section>
            <section>
                <ul className="elements">
                    {
                        cards.map( (el, i) => (
                            <li className="element" key={el._id}>
                                <img src={el.link} alt={el.name} className="element__image"/>
                                <div className="element__content">
                                    <h2 className="element__title">{el.name}</h2>
                                    <div className="element__like-group">
                                        <button className="element__like" type="button" title="Нравится"></button>
                                        <p className="element__like-count">{el.likes.length}</p>
                                    </div>
                                </div>
                                <img src={trashButtonImg} alt="Удалить карточку" className="element__trash"/>            
                            </li>
                        ))
                    }
                </ul>
            </section>
        </main>
    );
}

export default Main;