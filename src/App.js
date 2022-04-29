import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body className="page">
        <header className="header">
            <img src="<%=require('./images/header-logo.svg')%>" alt="Логотип Место" className="header__logo">
        </header>
        <main className="content">
            <section className="profile">
                <div className="profile__content">
                    <div className="profile__avatar-group">
                        <img src="<%=require('./images/custo-logo.jpg')%>" alt="Логотип пользователя" className="profile__avatar">
                        <button title="Загрузить новый аватар" className="profile__avatar-button"></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">Жак-Ив Кусто</h1>
                        <p className="profile__subtitle">Исследователь океана</p>
                        <button className="profile__pen" type="button" title="Редактировать"></button>
                    </div>
                </div>
                <button className="profile__add-button" type="button" title="Добавить"></button>
            </section>
            <section>
                <ul className="elements">
                </ul>
            </section>
        </main>
        <footer className="footer">
            <p className="footer__copyright">
                © 2020 Mesto Russia
            </p>
        </footer>
        <div className="popup popup_prefix_title">
            <div className="popup__container">
                <button className="popup__close" type="button" title="Закрыть"></button>
                <h3 className="popup__title">Редактировать профиль</h3>
                <form className="popup__form" name="popup-form-profile" novalidate>
                    <label className="popup__form-group">
                        <input type="text" name="name" placeholder="Имя" className="popup__form-field popup__form-field_field_name" required 
                        minlength="2" maxlength="40" id="name-input">
                        <span className="popup__error-text name-input-error">Сообщение об ошибке</span>
                    </label>
                    <label className="popup__form-group">
                        <input type="text" name="position" placeholder="Должность"
                            className="popup__form-field popup__form-field_field_position" required
                            minlength="2" maxlength="200"
                            id="position-input">
                        <span className="popup__error-text position-input-error">Сообщение об ошибке</span>
                    </label>
                    <button type="submit" className="popup__button-submit">Сохранить</button>
                </form>
            </div>
        </div>
        <div className="popup popup_prefix_card">
            <div className="popup__container">
                <button className="popup__close" type="button" title="Закрыть"></button>
                <h3 className="popup__title">Новое место</h3>
                <form className="popup__form" name="popup-form-card" novalidate>
                    <label for="" className="popup__form-group">
                        <input type="text" name="name" id="place-input" placeholder="Название" className="popup__form-field popup__form-field_field_name"  minlength="2" maxlength="30" required>
                        <span className="popup__error-text place-input-error">Сообщение об ошибке</span>
                    </label>
                    <label for="" className="popup__form-group">
                        <input type="url" name="url" id="url-input" placeholder="Ссылка на картинку" className="popup__form-field popup__form-field_field_url" required>
                        <span className="popup__error-text url-input-error">Сообщение об ошибке</span>
                    </label>
                    <button type="submit" className="popup__button-submit">Создать</button>
                </form>
            </div>
        </div>
        <div className="popup popup_prefix_image images-full">
            <div className="images-full__content">
                <button className="popup__close images-full__close" type="button" title="Закрыть"></button>
                <img
                    src="https://images.unsplash.com/photo-1643560314434-0be8b0487daf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                    alt=""
                    className="images-full__img" >
                <p className="images-full__text">Описание картинки</p>
            </div>
        </div>
        <div className="popup popup_prefix_confirm">
            <div className="popup__container">
                <button className="popup__close" type="button" title="Закрыть"></button>
                <h3 className="popup__title">Вы уверены ?</h3>
                <form className='popup__form'>
                    <button type="submit" className="popup__button-submit">Да</button>
                </form>
            </div>
        </div>
        <div className="popup popup_prefix_avatar">
            <div className="popup__container">
                <button className="popup__close" type="button" title="Закрыть"></button>
                <h3 className="popup__title">Обновить аватар</h3>
                <form className='popup__form'>
                    <label for="" className="popup__form-group">
                        <input type="url" name="url" id="avatar-input" placeholder="Ссылка на картинку" className="popup__form-field popup__form-field_field_url" required>
                        <span className="popup__error-text avatar-input-error">Сообщение об ошибке</span>
                    </label>
                    <button type="submit" className="popup__button-submit">Сохранить</button>
                </form>

            </div>
        </div>
        <template className="item-template">
            <li className="element">
                <img src="<%=require('./images/header-logo.svg')%>" alt="Карачаевск" className="element__image">
                <div className="element__content">
                    <h2 className="element__title">Карачаевск</h2>
                    <div className="element__like-group">
                        <button className="element__like" type="button" title="Нравится"></button>
                        <p className="element__like-count">0</p>
                    </div>
                </div>
                <img src="<%=require('./images/trash-vector.svg')%>" alt="Удалить карточку" class="element__trash">            
            </li>
        </template>
    </body>
  );
}

export default App;
