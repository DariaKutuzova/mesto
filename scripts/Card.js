
const imagePopup = document.querySelector('.popup_type_open-image');
const buttonCloseImage = document.querySelector('.popup__close_type_image');
const imageInPopup = document.querySelector('.popup__image');
const descriptionInPopup = document.querySelector('.popup__image-title');

export default class Card {
    constructor(data) {
        this._name = data.name;
        this._link = data.link;
    }
    _getTemplate() {
        // забираем разметку из HTML и клонируем элемент
        const cardElement = document
            .querySelector('#card-template')
            .content
            .querySelector('.element')
            .cloneNode(true);

        // вернём DOM-элемент карточки
        return cardElement;
    }
    generateCard() {
        // Запишем разметку в приватное поле _element.
        // Так у других элементов появится доступ к ней.
        this._element = this._getTemplate();
        this._setEventListeners();
        this._deleteCard();
        this._like();


        // Добавим данные
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__description').textContent = this._name;

        // Вернём элемент наружу
        return this._element;
    }
    //Открытие попапа
    _handleOpenPopup() {
        imageInPopup.src = this._link;
        descriptionInPopup.textContent = this._name;
        imagePopup.classList.add('popup_opened');
    }
    //Закрытие попапа
    _handleClosePopup() {
        imageInPopup.src = '';
        descriptionInPopup.textContent = '';
        imagePopup.classList.remove('popup_opened');
    }
    //Удаление карточки
    _deleteCard() {
        this._element
            .querySelector('.element__trash')
            .addEventListener('click', (event) => {
                event.target.closest('.element').remove();
            });
    }
    //Лайк
    _like() {
        this._element
            .querySelector('.element__like')
            .addEventListener('click', function (evt) {
                evt.target.classList.toggle('element__like_active');
            });
    }
  //Открытие и закрытие попапа по клику
    _setEventListeners() {
        this._element
            .querySelector('.element__image')
            .addEventListener('click', () => {
                this._handleOpenPopup();
            });
        buttonCloseImage.addEventListener('click', () => {
            this._handleClosePopup();
        });

    }
}