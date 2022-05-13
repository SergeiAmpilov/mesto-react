import React from 'react';

import custoLogo from '../images/custo-logo.jpg';
import PopupWithForm from './PopupWithForm.js';

function Main(props) {




    return (
        <>
            <main className="content">
                <section className="profile">
                    <div className="profile__content">
                        <div className="profile__avatar-group">
                            <img src={custoLogo} alt="Логотип пользователя" className="profile__avatar" />
                            <button title="Загрузить новый аватар" className="profile__avatar-button" onClick={props.onEditAvatar}></button>
                        </div>
                        <div className="profile__info">
                            <h1 className="profile__title">Жак-Ив Кусто</h1>
                            <p className="profile__subtitle">Исследователь океана</p>
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
        </>
    );
}

export default Main;