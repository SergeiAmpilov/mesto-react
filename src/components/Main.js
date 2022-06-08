import React from 'react';

import custoLogo from '../images/custo-logo.jpg';
import PopupWithForm from './PopupWithForm.js';
import api from '../utils/Api.js'

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    React.useEffect(() => {
        api.getProfileInfo()
            .then((profileData) => {

                console.log('profileData',profileData);
                setUserName(profileData.name);
                setUserDescription(profileData.about);
                setUserAvatar(profileData.avatar);

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
                </ul>
            </section>
        </main>
    );
}

export default Main;