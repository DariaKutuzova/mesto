import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

import {
    buttonChangeProfile,
    popupProfile,
    formChangeProfile,
    nameInput,
    jobInput,
    // pageName,
    // pageJob,
    buttonAddPlace,
    popupAddPlace,
    imageLinkAddPlace,
    descriptionAddPlace,
    formAddPlace,
    // imagePopup,
    cardsContainer,
    cardListSelector,
    // popups,
    configValidation,
    // popupSelector,
    popupProfileSelector,
    popupAddPlaceSelector,
    userNameSelector,
    userJobSelector,
    popupPhotoSelector,
    initialCards
} from './constants.js'

//Валидация отдельных форм
const validationProfileForm = new FormValidator(configValidation, formChangeProfile);
validationProfileForm.enableValidation();
const validationAddForm = new FormValidator(configValidation, formAddPlace);
validationAddForm.enableValidation();

//Функция создания карточки
function createCard(card) {
    const newCard = new Card(card, '#card-template', {
        handleCardClick: (card) => {
            const photoPopup = new PopupWithImage(popupPhotoSelector, card);
            photoPopup.open();
            photoPopup.setEventListeners()
        }
})
    return newCard.generateCard();
}

//Добавляем карточки на начальную страницу
const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
        cardList.addItem(createCard(item));
    }
}, cardListSelector);

cardList.renderItems();



// //Добавление новой карточки
// const startAddCard = (event) => {
//     event.preventDefault();
//
//     const newCard = {
//         name: descriptionAddPlace.value,
//         link: imageLinkAddPlace.value
//     };
//
//     createCard(newCard);
//
//     //Добавляем в начало
//     cardsContainer.prepend(createCard(newCard));
//     closePopup(popupAddPlace);
//     formAddPlace.reset();
//     validationAddForm.resetValidation();
// }

//Инфо пользователя
const userInfo = new UserInfo({name: userNameSelector, info: userJobSelector});

//Передаем инфо пользователя со страницы в форму при открытии
const setValuesProfilePopup = () => {
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    jobInput.value = userData.info;
    validationProfileForm.resetValidation();
    popupWithInfoForm.open()
}

//Экземпляр попапа профиля
const popupWithInfoForm = new PopupWithForm(popupProfileSelector, {
    submit: (data) => {
        userInfo.setUserInfo(data);
    }
});
popupWithInfoForm.setEventListeners();

//Экземпляр попапа добавления карточки
const popupAddPlaceForm = new PopupWithForm(popupAddPlaceSelector, {
    submit: (card) => {

        //Добавить карточку по сабмиту
        const newCard = new Card(card, '#card-template', {
            handleCardClick: (card) => {
                const photoPopup = new PopupWithImage(popupPhotoSelector, card);
                photoPopup.open();
            }
        })
        const cardElement = newCard.generateCard();
        cardList.addItem(cardElement, 'prepend');
}
})


popupAddPlaceForm.setEventListeners();

// // Функция присвоения значений из формы на страницу и закрытие попапа
// function submitHandlerProfileForm(evt) {
//     evt.preventDefault();
//     pageName.textContent = nameInput.value;
//     pageJob.textContent = jobInput.value;
//     closePopup(popupProfile);
// }

// Вызываем функцию открытия попапа профиля по клику
buttonChangeProfile.addEventListener('click', setValuesProfilePopup);

//Вызываем функцию открытия попапа добавления по клику
buttonAddPlace.addEventListener('click', () => {
    popupAddPlaceForm.open();
});

