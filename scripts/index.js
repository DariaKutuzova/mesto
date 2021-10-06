import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
// import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
// Объявляем переменные
const buttonChangeProfile = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const formChangeProfile = document.querySelector('.popup__form_type_prifile');
const nameInput = document.querySelector('.popup__input_value_name');
const jobInput = document.querySelector('.popup__input_value_job');
const pageName = document.querySelector('.profile__name');
const pageJob = document.querySelector('.profile__description');
const buttonAddPlace = document.querySelector('.profile__add-button');
const popupAddPlace = document.querySelector('.popup_type_add-place');
const imageLinkAddPlace = document.querySelector('.popup__input_value_link');
const descriptionAddPlace = document.querySelector('.popup__input_value_place');
const formAddPlace = document.querySelector('.popup__form_type_add');
const imagePopup = document.querySelector('.popup_type_open-image');
export const imageInPopup = document.querySelector('.popup__image');
export const descriptionInPopup = document.querySelector('.popup__image-title');
const cardsContainer = document.querySelector('.elements');
const cardListSelector = '.elements';

export const popups = document.querySelectorAll('.popup');


//Объект настроек формы
export const configValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};

//Валидация отдельных форм
const validationProfileForm = new FormValidator(configValidation, formChangeProfile);
validationProfileForm.enableValidation();
const validationAddForm = new FormValidator(configValidation, formAddPlace);
validationAddForm.enableValidation();

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

//Функция создания карточки
function createCard(card) {
    const newCard = new Card(card, '#card-template');
    return newCard.generateCard();
}

// //Добавляем карточки на начальную страницу
// initialCards.forEach((item) => {
//     // Добавляем в DOM
//     cardsContainer.prepend(createCard(item));
// });

//Добавляем карточки на начальную страницу
const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
        const newCard = new Card(item, '#card-template');
        const cardElement = newCard.generateCard();

        cardList.addItem(cardElement);
    }
}, cardListSelector);


cardList.renderItems();


//Добавление новой карточки
const startAddCard = (event) => {
    event.preventDefault();

    const newCard = {
        name: descriptionAddPlace.value,
        link: imageLinkAddPlace.value
    };

    createCard(newCard);

    //Добавляем в начало
    cardsContainer.prepend(createCard(newCard));
    closePopup(popupAddPlace);
    formAddPlace.reset();
    validationAddForm.resetValidation();
}

//Функция открытия поппапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
    //Закрытие попапа на esc
    document.addEventListener('keydown', keyHandler);
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
    openProfilePopup(popupProfile);
    validationProfileForm.resetValidation(popupProfile);
});

//Закрытие попапа по оверлею и по крестику
popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
            closePopup(popup)
        }
    })
})

//Вызываем функцию открытия попапа добавления по клику
buttonAddPlace.addEventListener('click', () => {
    openPopup(popupAddPlace);
    validationAddForm.resetValidation(popupProfile);
});

//Вызываем функцию добавления карточки
formAddPlace.addEventListener('submit', startAddCard);

//Функция открытия попапа с картинкой
export function handleOpenPopup(name, link) {
    imageInPopup.src = link;
    descriptionInPopup.textContent = name;
    imageInPopup.alt = name;
    openPopup(imagePopup);
}
