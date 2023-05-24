import React, { useEffect } from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([data, card]) => {
        setUserAvatar(data.avatar);
        setUserName(data.name);
        setUserDescription(data.about);
        setCards(card);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__avatar-edit"
          type="button"
          title="Редактировать аватар"
          onClick={onEditAvatar}
        >
          <div
            style={{
              backgroundImage: `url(${userAvatar})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              borderRadius: '50%',
              width: '120px',
              height: '120px',
              position: `relative`,
              zIndex: `-1`
            }}
          />
        </button>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            type="button"
            className="profile__edit-button"
            title="Редактировать профиль"
            onClick={onEditProfile}
          ></button>
          <p className="profile__text">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          title="Добавить изображение"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="cards" aria-label="фотогалерея">
        <ul className="elements">
          {cards.map((card, id) => (
            <Card
              key={id}
              card={card}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
