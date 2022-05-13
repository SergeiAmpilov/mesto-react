import React from 'react';

function PopupWithForm(props) {

    return (
        
        <div className={`popup popup_prefix_${props.name} ${props.isOpen ? 'popup_visible' : ''}`}>
            <div className="popup__container">
                <button className="popup__close" type="button" title="Закрыть"></button>
                <h3 className="popup__title">{props.title}</h3>
                <form className='popup__form' name={`${props.name}`}>
                    {props.children}
                    <button type="submit" className="popup__button-submit">Да</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;