// Объявляем переменные
const openPopupButton = document.querySelector('.profile__edit-button');
const closeProfileButton = document.querySelector('.popup__close_type_profile');
const popupProfile = document.querySelector('.popup_type_profile');
const formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_value_name');
let jobInput = document.querySelector('.popup__input_value_job');
let pageName = document.querySelector('.profile__name');
let pageJob = document.querySelector('.profile__description');
const cardsElement = document.querySelector('.elements');
const nameCard = document.querySelector('.element__description');
const linkCard = document.querySelector('.element__image');
const cardTemplate = document.querySelector('#card-template').content;
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup_type_addplace');
const closeAddButton = document.querySelector('.popup__close_type_add');
const addImage = document.querySelector('.popup__input_value_link');
const addDescription = document.querySelector('.popup__input_value_place');
const addForm = document.querySelector('.popup__add-form');
const like = document.querySelector('.element__like');
const imagePopup = document.querySelector('.popup_type_open-image');
const closeImage = document.querySelector('.popup__close_type_image');
const imageInPopup = document.querySelector('.popup__image');
const descriptionInPopup = document.querySelector('.popup__image-title')
const image = document.querySelector('.element__image')


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
//функция удаления карточки
const removeCard = (event) => {
  event.target.closest('.element').remove();
};

//Добавление карточек при загрузке страницы
const addCard = (card) => {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = card.link;
  cardElement.querySelector('.element__image').alt = card.name;
  cardElement.querySelector('.element__description').textContent = card.name;
//Вызываем функцию открытия попапа с картинкой
  cardElement.querySelector('.element__image').addEventListener('click', (event) => {
    imageInPopup.src = event.target.src;
    descriptionInPopup.textContent = event.target.closest('.element').querySelector('.element__description').textContent;
    imageInPopup.alt = event.target.closest('.element').querySelector('.element__description').textContent;
    openPopup(imagePopup);
  });
//Закрытие попапа с картинкой
  closeImage.addEventListener('click', () => {
    closePopup(imagePopup)
  });
//Вешаем лайк
  cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
    cardElement.querySelector('.element__like').classList.toggle('element__like_active');
  });
//Удаляем карточку по корзинке
  cardElement.querySelector('.element__trash').addEventListener('click', removeCard);


//Добавляем в начало
  cardsElement.prepend(cardElement);
};

//Добавление новой карточки
const startAddCard = (event) => {
  event.preventDefault();

  addCard({
    name: addDescription.value,
    link: addImage.value
  });
  closePopup(addPopup);
  addForm.reset();
}

//Загружаем карточки на начальную страницу
initialCards.forEach((card) => {
  addCard(card);
})
//Функция открытия поппапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Функция подтягивания значений профиля со страницы в форму при открытии
function valuePopup() {
  nameInput.value = pageName.textContent;
  jobInput.value = pageJob.textContent;
}

function togglePopup(popup) {
  openPopup(popup);
  valuePopup();
}
//Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Функция присвоения значений из формы на страницу и закрытие попапа
function formSubmitHandler(evt) {
  evt.preventDefault();
  pageName.textContent = nameInput.value;
  pageJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

// Вызываем функцию присвоения по клику на "Сохранить"
formElement.addEventListener('submit', formSubmitHandler);
// Вызываем функцию открытия попапа профиля по клику
openPopupButton.addEventListener('click', () => {
  togglePopup(popupProfile)
});
// Вызываем закрытие попапа профиля по крестику
closeProfileButton.addEventListener('click', () => {
  closePopup(popupProfile)
});
// Вызываем закрытие попапа добавления по крестику
closeAddButton.addEventListener('click', () => {
  closePopup(addPopup)
});
//Вызываем функцию открытия попапа добавления по клику
addButton.addEventListener('click', () => {
  openPopup(addPopup)
});
//Вызываем функцию добавления карточки
addForm.addEventListener('submit', startAddCard);