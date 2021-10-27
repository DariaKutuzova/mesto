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
let ownerId = null;

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
function createCard(data, ownerId) {
    const handleCardClick = popupWithImage.open.bind(popupWithImage);
    const newCard = new Card(data, '#card-template', {
        handleCardClick,
        handleDeleteCardClick: () => {
            thisCard = newCard;
            popupDeleteImage.open(data);
        },
        plusLike: (data) => {
        api.addLike(data)
            .then((data) => {
                newCard.setLikeCount(data);
                newCard.addLike();
            })
            .catch((err) => {
                console.log(`Не могу добавить лайк. Ошибка ${err}.`)
            })
    },
        deleteLike: (data) => {
        api.disLike(data)
            .then((data) => {
                newCard.setLikeCount(data);
                newCard.removeLike(data);
            })
            .catch((err) => {
                console.log(`Не могу убрать лайк. Ошибка ${err}.`)
            })
        },
    }, ownerId);
    // newCard.checkLikeState(item);
    return newCard.generateCard();
}

//Функция удаления карточки
function delCard(card) {
    api.deleteCard(card._id)
        .then(() => {
            thisCard.removeCard();
        })
        .catch((err) => {
            console.log(`Невозможно удалить карточку. Ошибка ${err}.`);
        })
        .finally(() => {
            popupDeleteImage.close();
            popupDeleteImage.loading(false);
        });
}
//Экземпляр секции
const cardList = new Section({
    renderer: (item) => {
        cardList.addItem(createCard(item, ownerId));
    }
}, cardListSelector);


//Экземпляр попапа с картинкой
const popupWithImage = new PopupWithImage(popupPhotoSelector);
popupWithImage.setEventListeners();

//Инфо пользователя
const userInfo = new UserInfo({name: userNameSelector, info: userJobSelector, avatar: userNameSelector});

//Инфо пользователя с сервера на страницу
const pushInfo = api.getApiUserInfo();
pushInfo
    .then((res) => {
            pageName.textContent = res.name;
            pageJob.textContent = res.about;
            avatar.src = res.avatar;
            ownerId = res._id;
        })

//Передаем инфо пользователя со страницы в форму при открытии
const setValuesProfilePopup = () => {
    api.getApiUserInfo()
        .then((data) => {
            nameInput.value = data.name;
            jobInput.value = data.about;
        })
    validationProfileForm.resetValidation();
    popupWithInfoForm.open()
}

//Экземпляр попапа профиля
const popupWithInfoForm = new PopupWithForm(popupProfileSelector, {
    submit: (data) => {
        popupWithInfoForm.loading(true);
        api.patchUserInfo(data)
            .then((res) => {
                userInfo.setUserInfo(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupWithInfoForm.loading(false);
                popupWithInfoForm.close()
            })
    }
});
popupWithInfoForm.setEventListeners();

//Экземпляр попапа смены аватара
const popupChangeAvatarForm = new PopupWithForm(popupAvatarSelector, {
    submit: (data) => {
        popupChangeAvatarForm.loading(true);
        api.changeAvatar(data)
            .then((res) => {
                userInfo.setUserAvatar(res);
            })
            .then(() => {
                api.getApiUserInfo()
                    .then((res) => {
                        avatar.src = res.avatar;
                    })
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupChangeAvatarForm.loading(false);
                popupChangeAvatarForm.close()
            })
    }
})
popupChangeAvatarForm.setEventListeners();

//Экземпляр попапа добавления карточки
const popupAddPlaceForm = new PopupWithForm(popupAddPlaceSelector, {
    submit: (card) => {
        popupAddPlaceForm.loading(true);
        api.addCard(card)
            .then(() => {
                api.getAllCards()
                    .then((data) => {
                        //Добавляем карточки на начальную страницу
                        const cardList = new Section({
                            data,
                            renderer: (item) => {
                                cardList.addItem(createCard(item, ownerId));
                            }
                        }, cardListSelector, api);

                        cardList.renderItems();
                    })
                    .catch((err) => {alert(err)});
            })
        //     .then((data) => {
        //     cardList.addItem(createCard(data, ownerId));
        // })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupAddPlaceForm.loading(false);
                popupAddPlaceForm.close()
            })
    }
})

popupAddPlaceForm.setEventListeners();

//Экземпляр попапа удаления карточки
const popupDeleteImage = new PopupWithConfirm(popupDeleteImageSelector, {
    submit: (card) => {
        popupDeleteImage.loading(true);
        delCard(card);
    }
})

popupDeleteImage.setEventListeners();

const allCards = api.getAllCards();
allCards
    .then((data) => {
    //Добавляем карточки на начальную страницу
    const cardList = new Section({
        data,
        renderer: (item) => {
            cardList.addItem(createCard(item, ownerId));
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

// Promise.all([api.getAllCards(), api.getApiUserInfo()])
//     .then(([cards, userData]) => {
//         userInfo.setUserInfo(userData);
//         avatar.src = userData.avatar;
//         ownerId = userData._id;
//
//         cardList.renderItems(cards);
//     })
//     .catch((err) => {
//         console.log(`${err}`);
//     });


