export default class Card {
    constructor(data, cardSelector, {handleCardClick, handleDeleteCardClick, plusLike, deleteLike}, ownerId) {
        this._data = data;
        this._id = data._id;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCardClick = handleDeleteCardClick;
        this._plusLike = plusLike;
        this._deleteLike = deleteLike;
        this._likes = data.likes.length;
        this._ownerId = ownerId;
    }

    _getTemplate() {
        // забираем разметку из HTML и клонируем элемент
        const cardElement = document
            .querySelector(this._cardSelector)
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


        // Добавим данные
        this._element.querySelector('.element__image').src = this._data.link;
        this._element.querySelector('.element__image').alt = this._data.name;
        this._element.querySelector('.element__description').textContent = this._data.name;
        this._likeCounter = this._element.querySelector('.element__number-of-likes');
        this._likeButton = this._element.querySelector('.element__like');
        this._likeCounter.textContent = this._likes;
        this._checkLikeState();
        this._checkOwner();


        // Вернём элемент наружу
        return this._element;
    }

    removeCard() {
        this._element.remove();
    }

    setLikeCount(data) {
        this._likeCounter = this._element.querySelector('.element__number-of-likes');
        this._likeCounter.textContent = String(data.likes.length);
    }

    _checkOwner(){
        if (this._data.owner._id !== this._ownerId) {
            this._element
                .querySelector('.element__trash').remove()
        }
    }

    _checkLikeState() {
        this._data.likes.forEach((owner) => {
            if (owner._id === this._ownerId) {
                this._likeButton.classList.add('element__like_active');
            }
        })
    }

    addLike() {
        this._likeButton.classList.add('element__like_active');
    }

    removeLike() {
        this._likeButton.classList.remove('element__like_active');
    }

    //Слушатели
    _setEventListeners() {
        //Открытие попапа  с картинкой
        this._element
            .querySelector('.element__image')
            .addEventListener('click', () => {
                this._handleCardClick(this._data);
            })
        //Лайк
        this._element
            .querySelector('.element__like')
            .addEventListener('click',
                () => {
                if (this._likeButton.classList
                    .contains('element__like_active')) {
                    this._deleteLike(this._data);
                } else {
                    this._plusLike(this._data);
                }
                });
        //Удаление
        this._element
            .querySelector('.element__trash')
            .addEventListener('click', this._handleDeleteCardClick)

    }
}