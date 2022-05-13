import React from 'react';

import custoLogo from '../images/custo-logo.jpg';

function Main() {

    const handleEditAvatarClick = (event) => {
        const popUpElement = document.querySelector('.popup_prefix_avatar');
        popUpElement.classList.add('popup_visible');
    }

    const handleEditProfileClick = (event) => {
        const popUpElement = document.querySelector('.popup_prefix_title');
        popUpElement.classList.add('popup_visible');
    }

    const handleAddPlaceClick =  (event) => {
        const popUpElement = document.querySelector('.popup_prefix_card');
        popUpElement.classList.add('popup_visible');
        
    }


    return (
        <>
            <main className="content">
                <section className="profile">
                    <div className="profile__content">
                        <div className="profile__avatar-group">
                            <img src={custoLogo} alt="Логотип пользователя" className="profile__avatar" />
                            <button title="Загрузить новый аватар" className="profile__avatar-button" onClick={handleEditAvatarClick}></button>
                        </div>
                        <div className="profile__info">
                            <h1 className="profile__title">Жак-Ив Кусто</h1>
                            <p className="profile__subtitle">Исследователь океана</p>
                            <button className="profile__pen" type="button" title="Редактировать" onClick={handleEditProfileClick}></button>
                        </div>
                    </div>
                    <button className="profile__add-button" type="button" title="Добавить" onClick={handleAddPlaceClick}></button>
                </section>
                <section>
                    <ul className="elements">
                    </ul>
                </section>
            </main>
            <div className="popup popup_prefix_title">
                <div className="popup__container">
                    <button className="popup__close" type="button" title="Закрыть"></button>
                    <h3 className="popup__title">Редактировать профиль</h3>
                    <form className="popup__form" name="popup-form-profile" noValidate>
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
                        <button type="submit" className="popup__button-submit">Сохранить</button>
                    </form>
                </div>
            </div>
            <div className="popup popup_prefix_avatar">
                <div className="popup__container">
                    <button className="popup__close" type="button" title="Закрыть"></button>
                    <h3 className="popup__title">Обновить аватар</h3>
                    <form className='popup__form'>
                        <label className="popup__form-group">
                            <input type="url" name="url" id="avatar-input" placeholder="Ссылка на картинку" className="popup__form-field popup__form-field_field_url" required />
                            <span className="popup__error-text avatar-input-error">Сообщение об ошибке</span>
                        </label>
                        <button type="submit" className="popup__button-submit">Сохранить</button>
                    </form>

                </div>
            </div>
            <div className="popup popup_prefix_card">
                <div className="popup__container">
                    <button className="popup__close" type="button" title="Закрыть"></button>
                    <h3 className="popup__title">Новое место</h3>
                    <form className="popup__form" name="popup-form-card" noValidate>
                        <label className="popup__form-group">
                            <input type="text" name="name" id="place-input" placeholder="Название" className="popup__form-field popup__form-field_field_name"  minLength="2" maxLength="30" required />
                            <span className="popup__error-text place-input-error">Сообщение об ошибке</span>
                        </label>
                        <label className="popup__form-group">
                            <input type="url" name="url" id="url-input" placeholder="Ссылка на картинку" className="popup__form-field popup__form-field_field_url" required />
                            <span className="popup__error-text url-input-error">Сообщение об ошибке</span>
                        </label>
                        <button type="submit" className="popup__button-submit">Создать</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Main;