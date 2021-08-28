// Объявляем переменные
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_value_name');
let jobInput = document.querySelector('.popup__input_value_job');
let pageName = document.querySelector('.profile__name');
let pageJob = document.querySelector('.profile__description');
const cardsElement = document.querySelector('.elements');
const nameCard = document.querySelector('.element__description');
const linkCard = document.querySelector('.element__image');
const cardTemplate = document.querySelector('#card-template').content;

//Массив картинок, подгружаемых на начальную страницу
const initialCards = [
  {
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
const addCard = (card) => {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = card.link;
  cardElement.querySelector('.element__image').alt = card.name;
  cardElement.querySelector('.element__description').textContent = card.name;

  cardsElement.prepend(cardElement);
};

const startAddCard = (event) => {
  event.preventDefault();
  addCard({
    name: nameCard,
    link: linkCard
  })
}

//Загружаем карточки на начальную страницу
initialCards.forEach((card) => {
  addCard(card);
})

// Функция подтягивания значений со страницы в форму при открытии
function valuePopup() {
    nameInput.value = pageName.textContent;
    jobInput.value = pageJob.textContent;
  }

// Функция открытия/закрытия попапа
function openClose() {
  popup.classList.toggle('popup_opened');
}

function togglePopup() {
  openClose();
  valuePopup()
}

// Функция присвоения значений из формы на страницу и закрытие попапа
function formSubmitHandler(evt) {
  evt.preventDefault();
  pageName.textContent = nameInput.value;
  pageJob.textContent = jobInput.value;
  openClose();
}

// Вызываем функцию присвоения по клику на "Сохранить"
formElement.addEventListener('submit', formSubmitHandler);
// Вызываем функцию открытия попапа по клику
openPopupButton.addEventListener('click', togglePopup);
// Вызываем закрытие попапа по клику
closePopupButton.addEventListener('click', openClose);

