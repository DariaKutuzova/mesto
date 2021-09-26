import Card from "./Card.js";
// Объявляем переменные
const buttonChangeProfile = document.querySelector('.profile__edit-button');
const buttonCloseProfile = document.querySelector('.popup__close_type_profile');
const popupProfile = document.querySelector('.popup_type_profile');
const formChangeProfile = document.querySelector('.popup__form_type_prifile');
const nameInput = document.querySelector('.popup__input_value_name');
const jobInput = document.querySelector('.popup__input_value_job');
const pageName = document.querySelector('.profile__name');
const pageJob = document.querySelector('.profile__description');
// const cardsElement = document.querySelector('.elements');
// const nameCard = document.querySelector('.element__description');
// const linkCard = document.querySelector('.element__image');
// const cardTemplate = document.querySelector('#card-template').content;
const buttonAddPlace = document.querySelector('.profile__add-button');
const popupAddPlace = document.querySelector('.popup_type_add-place');
const buttonCloseAddPlace = document.querySelector('.popup__close_type_add');
const imageLinkAddPlace = document.querySelector('.popup__input_value_link');
const descriptionAddPlace = document.querySelector('.popup__input_value_place');
const formAddPlace = document.querySelector('.popup__form_type_add');
// const like = document.querySelector('.element__like');
// const imagePopup = document.querySelector('.popup_type_open-image');
// const buttonCloseImage = document.querySelector('.popup__close_type_image');
// const imageInPopup = document.querySelector('.popup__image');
// const descriptionInPopup = document.querySelector('.popup__image-title');
const bigPicture = document.querySelector('.popup__open-image');
const popupSubmitButton = document.querySelector('.popup__button_type_add');

//Получим массив попапов
// const popupList = Array.from(document.querySelectorAll('.popup'));
//Получим массив контейнеров с попапами
const modal = Array.from(document.querySelectorAll('.popup__container'));



//Массив картинок, подгружаемых на начальную страницу
const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



// class Card {
//   constructor(data) {
//     this._name = data.name;
//     this._link = data.link;
//   }
//   _getTemplate() {
//     // забираем разметку из HTML и клонируем элемент
//     const cardElement = document
//         .querySelector('#card-template')
//         .content
//         .querySelector('.element')
//         .cloneNode(true);
//
//     // вернём DOM-элемент карточки
//     return cardElement;
//   }
//   generateCard() {
//     // Запишем разметку в приватное поле _element.
//     // Так у других элементов появится доступ к ней.
//     this._element = this._getTemplate();
//     this._setEventListeners();
//     this._deleteCard();
//     this._like();
//
//
//     // Добавим данные
//     this._element.querySelector('.element__image').src = this._link;
//     this._element.querySelector('.element__image').alt = this._name;
//     this._element.querySelector('.element__description').textContent = this._name;
//
//     // Вернём элемент наружу
//     return this._element;
//   }
//   //Открытие попапа
//   _handleOpenPopup() {
//     imageInPopup.src = this._link;
//     descriptionInPopup.textContent = this._name;
//     imagePopup.classList.add('popup_opened');
//   }
//  //Закрытие попапа
//   _handleClosePopup() {
//     imageInPopup.src = '';
//     descriptionInPopup.textContent = '';
//     imagePopup.classList.remove('popup_opened');
//   }
//   //Удаление карточки
//   _deleteCard() {
//     this._element
//         .querySelector('.element__trash')
//         .addEventListener('click', (event) => {
//       event.target.closest('.element').remove();
//         });
//   }
//   //Лайк
//   _like() {
//     this._element
//         .querySelector('.element__like')
//         .addEventListener('click', function (evt) {
//     evt.target.classList.toggle('element__like_active');
//   });
//   }
// //Откурытие и закрытие попапа по клику
//   _setEventListeners() {
//     this._element
//         .querySelector('.element__image')
//         .addEventListener('click', () => {
//       this._handleOpenPopup();
//     });
//     buttonCloseImage.addEventListener('click', () => {
//       this._handleClosePopup();
//     });
//
//   }
// }



initialCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(item);
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  // Добавляем в DOM
  document.querySelector('.elements').prepend(cardElement);
});





// //функция удаления карточки
// const removeCard = (event) => {
//   event.target.closest('.element').remove();
// };

//Добавление карточек при загрузке страницы
// const createCard = (cardData) => {
//   const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
//   cardElement.querySelector('.element__image').src = cardData.link;
//   cardElement.querySelector('.element__image').alt = cardData.name;
//   cardElement.querySelector('.element__description').textContent = cardData.name;
//
//   //Вызываем функцию открытия попапа с картинкой
//   cardElement.querySelector('.element__image').addEventListener('click', (event) => {
//     imageInPopup.src = event.target.src;
//     descriptionInPopup.textContent = event.target.closest('.element').querySelector('.element__description').textContent;
//     imageInPopup.alt = event.target.closest('.element').querySelector('.element__description').textContent;
//     openPopup(imagePopup);
//   });
//   //Закрытие попапа с картинкой
//   buttonCloseImage.addEventListener('click', () => {
//     closePopup(imagePopup)
//   });
//   //Вешаем лайк
//   cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
//     cardElement.querySelector('.element__like').classList.toggle('element__like_active');
//   });
//   //Удаляем карточку по корзинке
//   cardElement.querySelector('.element__trash').addEventListener('click', removeCard);
//
//   return cardElement;
// };
//
// //Добавление карточек при загрузке страницы
// const addCard = (cardData) => {
//   const cardElement = createCard(cardData);
//
//   //Добавляем в начало
//   cardsElement.prepend(cardElement);
// };
// const createCard = (...args) => {const card = new Card(...args);
//   console.log('sdfsdfsdfs');
// };



// function createNewCard(data) {
//   const card = new Card(data);
//   card.name = descriptionAddPlace.value;
//   card.link = imageLinkAddPlace.value;
//
//   const cardElement = card.generateCard();
//
//   // Добавляем в DOM
//   document.querySelector('.elements').prepend(cardElement);
//
// }

//Добавление новой карточки
const startAddCard = (event) => {
  event.preventDefault();


  // createNewCard();

  const addCard = (...args) => {
    const card = new Card(...args);
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();

    //Добавляем в начало
    document.querySelector('.elements').prepend(cardElement);
  }

  addCard({
    name: descriptionAddPlace.value,
    link: imageLinkAddPlace.value
  });

  closePopup(popupAddPlace);
  popupSubmitButton.classList.add('popup__button_disabled');
  popupSubmitButton.setAttribute('disabled', true);
  formAddPlace.reset();
}

// //Загружаем карточки на начальную страницу
// initialCards.forEach(addCard);

//Функция открытия поппапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  //Закрытие попапа на esc
document.addEventListener('keydown', keyHandler);
//Закрытие попапа на оверлей
  popup.addEventListener('mousedown', closeOpenedPopup);
}

// Функция подтягивания значений профиля со страницы в форму при открытии
function setValuesProfilePopup() {
  nameInput.value = pageName.textContent;
  jobInput.value = pageJob.textContent;
}

function openProfilePopup(popup) {
  openPopup(popup);
  setValuesProfilePopup();
}
//Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  //Снимаем обработчики
  document.removeEventListener('keydown', keyHandler);
  popup.removeEventListener('mousedown', closeOpenedPopup);
}

// Функция присвоения значений из формы на страницу и закрытие попапа
function submitHandlerProfileForm(evt) {
  evt.preventDefault();
  pageName.textContent = nameInput.value;
  pageJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

//Функция закрытия по esc
function keyHandler(evt) {
  //Если нажата esc
  if (evt.key === 'Escape') {
    //Закрыть попап
    closeOpenedPopup();
  }
}

//Функция закрытия открытого в данный момент попапа
function closeOpenedPopup() {
  const popupActive = document.querySelector('.popup_opened');
      closePopup(popupActive);
}

// Вызываем функцию присвоения по клику на "Сохранить"
formChangeProfile.addEventListener('submit', submitHandlerProfileForm);

// Вызываем функцию открытия попапа профиля по клику
buttonChangeProfile.addEventListener('click', () => {
  openProfilePopup(popupProfile)
});

// Вызываем закрытие попапа профиля по крестику
buttonCloseProfile.addEventListener('click', () => {
  closePopup(popupProfile)
});

// Вызываем закрытие попапа добавления по крестику
buttonCloseAddPlace.addEventListener('click', () => {
  closePopup(popupAddPlace)
});

//Вызываем функцию открытия попапа добавления по клику
buttonAddPlace.addEventListener('click', () => {
  openPopup(popupAddPlace)
});

//Вызываем функцию добавления карточки
formAddPlace.addEventListener('submit', startAddCard);

//Отменить всплытие форм(при нажатии на них, они не закрываются)
modal.forEach((container) => {
  container.addEventListener('mousedown', (evt) => {
    evt.stopPropagation();
  });
});

//Отменить всплытие увеличенных изображений(при нажатии на них, они не закрываются)
bigPicture.addEventListener('mousedown', (evt) => {
    evt.stopPropagation();
  });