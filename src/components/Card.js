import React from 'react';

import trashButtonImg from '../images/trash-vector.svg';
import { currentUserContext } from '../contexts/CurrentUserContext';

function Card({element, onCardClick, onCardLike}) {

    const currentUser = React.useContext(currentUserContext);
    const handleLikeClick = () => onCardLike(element);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = element.owner._id === currentUser._id;
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = element.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `${isOwn ? '' : 'element__trash_hidden'}`
    ); 
    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `${isLiked ? 'element__like_active' : ''}`; 

    const handleImgClick = () => onCardClick(element)
            
    return (
        <li className="element">
            <img src={element.link} alt={element.name} className="element__image" onClick={handleImgClick}/>
            <div className="element__content">
                <h2 className="element__title">{element.name}</h2>
                <div className="element__like-group">
                    <button className={`element__like ${cardLikeButtonClassName}`}
                            type="button"
                            title="Нравится"
                            onClick={handleLikeClick}>        
                    </button>
                    <p className="element__like-count">{element.likes.length}</p>
                </div>
            </div>
            <img src={trashButtonImg} alt="Удалить карточку" className={`element__trash ${cardDeleteButtonClassName}`}/>            
        </li>
    );
}

export default Card;