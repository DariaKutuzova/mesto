export default class Card {
    constructor(data, cardSelector, {handleCardClick, handleDeleteCardClick}, api) {
        this._data = data;
        this._id = data.id;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCardClick = handleDeleteCardClick;
        this._api = api;
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

        // Вернём элемент наружу
        return this._element;
    }

    //Удаление карточки
    deleteThisCard() {
        this._delClickHandler(this._element);
    }

    deleteElement(element) {
        element.remove();
        element = null;
    }

    _delClickHandler = () => {
        this._api.deleteCard(this._id)
            .then(() => {
            this._element.remove();
        })
            .catch((err) => console.log(err));
    }

    getCardId() { return this._id; }

    //Лайк
    _like(event) {
    event.target.classList.toggle('element__like_active');
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
            this._like);
        //Удаление
        this._element
            .querySelector('.element__trash')
            .addEventListener('click', this._handleDeleteCardClick)

    }
}