import logo from '../logo.svg';
import '../index.css' 

/* import images */

import custoLogo from '../images/custo-logo.jpg';
import trashLogo from '../images/trash-vector.svg';

/* import components */
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <div className="page">      

        <Header />
        <Main />
        <Footer />



        <div className="popup popup_prefix_image images-full">
            <div className="images-full__content">
                <button className="popup__close images-full__close" type="button" title="Закрыть"></button>
                <img
                    src="https://images.unsplash.com/photo-1643560314434-0be8b0487daf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                    alt=""
                    className="images-full__img" />
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
