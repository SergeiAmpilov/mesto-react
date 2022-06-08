import React from 'react';

function ImagePopup(props) {
    return (
        <div className={`popup popup_prefix_image images-full ${props.isOpen ? 'popup_visible' : ''}`}>            
            <div className="images-full__content">
                <button className="popup__close images-full__close" type="button" title="Закрыть" onClick={props.onClose}></button>
                <img
                    src={props.card.link}
                    alt={props.card.name}
                    className="images-full__img" />
                <p className="images-full__text">{props.card.name}</p>
            </div>
        </div>
    );
}


export default ImagePopup;