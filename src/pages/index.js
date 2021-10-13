import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import {
    buttonChangeProfile,
    formChangeProfile,
    nameInput,
    jobInput,
    buttonAddPlace,
    formAddPlace,
    cardListSelector,
    configValidation,
    popupProfileSelector,
    popupAddPlaceSelector,
    userNameSelector,
    userJobSelector,
    popupPhotoSelector,
    initialCards
} from '../utils/constants.js'

//Валидация отдельных форм
const validationProfileForm = new FormValidator(configValidation, formChangeProfile);
validationProfileForm.enableValidation();
const validationAddForm = new FormValidator(configValidation, formAddPlace);
validationAddForm.enableValidation();

//Функция создания карточки
function createCard(data) {
    const handleCardClick = popupWithImage.open.bind(popupWithImage);
    const newCard = new Card(data, '#card-template', {
        handleCardClick})
    return newCard.generateCard();
}

//Экземпляр попапа с картинкой
const popupWithImage = new PopupWithImage(popupPhotoSelector);
popupWithImage.setEventListeners();

//Добавляем карточки на начальную страницу
const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
        cardList.addItem(createCard(item));
    }
}, cardListSelector);

cardList.renderItems();

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
        //Встроить в сетку
        cardList.addItem(createCard(card));
}
})

popupAddPlaceForm.setEventListeners();

// Вызываем функцию открытия попапа профиля по клику
buttonChangeProfile.addEventListener('click', setValuesProfilePopup);

//Вызываем функцию открытия попапа добавления по клику
buttonAddPlace.addEventListener('click', () => {
    validationAddForm.resetValidation();
    popupAddPlaceForm.open();
});

