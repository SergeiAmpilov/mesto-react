import React from 'react';

import trashButtonImg from '../images/trash-vector.svg';

function Card({element}) {

    return (
        <li className="element">
            <img src={element.link} alt={element.name} className="element__image"/>
            <div className="element__content">
                <h2 className="element__title">{element.name}</h2>
                <div className="element__like-group">
                    <button className="element__like" type="button" title="Нравится"></button>
                    <p className="element__like-count">{element.likes.length}</p>
                </div>
            </div>
            <img src={trashButtonImg} alt="Удалить карточку" className="element__trash"/>            
        </li>
    );
}

export default Card;