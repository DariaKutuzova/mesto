import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
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
    pageName,
    pageJob,
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
    avatar,
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

//Экземпляр API
const api= new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-29/",
    headers: {
        "content-type": "application/json",
        authorization: "8bc97cc4-e8dd-4b97-8e8e-b29acddab317"
    }
});

//Функция создания карточки
function createCard(data) {
    const handleCardClick = popupWithImage.open.bind(popupWithImage);
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

//Инфо пользователя с сервера на страницу
const pushInfo = api.getApiUserInfo();
pushInfo
    .then((res) => {
            pageName.textContent = res.name;
            pageJob.textContent = res.about;
            avatar.src = res.avatar;
        })



//Передаем инфо пользователя со страницы в форму при открытии
const setValuesProfilePopup = () => {
    api.getApiUserInfo()
        .then((data) => {
            nameInput.value = data.name;
            jobInput.value = data.about;
        })
    // const userData = userInfo.getUserInfo();
    // nameInput.value = userData.name;
    // jobInput.value = userData.info;
    validationProfileForm.resetValidation();
    popupWithInfoForm.open()
}


//Экземпляр попапа профиля
const popupWithInfoForm = new PopupWithForm(popupProfileSelector, {
    submit: (data) => {
        api.patchUserInfo(data)
            .then((res) => {
                userInfo.setUserInfo(res);
            })
    }
});
popupWithInfoForm.setEventListeners();

//Экземпляр попапа добавления карточки
const popupAddPlaceForm = new PopupWithForm(popupAddPlaceSelector, {
    submit: (card) => {
        popupAddPlaceForm.loading(true);
        api.addCard(card)
            .then((res) => {
                const cardList = new Section({
                    res,
                    renderer: (item) => {
                        cardList.addItem(createCard(item));
                    }
                }, cardListSelector);
            })
            .catch((err)=>{
                console.log(err)
            })
}
})

popupAddPlaceForm.setEventListeners();

//Экземпляр попапа смены аватара
const popupChangeAvatarForm = new PopupWithForm(popupAvatarSelector, {
    submit: (link) => {
        api.changeAvatar(link)
            .then((data) => {
                avatar.src = data.link
            })
    }
})

popupChangeAvatarForm.setEventListeners();

//Экземпляр попапа удаления карточки
const popupDeleteImage = new PopupWithConfirm(popupDeleteImageSelector, {
    submit: (card) => {
        console.log(card);
    //     api.deleteCard(card.getCardId())
    //     .then(() => {
    //         card.deleteElement();
    //     })
    //     .catch((err) => {
    //         console.log(`Невозможно удалить карточку. Ошибка ${err}.`);
    //     })
    //     .finally(() => {
    //         popupDeleteImage.close();
    //     });
    }

})

popupDeleteImage.setEventListeners();

// // Удаление карточки
// function deleteThisCard(card) {
//     api.deleteCard(card.getCardId())
//         .then(() => {
//             card.delete();
//         })
//         .catch((err) => {
//             console.log(`Невозможно удалить карточку. Ошибка ${err}.`);
//         })
//         .finally(() => {
//             popupDeleteImage.close();
//         });
// }

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


