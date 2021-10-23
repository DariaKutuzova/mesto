import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js"

import {
    buttonChangeProfile,
    buttonChangeAvatar,
    // buttonDeleteImage,
    formChangeProfile,
    formChangeAvatar,
    // formDeleteImage,
    nameInput,
    jobInput,
    buttonAddPlace,
    formAddPlace,
    cardListSelector,
    configValidation,
    popupProfileSelector,
    popupAddPlaceSelector,
    popupAvatarSelector,
    popupDeleteImageSelector,
    userNameSelector,
    userJobSelector,
    popupPhotoSelector,
    // initialCards
} from '../utils/constants.js'

let thisCard = null;

//Валидация отдельных форм
const validationProfileForm = new FormValidator(configValidation, formChangeProfile);
validationProfileForm.enableValidation();
const validationAddForm = new FormValidator(configValidation, formAddPlace);
validationAddForm.enableValidation();
const validationAvatarForm = new FormValidator(configValidation, formChangeAvatar);
validationAvatarForm.enableValidation();

//Функция создания карточки
function createCard(data) {
    const handleCardClick = popupWithImage.open.bind(popupWithImage);
    // const handleDeleteCardClick = popupDeleteImage.open.bind(popupDeleteImage);
    const newCard = new Card(data, '#card-template', {
        handleCardClick,
        handleDeleteCardClick: () => {
            thisCard = newCard;
            popupDeleteImage.open(data);
        },})
    return newCard.generateCard();
}

//Экземпляр попапа с картинкой
const popupWithImage = new PopupWithImage(popupPhotoSelector);
popupWithImage.setEventListeners();

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
        api.addCard(card)
            .then((res) => {
                const cardList = new Section({
                    res,
                    renderer: (item) => {
                        cardList.addItem(createCard(item));
                    }
                }, cardListSelector);
            })
}
})

popupAddPlaceForm.setEventListeners();

//Экземпляр попапа смены аватара
const popupChangeAvatarForm = new PopupWithForm(popupAvatarSelector, {
    submit: (card) => {
        //Встроить в сетку
        cardList.addItem(createCard(card));
    }
})

popupChangeAvatarForm.setEventListeners();

//Экземпляр попапа удаления карточки
const popupDeleteImage = new PopupWithForm(popupDeleteImageSelector, {
    submit: () => {
        if (true) {
        thisCard.deleteCard()
        } else {popupDeleteImage.close()}
    }
})

popupDeleteImage.setEventListeners();

//Экземпляр API
const api= new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-29/cards/",
    headers: {
        "content-type": "application/json",
        authorization: "8bc97cc4-e8dd-4b97-8e8e-b29acddab317"
                }
});
const allCards = api.getAllCards();
allCards
    .then((data) => {
    //Добавляем карточки на начальную страницу
    const cardList = new Section({
        data,
        renderer: (item) => {
            cardList.addItem(createCard(item));
        }
    }, cardListSelector, api);

    cardList.renderItems();
})
    .catch((err) => {alert(err)});

// Вызываем функцию открытия попапа профиля по клику
buttonChangeProfile.addEventListener('click', setValuesProfilePopup);

//Вызываем функцию открытия попапа добавления по клику
buttonAddPlace.addEventListener('click', () => {
    validationAddForm.resetValidation();
    popupAddPlaceForm.open();
});

//Вызываем функцию открытия попапа смены аватара по клику
buttonChangeAvatar.addEventListener('click', () => {
    validationAvatarForm.resetValidation();
    popupChangeAvatarForm.open();
});

