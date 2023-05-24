import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={props.link}
        alt={props.name}
        onClick={handleClick}
      />
      <button
        type="button"
        className="card__btn-delete"
        title="Удалить"
      ></button>
      <div className="card__info">
        <h2 className="card__title">{props.name}</h2>
        <div className="card__like-container">
          <button
            type="button"
            className="card__button-like"
            title="Лайкнуть"
          ></button>
          <p className="card__like-count">{props.likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
