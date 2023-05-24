import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditPronfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardQuestionPopupOpen, setIsDeleteCardQuestionPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardDeletClick(card) {
    setIsDeleteCardQuestionPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardQuestionPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardDelet={handleCardDeletClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        isOpen={isEditPronfilePopupOpen}
        onClose={closeAllPopups}
        name={'profile'}
        form={'profile'}
        title={'Редактировать профиль'}
        buttonText={'Сохранить'}
      >
        <fieldset className="popup__fieldset">
          <input
            className="popup__input"
            type="text"
            name="name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-error popup__input-error_type_name"></span>
          <input
            className="popup__input"
            type="text"
            name="occupation"
            placeholder="Занятость"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error popup__input-error_type_occupation"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name={'image'}
        form={'card'}
        title={'Новое место'}
        buttonText={'Создать'}
      >
        <fieldset className="popup__fieldset">
          <input
            className="popup__input"
            type="text"
            name="name-image"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__input-error popup__input-error_type_name-image"></span>
          <input
            className="popup__input"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error popup__input-error_type_link"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name={'avatar'}
        form={'avatar'}
        title={'Обновить аватар'}
        buttonText={'Сохранить'}
      >
        <input
          className="popup__input"
          type="url"
          name="url"
          placeholder="Ссылка на аватар"
          required
        />
        <span className="popup__input-error popup__input-error_type_url"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isDeleteCardQuestionPopupOpen}
        onClose={closeAllPopups}
        name={'confirm'}
        form={'confirm'}
        title={'Вы уверены?'}
        buttonText={'Подтвердить'}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
