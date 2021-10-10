import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
// import PopupWithForm from "./PopupWithForm.js";
// import UserInfo from "./UserInfo.js";

import {
    buttonChangeProfile,
    popupProfile,
    formChangeProfile,
    nameInput,
    jobInput,
    pageName,
    pageJob,
    buttonAddPlace,
    popupAddPlace,
    imageLinkAddPlace,
    descriptionAddPlace,
    formAddPlace,
    imagePopup,
    cardsContainer,
    cardListSelector,
    popups,
    configValidation,
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
        handleCardClick: () => {
            const photoPopup = new PopupWithImage(imagePopup);
            photoPopup.open(card.link, card.name);
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

// //Функция открытия попапа с картинкой
// export function handleOpenPopup(name, link) {
//     imageInPopup.src = link;
//     descriptionInPopup.textContent = name;
//     imageInPopup.alt = name;
//     openPopup(imagePopup);
// }
