// Объявляем переменные
export const buttonChangeProfile = document.querySelector('.profile__edit-button');
export const buttonAddPlace = document.querySelector('.profile__add-button');
export const buttonChangeAvatar = document.querySelector('.profile__avatar-edit');
export const buttonDeleteImage = document.querySelector('.element__trash');
export const formChangeProfile = document.querySelector('.popup__form_type_prifile');
export const formChangeAvatar = document.querySelector('.popup__form_type_avatar');
export const formAddPlace = document.querySelector('.popup__form_type_add');
export const formDeleteImage = document.querySelector('.popup__form_type_confirm');
export const nameInput = document.querySelector('.popup__input_value_name');
export const jobInput = document.querySelector('.popup__input_value_job');
export const cardListSelector = '.elements';
export const popupProfileSelector = '.popup_type_profile';
export const popupAddPlaceSelector = '.popup_type_add-place';
export const popupAvatarSelector = '.popup_type_avatar';
export const popupDeleteImageSelector = '.popup_type_confirm';
export const userNameSelector = '.profile__name';
export const userJobSelector = '.profile__description';
export const popupPhotoSelector = '.popup_type_open-image';




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
