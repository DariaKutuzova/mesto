// Объявляем переменные
export const buttonChangeProfile = document.querySelector('.profile__edit-button');
export const popupProfile = document.querySelector('.popup_type_profile');
export const formChangeProfile = document.querySelector('.popup__form_type_prifile');
export const nameInput = document.querySelector('.popup__input_value_name');
export const jobInput = document.querySelector('.popup__input_value_job');
export const pageName = document.querySelector('.profile__name');
export const pageJob = document.querySelector('.profile__description');
export const buttonAddPlace = document.querySelector('.profile__add-button');
export const popupAddPlace = document.querySelector('.popup_type_add-place');
export const imageLinkAddPlace = document.querySelector('.popup__input_value_link');
export const descriptionAddPlace = document.querySelector('.popup__input_value_place');
export const formAddPlace = document.querySelector('.popup__form_type_add');
export const imagePopup = document.querySelector('.popup_type_open-image');
export const imageInPopup = document.querySelector('.popup__image');
export const descriptionInPopup = document.querySelector('.popup__image-title');
export const cardsContainer = document.querySelector('.elements');
export const oneCard = document.querySelector('.element');
export const cardListSelector = '.elements';
export const popupSelector = '.popup';
export const popupProfileSelector = '.popup_type_profile';
export const popupAddPlaceSelector = '.popup_type_add-place';
export const userNameSelector = '.profile__name';
export const userJobSelector = '.profile__description';
export const popupPhotoSelector = '.popup_type_open-image';

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

//Массив картинок, подгружаемых на начальную страницу
export const initialCards = [{
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
