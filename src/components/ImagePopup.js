import React from 'react';

function ImagePopup(props) {
    return (
        <div className={`popup popup_prefix_image images-full ${props.isOpen ? 'popup_visible' : ''}`}>            
            <div className="images-full__content">
                <button className="popup__close images-full__close" type="button" title="Закрыть" onClick={props.onClose}></button>
                <img
                    src="https://images.unsplash.com/photo-1643560314434-0be8b0487daf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                    alt=""
                    className="images-full__img" />
                <p className="images-full__text">Описание картинки</p>
            </div>
        </div>
    );
}


export default ImagePopup;